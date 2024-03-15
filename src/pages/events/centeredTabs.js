import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";
import EventCards from "./eventCards";

function CustomTabPanel(props) {
  const { children, value, index, type, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, color:"white", fontFamily:"sarpanch"}}>
          <EventCards type = {`${type}`}/>
        </Box>
      )}
    </div>
  );
}

const StyledTab = styled(Tab)({
  "&.Mui-selected": {
    color: "white"
  },fontFamily:"sarpanch"
});

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{width:"100%", display:'flex', flexDirection:"row", justifyContent:"center", padding:5}}>
        <Tabs value={value} onChange={handleChange} 
        sx={{ '& .MuiTab-root': {
                color: '#00C2FF',
              },border: 2,padding:0, borderColor: '#00C2FF',borderRadius:"20px", display:"inline-flex", alignItems:"center", justifyContent:"center"}}>
          <StyledTab label="All Events" {...a11yProps(0)}  sx={{fontSize:20,border: 2,padding:3, borderColor: '#00C2FF', }}/>
          <StyledTab label="Past Events" {...a11yProps(1)} sx={{fontSize:20, border: 2,padding:3, borderColor: '#00C2FF'}} />
          <StyledTab label="Upcoming Events" {...a11yProps(2)} sx={{fontSize:20,border: 2,padding:3, borderColor: '#00C2FF'}}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} type ={'all'}/>

      <CustomTabPanel value={value} index={1} type ={'past'} />

      <CustomTabPanel value={value} index={2} type ={'upcoming'} />

    </Box>
  );
}
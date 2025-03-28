import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

// Styled Paper component
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: 'white',
  height: 'auto', // Allow the container to adjust to its content
  lineHeight: '25px',
  fontSize: '20px',
  padding: '10px',
  paddingLeft: '15px',
  paddingRight: '15px',
  textAlign: 'justify',
  backgroundColor: "#001330",
  borderColor: '#00C2FF', // Neon blue border
  boxShadow: '0 0 10px #00C2FF, 0 0 10px #00C2FF', // Neon blue glow
}));

// Note component
function Note({ Name, Image, Text }) {
  return (
    <Item key={20} elevation={20}>
      <div className='d-flex flex-row position-relative' style={{ fontFamily: "sarpanch" }}>
        
        {/* Name section */}
        <div 
          className='d-flex px-4 py-2 rounded-pill flex-row position-absolute z-1' 
          style={{ top: "-20%", left: "5%", backgroundColor: "#00244F" }}>
          {Name}
        </div>
        
        {/* Text section */}
        <div className='d-flex flex-row p-2 mb-1 align-self-end' style={{ zIndex: 0 }}>
          {Text}
        </div>
        
        {/* Image section */}
        <div className='d-flex flex-row p-2' style={{ zIndex: 0, marginTop: "10px", width: "100%" }}>
          <img 
            src={Image} 
            className='rounded-1' 
            alt={Name} 
            style={{ 
              maxWidth: '100%', // Make the image responsive
              maxHeight: '200px', // Limit the height of the image
              objectFit: 'contain', // Ensure the image fits within the box
              margin: 'auto' // Center the image within the container
            }} 
          />
        </div>
        
      </div>
    </Item>
  );
}

export default Note;

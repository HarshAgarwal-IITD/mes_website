import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: 'white',
  height: '40%',
  lineHeight: '25px',
  textWrap: 'wrap',
  fontSize: '20px',
  padding: '10px',
  paddingLeft: '15px',
  paddingRight: '15px',
  textAlign: 'justify',
  backgroundColor:"#001330",
  borderColor: '#00C2FF', // Change to desired neon blue color
  boxShadow: '0 0 10px #00C2FF, 0 0 10px #00C2FF', // Add glow effect
  
}));

function Note(Name, Image, Text) {
  return (
            <Item key={20} elevation={20} >
                <div className='d-flex flex-row position-relative' style={{fontFamily:"sarpanch"}}>
                    <div className='d-flex px-4 py-2 rounded-pill flex-row position-absolute z-1 ' style={{top:"-20%", left:"5%",backgroundColor: "#00244F",}}>
                        Prof. M. R. Ravi
                    </div>
                    <div className='d-flex flex-row position absolute z-0 p-2 mb-1 align-self-end'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. orem Ipsum has been the industry's standard  
                    </div>
                    <div className='d-flex flex-row position absolute z-0 p-2 '>
                    <img src="/image/HOD.jpeg" className='rounded-1'/>
                    </div>
                </div>
            </Item>

  );
}

export default Note;
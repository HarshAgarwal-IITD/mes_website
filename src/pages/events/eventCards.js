import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, Pagination } from '@mui/material';

const EventCards = ({ type }) => {

  const currentDate = new Date().toJSON().slice(0, 10);

  const data = [
    { imageUrl: '/image/HOD.jpeg', buttonText: "Register", date: new Date("2024-03-12").toJSON().slice(0, 10) },
    { imageUrl: '/image/HOD.jpeg', buttonText: "Register", date: new Date("2024-03-11").toJSON().slice(0, 10) },
    { imageUrl: '/image/HOD.jpeg', buttonText: "Register", date: new Date("2024-03-25").toJSON().slice(0, 10) },
    { imageUrl: '/image/HOD.jpeg', buttonText: "Register", date: new Date("2024-03-22").toJSON().slice(0, 10) },
    { imageUrl: '/image/HOD.jpeg', buttonText: "Register", date: new Date("2024-03-23").toJSON().slice(0, 10) },
    { imageUrl: '/image/HOD.jpeg', buttonText: "Register", date: new Date("2024-03-02").toJSON().slice(0, 10) },
    { imageUrl: '/image/HOD.jpeg', buttonText: "Register", date: new Date("2024-03-27").toJSON().slice(0, 10) },
    { imageUrl: '/image/HOD.jpeg', buttonText: "Register", date: new Date("2024-03-03").toJSON().slice(0, 10) },
    { imageUrl: '/image/HOD.jpeg', buttonText: "Register", date: new Date("2024-03-20").toJSON().slice(0, 10) },
    // Add more data as needed
  ];

  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleButtonClick = (buttonText) => {
    // Handle button click for the specific event
    console.log(`Button clicked: ${buttonText}`);
  };

  const handleImageClick = () =>{
    console.log('Hello');
    const origin = window.origin;
    console.log(origin);
    window.location.href = `${origin+'/test'}`;
  }

  let filteredData = [];
  if (type === "past") {
    filteredData = data.filter(item => item.date < currentDate);
  } else if (type === "upcoming") {
    filteredData = data.filter(item => item.date > currentDate);
  } else {
    filteredData = data;
  }

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const visibleData = filteredData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className='d-flex w-100 flex-column gap-4'>
      <Grid container spacing={10} sx={{width:"80%",padding: '20px', marginLeft:"7.5%"}}> {/* Adjust spacing and padding */}
        {visibleData.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card sx={{borderRadius:"20px"}}>
              
              <img
                src={item.imageUrl}
                onClick={()=>{
                  handleImageClick();
                }}
                alt={`Event ${index + 1}`}
                style={{ cursor: 'pointer', width: '100%' }}
              />

              <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleButtonClick(item.buttonText)}
                  style={{
                   width:"100%", 
                   backgroundImage:"linear-gradient(#123261,#1E56A9)", 
                   borderRadius:"0px", 
                   fontSize:"20px",
                  fontFamily:"sarpanch" }}
                >
                  {item.buttonText}
                </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div className='d-flex flex-row w-100 justify-content-center'>
        {totalPages > 1 && (
          <div className='d-inline-flex' >
            <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
            sx={{
            display: 'flex', 
            justifyContent: 'center',
            border: "1px solid",
            borderColor: "#00C2FF",
            borderRadius: "10px",
            height:"50px",
            '& .Mui-selected': {
              color: '#426EAF !important', // Selected page number color
              backgroundColor: "transparent !important",
            },
            '& .MuiPaginationItem-root': {
              color: 'white', // Rest of the page numbers color
              fontSize: "30px !important",
              fontFamily: "sarpanch !important",
              width:"50px"
            },
            '& .MuiPaginationItem-icon': {
              color: 'white', // Rest of the page numbers color
              fontSize: "30px !important",
              fontFamily: "sarpanch !important",
              height:"30px"
            },
          }}
          />
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCards;

// <CardContent sx={{ padding:''}}>
// <Typography variant="h6" component="h2">
//   Event {index + 1 + (page - 1) * itemsPerPage}
//   {item.date}
// </Typography>
// <Typography color="textSecondary">
//   Description of Event {index + 1 + (page - 1) * itemsPerPage}
// </Typography>

// {/* Button below the image */}
// </CardContent>

import React, { useState } from 'react';
import { Grid, Card, Button, Pagination } from '@mui/material';

const EventCards = ({ type }) => {
  const currentDate = new Date().toJSON().slice(0, 10);

  const data = [
    { imageUrl: '/image/UG-Freshers.jpg', buttonText: "UG Orientation", date: new Date("2024-03-12").toJSON().slice(0, 10), targetUrl: '/ug-orientation' },
    { imageUrl: '/image/pg.jpeg', buttonText: "PG Orientation", date: new Date("2024-03-11").toJSON().slice(0, 10), targetUrl: '/pg-orientation' },
    { imageUrl: '/image/Industry-visit.jpg', buttonText: "Industry Visit", date: new Date("2024-03-25").toJSON().slice(0, 10), targetUrl: '/industry-visit' },
    { imageUrl: '/image/Time-capsule.jpg', buttonText: "Time Capsule", date: new Date("2025-03-22").toJSON().slice(0, 10), targetUrl: '/time-capsule' },
    { imageUrl: '/image/Department-trip.jpg', buttonText: "Departmental Trip", date: new Date("2025-03-23").toJSON().slice(0, 10), targetUrl: '/departmental-trip' },
    { imageUrl: '/image/cad.jpeg', buttonText: "CAD Competition", date: new Date("2025-03-02").toJSON().slice(0, 10), targetUrl: '/cad-competition' },
    { imageUrl: '/image/relay-race.avif', buttonText: "Engineering Relay Race", date: new Date("2025-03-27").toJSON().slice(0, 10), targetUrl: '/relay-race' },
    { imageUrl: '/image/egg1.jpeg', buttonText: "Don't Break the Egg", date: new Date("2025-03-03").toJSON().slice(0, 10), targetUrl: '/egg-break' },
    { imageUrl: '/image/study-beyond-borders.jpeg', buttonText: "Study Beyond Borders", date: new Date("2025-03-20").toJSON().slice(0, 10), targetUrl: '/study-beyond-borders' },
  ];

  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleButtonClick = (buttonText) => {
    console.log(`Button clicked: ${buttonText}`);
  };

  const handleImageClick = (targetUrl) => {
    // window.location.href = targetUrl; // Commented out redirection logic
  };

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
      <Grid container spacing={10} sx={{ width: "80%", padding: '20px', marginLeft: "7.5%" }}>
        {visibleData.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: "20px" }}>
              
              <img
                src={item.imageUrl}
                onClick={() => handleImageClick(item.targetUrl)}
                alt={`Event ${index + 1}`}
                style={{
                  width: '100%',        // Ensures image takes full width of the card
                  height: '200px',       // Fixed height for consistency
                  objectFit: 'cover'     // Fills the area, cropping if necessary
                }}  
              />

              <Button
                variant="contained"
                color="primary"
                onClick={() => handleButtonClick(item.buttonText)}
                style={{
                  width: "100%",
                  backgroundImage: "linear-gradient(#123261,#1E56A9)",
                  borderRadius: "0px",
                  fontSize: "20px",
                  fontFamily: "sarpanch"
                }}
              >
                {item.buttonText}
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div className='d-flex flex-row w-100 justify-content-center'>
        {totalPages > 1 && (
          <div className='d-inline-flex'>
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
                height: "50px",
                '& .Mui-selected': {
                  color: '#426EAF !important',
                  backgroundColor: "transparent !important",
                },
                '& .MuiPaginationItem-root': {
                  color: 'white',
                  fontSize: "30px !important",
                  fontFamily: "sarpanch !important",
                  width: "50px"
                },
                '& .MuiPaginationItem-icon': {
                  color: 'white',
                  fontSize: "30px !important",
                  fontFamily: "sarpanch !important",
                  height: "30px"
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

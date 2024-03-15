import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, Pagination } from '@mui/material';

const EventCards = ({ type }) => {

  const currentDate = new Date().toJSON().slice(0, 10);

  const data = [
    { imageUrl: 'image1.jpg', buttonText: 'Button 1', date: new Date("2024-03-12").toJSON().slice(0, 10) },
    { imageUrl: 'image2.jpg', buttonText: 'Button 2', date: new Date("2024-03-11").toJSON().slice(0, 10) },
    { imageUrl: 'image3.jpg', buttonText: 'Button 3', date: new Date("2024-03-25").toJSON().slice(0, 10) },
    { imageUrl: 'image4.jpg', buttonText: 'Button 4', date: new Date("2024-03-22").toJSON().slice(0, 10) },
    { imageUrl: 'image5.jpg', buttonText: 'Button 5', date: new Date("2024-03-23").toJSON().slice(0, 10) },
    { imageUrl: 'image6.jpg', buttonText: 'Button 6', date: new Date("2024-03-02").toJSON().slice(0, 10) },
    { imageUrl: 'image6.jpg', buttonText: 'Button 6', date: new Date("2024-03-27").toJSON().slice(0, 10) },
    { imageUrl: 'image6.jpg', buttonText: 'Button 6', date: new Date("2024-03-03").toJSON().slice(0, 10) },
    { imageUrl: 'image6.jpg', buttonText: 'Button 6', date: new Date("2024-03-20").toJSON().slice(0, 10) },
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

  let filteredData = [];
  if (type === "past") {
    filteredData = data.filter(item => item.date < currentDate);
  } else if (type === "upcoming") {
    filteredData = data.filter(item => item.date > currentDate);
  } else {
    filteredData = data;
  }

  console.log(data[0].date);

  

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const visibleData = filteredData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div>
      <Grid container spacing={2}>
        {visibleData.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card>
              {/* Clickable image */}
              <img
                src={item.imageUrl}
                alt={`Event ${index + 1}`}
                style={{ cursor: 'pointer', width: '100%' }}
              />
              <CardContent>
                <Typography variant="h6" component="h2">
                  {/* Event {index + 1 + (page - 1) * itemsPerPage} */}
                  {item.date}
                </Typography>
                <Typography color="textSecondary">
                  Description of Event {index + 1 + (page - 1) * itemsPerPage}
                </Typography>
                
                {/* Button below the image */}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleButtonClick(item.buttonText)}
                  style={{ marginTop: '10px' }}
                >
                  {item.buttonText}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
        />
      )}
    </div>
  );
};

export default EventCards;

// import React, { useState } from 'react';
// import { Grid, Card, Button, Pagination } from '@mui/material';

// const EventCards = ({ type }) => {
//   const currentDate = new Date().toJSON().slice(0, 10);

//   const data = [
//     { imageUrl: '/image/UG-Orientation.png', buttonText: "UG Orientation", date: new Date("2024-03-12").toJSON().slice(0, 10), targetUrl: '/ug-orientation' },
//     { imageUrl: '/image/pg.jpeg', buttonText: "PG Orientation", date: new Date("2024-03-11").toJSON().slice(0, 10), targetUrl: '/pg-orientation' },
//     { imageUrl: '/image/FreshersParty.JPG', buttonText: "Fresher's Party", date: new Date("2024-03-12").toJSON().slice(0, 10), targetUrl: '/ug-orientation' },
//     { imageUrl: '/image/Industry-visit.jpg', buttonText: "Industry Visit", date: new Date("2026-03-25").toJSON().slice(0, 10), targetUrl: '/industry-visit' },
//     { imageUrl: '/image/Tryst.jpeg', buttonText: "Tryst", date: new Date("2026-03-22").toJSON().slice(0, 10), targetUrl: '/time-capsule' },
//     { imageUrl: '/image/Department-trip.jpg', buttonText: "Departmental Trip", date: new Date("2026-03-23").toJSON().slice(0, 10), targetUrl: '/departmental-trip' },
//     { imageUrl: '/image/Seminar.jpeg', buttonText: "Research Seminar", date: new Date("2026-03-01").toJSON().slice(0, 10), targetUrl: '/cad-competition' },
//     { imageUrl: '/image/Researchance.jpeg', buttonText: "Researchance", date: new Date("2024-03-27").toJSON().slice(0, 10), targetUrl: '/relay-race' },
//     { imageUrl: '/image/sports.jpg', buttonText: "Departmental Sports Day", date: new Date("2026-04-03").toJSON().slice(0, 10), targetUrl: '/egg-break' },
//     { imageUrl: '/image/Farewell.jpg', buttonText: "Farewell", date: new Date("2026-03-20").toJSON().slice(0, 10), targetUrl: '/study-beyond-borders' },
//     { imageUrl: '/image/esports.jpeg', buttonText: "E-Sports", date: new Date("2024-03-12").toJSON().slice(0, 10), targetUrl: '/ug-orientation' },
//     { imageUrl: '/image/labvisit.jpeg', buttonText: "Lab Visit", date: new Date("2024-03-12").toJSON().slice(0, 10), targetUrl: '/ug-orientation' },

//   ];

//   const [page, setPage] = useState(1);
//   const itemsPerPage = 6;

//   const handlePageChange = (event, value) => {
//     setPage(value);
//   };

//   const handleButtonClick = (buttonText) => {
//     console.log(`Button clicked: ${buttonText}`);
//   };

//   const handleImageClick = (targetUrl) => {
//     // window.location.href = targetUrl; // Commented out redirection logic
//   };

//   let filteredData = [];
//   if (type === "past") {
//     filteredData = data.filter(item => item.date < currentDate);
//   } else if (type === "upcoming") {
//     filteredData = data.filter(item => item.date > currentDate);
//   } else {
//     filteredData = data;
//   }

//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);

//   const visibleData = filteredData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

//   return (
//     <div className='d-flex w-100 flex-column gap-4'>
//       <Grid container spacing={10} sx={{ width: "80%", padding: '20px', marginLeft: "7.5%" }}>
//         {visibleData.map((item, index) => (
//           <Grid key={index} item xs={12} sm={6} md={4}>
//             <Card sx={{ borderRadius: "20px"}}>
              
//               <img
//                 src={item.imageUrl}
//                 onClick={() => handleImageClick(item.targetUrl)}
//                 alt={`Event ${index + 1}`}
//                 style={{
//                   width: '100%',        // Ensures image takes full width of the card
//                   height: '200px',       // Fixed height for consistency
//                   objectFit: 'cover'     // Fills the area, cropping if necessary
//                 }}  
//               />

//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() => handleButtonClick(item.buttonText)}
//                 style={{
//                   width: "100%",
//                   backgroundImage: "linear-gradient(#123261,#1E56A9)",
//                   borderRadius: "0px",
//                   fontSize: "20px",
//                   fontFamily: "sarpanch"
//                 }}
//               >
//                 {item.buttonText}
//               </Button>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       <div className='d-flex flex-row w-100 justify-content-center'>
//         {totalPages > 1 && (
//           <div className='d-inline-flex'>
//             <Pagination
//               count={totalPages}
//               page={page}
//               onChange={handlePageChange}
//               color="primary"
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 border: "1px solid",
//                 borderColor: "#00C2FF",
//                 borderRadius: "10px",
//                 height: "50px",
//                 '& .Mui-selected': {
//                   color: '#426EAF !important',
//                   backgroundColor: "transparent !important",
//                 },
//                 '& .MuiPaginationItem-root': {
//                   color: 'white',
//                   fontSize: "30px !important",
//                   fontFamily: "sarpanch !important",
//                   width: "50px"
//                 },
//                 '& .MuiPaginationItem-icon': {
//                   color: 'white',
//                   fontSize: "30px !important",
//                   fontFamily: "sarpanch !important",
//                   height: "30px"
//                 },
//               }}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EventCards;

import React, { useState } from 'react';
import { Grid, Card, Button, Pagination } from '@mui/material';

const EventCards = ({ type }) => {
  const currentDate = new Date().toJSON().slice(0, 10);

  const data = [
    { imageUrl: '/image/UG-Orientation.png', buttonText: "UG Orientation", date: new Date("2024-03-12").toJSON().slice(0, 10), targetUrl: '/ug-orientation' },
    { imageUrl: '/image/pg.jpeg', buttonText: "PG Orientation", date: new Date("2024-03-11").toJSON().slice(0, 10), targetUrl: '/pg-orientation' },
    { imageUrl: '/image/FreshersParty.JPG', buttonText: "Fresher's Party", date: new Date("2024-03-12").toJSON().slice(0, 10), targetUrl: '/ug-orientation' },
    { imageUrl: '/image/Industry-visit.jpg', buttonText: "Industry Visit", date: new Date("2026-03-25").toJSON().slice(0, 10), targetUrl: '/industry-visit' },
    { imageUrl: '/image/Tryst.jpeg', buttonText: "Tryst", date: new Date("2026-03-22").toJSON().slice(0, 10), targetUrl: '/time-capsule' },
    { imageUrl: '/image/Department-trip.jpg', buttonText: "Departmental Trip", date: new Date("2026-03-23").toJSON().slice(0, 10), targetUrl: '/departmental-trip' },
    { imageUrl: '/image/Seminar.jpeg', buttonText: "Research Seminar", date: new Date("2026-03-01").toJSON().slice(0, 10), targetUrl: '/cad-competition' },
    { imageUrl: '/image/Researchance.jpeg', buttonText: "Researchance", date: new Date("2024-03-27").toJSON().slice(0, 10), targetUrl: '/relay-race' },
    { imageUrl: '/image/sports.jpg', buttonText: "Departmental Sports Day", date: new Date("2026-04-03").toJSON().slice(0, 10), targetUrl: '/egg-break' },
    { imageUrl: '/image/Farewell.jpg', buttonText: "Farewell", date: new Date("2026-03-20").toJSON().slice(0, 10), targetUrl: '/study-beyond-borders' },
    { imageUrl: '/image/esports.jpeg', buttonText: "E-Sports", date: new Date("2024-03-12").toJSON().slice(0, 10), targetUrl: '/ug-orientation' },
    { imageUrl: '/image/labvisit.jpeg', buttonText: "Lab Visit", date: new Date("2024-03-12").toJSON().slice(0, 10), targetUrl: '/ug-orientation' },
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
      <Grid 
        container 
        spacing={{ xs: 2, sm: 5, md: 10 }} 
        sx={{ 
          width: { xs: '100%', sm: '100%', md: '80%' }, 
          padding: { xs: '10px', sm: '15px', md: '20px' },
          marginLeft: { xs: 0, sm: 0, md: '7.5%' },
          marginRight: { xs: 0, sm: 0, md: '7.5%' },
        }}
      >
        {visibleData.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: "20px" }}>
              <img
                src={item.imageUrl}
                onClick={() => handleImageClick(item.targetUrl)}
                alt={`Event ${index + 1}`}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}  
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleButtonClick(item.buttonText)}
                sx={{
                  width: "100%",
                  backgroundImage: "linear-gradient(#123261,#1E56A9)",
                  borderRadius: "0px",
                  fontSize: { xs: "16px", sm: "18px", md: "20px" },
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
                height: { xs: '40px', sm: '45px', md: '50px' },
                '& .Mui-selected': {
                  color: '#426EAF !important',
                  backgroundColor: "transparent !important",
                },
                '& .MuiPaginationItem-root': {
                  color: 'white',
                  fontSize: { xs: "20px !important", sm: "25px !important", md: "30px !important" },
                  fontFamily: "sarpanch !important",
                  width: { xs: "35px", sm: "45px", md: "50px" }
                },
                '& .MuiPaginationItem-icon': {
                  color: 'white',
                  fontSize: { xs: "20px !important", sm: "25px !important", md: "30px !important" },
                  fontFamily: "sarpanch !important",
                  height: { xs: "20px", sm: "25px", md: "30px" }
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
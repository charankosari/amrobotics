import React from "react";
import Navbar from "../../Navbar/Navbar";
import { Container, Typography, Paper } from "@mui/material";
import ScrollToTop  from 'react-scroll-to-top'
import Footer from "../Footer";
function TermsOfService() {
  return (
    <div>
        <Navbar />
      <div className="mb-4" >
     
        <Container maxWidth="md" style={{ marginTop: "3rem" }}>
          <Paper elevation={3} sx={{ padding: "2rem" }}>
            <Typography variant="h4" gutterBottom style={{textAlign:'center'}}>
            Terms of service
            </Typography>
            <Typography variant="body1" gutterBottom style={{textAlign:'center'}}>
            By using amrobotics.in, you agree to all the terms on this page.
            </Typography>

            </Paper>
            </Container>

    </div>
    <ScrollToTop/>
    <Footer/>
    </div>
  )
}

export default TermsOfService

import React from "react";
import Navbar from "../../Navbar/Navbar";
import { Container, Typography, Paper } from "@mui/material";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../Footer";
function Careers() {
  return (
    <div>
      <Navbar />
      <div className="mb-4">
        <Container maxWidth="md" style={{ marginTop: "3rem" }}>
          <Paper elevation={3} sx={{ padding: "2rem" }}>
            <Typography variant="h4" gutterBottom>
              Careers
            </Typography>

            <section style={{ marginBottom: "2rem" }}>
              <Typography variant="body1" gutterBottom>
                If you're looking for a career opportunity with a growing
                company in a growing industry, you've landed in the right place.
                The robotics industry is one of the most dynamic and evolving
                industries in the world. Whether you're a first-time jobseeker
                or an experienced professional, we’re happy you landed here and
                hope that you’ll discover an opportunity that excites you.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Am Robotics is one of growing leading organization to supply and
                develop Mechanical parts, modules, DIY kits, Product Design,
                Manufacturing and many more. Every organization has different
                work portfolios and every employee contribute for development of
                organization. We have different department catering Sales,
                customer Support, Logistics or Procurement and all the
                departments work & interlink with each other.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Since we are growing company and joining hands-on-hands with
                good professional in our team so to improve you we follow the
                KPR(Key Performance Results) methodology and responsibility are
                delegated accordingly to employees for their better growth.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Feeling excited to see yourself at a different position in
                coming years with dreams of Am Robotics, then join us and make
                it happen! Work with our young & energetic team. Progression is
                based solely on merit & performance. No orthodox or rigid rules
                will limit your growth.
                <br />
                <br />
              </Typography>
              <Typography variant="body1" gutterBottom>
                Please send your CV to:
                <br />
                <br />
                sanjay@amrobotics.in
                <br />
                <br />
                WhatsApp: +91-9550906016
                <br />
                <br />
                Job Location: Hyderabad, Telangana.
              </Typography>
            </section>
          </Paper>
          <ScrollToTop
            smooth
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          />
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Careers;

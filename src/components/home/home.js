// import logo from '../../logo.svg';
import './home.css';
import React from 'react';
import data from '../../data/atum-analytics.json'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Alert,
  Box
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Home() {
  return (
    <div className="accordion-container">
      {data?.sections?.map((section) => (
        <Accordion key={section.id}>
          <AccordionSummary
            expandIcon={
              <Box className="accordion-expand-icon">
                <ExpandMoreIcon />
              </Box>
            }
            className="accordion-summary"
          >
            <Box className="accordion-summary-box">
              <Typography className="accordion-summary-title">{section.title}</Typography>
              <Typography className="accordion-summary-desc">{section.description}</Typography>
            </Box>
          </AccordionSummary>




          <AccordionDetails sx={{ pt: 1, pb: 2 }} className="accordion-details">
            <Box className="accordion-details-box">
              {/* Screenshot */}
              {section.screenshot && (
                <Box className="accordion-screenshot">
                  <img src={section.screenshot} alt={section.title} />
                </Box>
              )}

              {/* Fields */}
              <Box className="accordion-fields">
                <Typography variant="subtitle1"><strong>Fields:</strong></Typography>
                {section?.fields?.map((f, index) => (
                  <Box key={index} className="accordion-fields-box">
                    <span className="accordion-field-icon">{f.icon}</span>
                    <div className="accordion-field-text">
                      <Typography className="accordion-field-title">{f.title}</Typography>
                      <Typography className="accordion-field-desc">{f.desc}</Typography>
                    </div>
                  </Box>

                ))}
              </Box>
            </Box>

            {/* Alert */}
            {section.alert && (
              <Alert sx={{ mt: 2 }} severity={section.alert.type}>
                <strong>{section.alert.title}: </strong>
                {section.alert.message}
              </Alert>
            )}
          </AccordionDetails>
        </Accordion>
      ))}

       <Accordion>
        <AccordionSummary
          expandIcon={
            <Box className="accordion-expand-icon">
              <ExpandMoreIcon />
            </Box>
          }
          className="accordion-summary"
        >
          <Box className="accordion-summary-box">
            <Typography className="accordion-summary-title">Pro Tips & Best Practices</Typography>
            <Typography className="accordion-summary-desc">Maximize productivity</Typography>
          </Box>
        </AccordionSummary>

        <AccordionDetails sx={{ pt: 1, pb: 2 }} className="accordion-details">
              <Box className="accordion-steps-inline">
                {data?.tips.map((tips, index) => (
                  <Box key={index} className="accordion-tips-box">
                    <div className="accordion-tips-text">
                      <Typography className="accordion-field-title">{tips.title}</Typography>
                      <Typography className="accordion-field-desc">{tips.description}</Typography>
                    </div>
                  </Box>
                ))}
              </Box>
        </AccordionDetails>


      </Accordion>

    </div>

  );
}

export default Home;

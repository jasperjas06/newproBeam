import { Box, Typography } from "@mui/material";
import React from "react";
import {} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
const Cultuer = () => {
  return (
    <div className="culture-mainContainer">
      <div className="culture-box">
        <div className="culture-content">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "60px",
                lineweight: "75.6px",
                letterSpacing: "-2%",
              }}
            >
              Cultuer
            </Typography>
            <br/>
            <br/>
            <div className="timeline">
              <Timeline>
                <TimelineItem sx={{ color: "#CB2139" }}>
                  <TimelineSeparator>
                    <TimelineDot sx={{ backgroundColor: "#CB2139" }} />
                    <TimelineConnector sx={{ bgcolor: "#CB2139" }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ color: "#CB2139", width:"560px", fontSize:"20px", fontWeight:600, lineHeight:"30px"}}>
                    The Attitude Of Gratitude
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{  width:"460px", fontSize:"20px", fontWeight:600, lineHeight:"30px"}}>The Attitude Of Wellness</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{  width:"460px", fontSize:"20px", fontWeight:600, lineHeight:"30px"}}>The Attitude Of Learning</TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
          <img src={require("../assets/images/house-service.jpeg")} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Cultuer;

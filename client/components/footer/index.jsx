import { div, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import styles from "../../styles/Footer.module.css";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  const style = {
    color: "white",
    backgroundColor: "#25477A",
  };

  return (
    <div style={{ backgroundColor: "#25477A", overflow:"hidden" }} className={styles.wide}>
      <div
        style={{
          padding: "0.5rem",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#25477A",
          height: "26.3rem",
          fontFamily: "DM Sans",
          textAlign: "left",
          justifyContent: "center",
          paddingTop: "40px",
        }}
        className={styles.wide}
      >
        <div className={styles.padding}>
          <div className={styles.heading}>Quick Access</div>
          <div className={styles.class}>
            <Link
              underline="none"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              B.Tech Course
            </Link>
          </div>
          <div className={styles.class}>
            <Link
              underline="none"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              M.Tech Course
            </Link>
          </div>
          <div className={styles.class}>
            <Link
              underline="none"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              Our Alumni
            </Link>
          </div>
          <div className={styles.class}>
            <Link
              underline="none"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              Photo Gallery
            </Link>
          </div>
          <div className={styles.class}>
            <Link
              underline="none"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              Visitors
            </Link>
          </div>
        </div>
        <div className={styles.padding}>
          <div className={styles.heading}>Students Corner</div>
          <div className={styles.class}>
            <Link
              underline="none"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              Youtube Channel
            </Link>
          </div>
          <div className={styles.class}>
            <Link
              underline="none"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              Online Resources
            </Link>
          </div>
          <div className={styles.class}>
            <Link
              underline="none"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              Notifications
            </Link>
          </div>
        </div>
        <div className={styles.padding}>
          <div className={styles.heading} style={{marginLeft: "37px"}}>Get In Touch</div>
          <div className={styles.class}>
            <EmailIcon style={{marginRight: "15px"}}/>
            <Link
              underline="none"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              tap@iiitranchi.ac.in
            </Link>
          </div>
          <div className={styles.class}>
            <EmailIcon style={{marginRight: "15px"}} />
            <Link
              underline="none"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              tpo@iiitranchi.ac.in
            </Link>
          </div>
          <div className={styles.class}>
            <LinkedInIcon style={{marginRight: "15px"}}/>
            <Link
              underline="none"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              linkedin/in/tapcell_iiitranchi
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        © Indian Institute of Information Technology Ranchi 2022
      </div>
    </div>
  )
}

import { Link, Box, Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "../../styles/Footer.module.css";

export default function Group(props) {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="left"
        spacing={2}
      >
        <Grid item sm={2} md={3} lg={4}>
          <div className={styles.title}>
            {props.title}
          </div>
        </Grid>
        <Grid item sm={2} md={3} lg={4}>
          <Link
            underline="none"
            href={props.link1}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <div style={{display:"flex",flexDirection:"row"}}>
              {props.icon}
              <span></span>
              {props.line1}
            </div>
          </Link>
        </Grid>
        <Grid item sm={2} md={3} lg={4}>
          <Link
            underline="none"
            href={props.link2}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <div style={{display:"flex",flexDirection:"row"}}>
              {props.icon}
              <span></span>
              {props.line2}
            </div>
          </Link>
        </Grid>
        <Grid item sm={2} md={3} lg={4}>
          <Link
            underline="none"
            href={props.link3}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <div style={{display:"flex",flexDirection:"row"}}>
              {props.icon2}
              <span></span>
              {props.line3}
            </div>
          </Link>
        </Grid>
        <Grid item sm={2} md={3} lg={4}>
          <Link
            underline="none"
            href={props.link4}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {props.line4}
          </Link>
        </Grid>
        <Grid item sm={2} md={3} lg={4}>
          <Link
            underline="none"
            href={props.link5}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {props.line5}
          </Link>
        </Grid>
      </Grid>
    </>
  );
}

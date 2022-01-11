import Data from "./Data";
import Group from "./Group";
import styles from "../../styles/Footer.module.css"
import { Grid, Typography,createTheme } from "@mui/material";


function group(val) {
  return (
    <Grid item>
      <Group
      xs={2} sm={1} md={4} lg={4}
        key={val.id}
        title={val.title}
        line1={val.line1}
        line2={val.line2}
        line3={val.line3}
        line4={val.line4}
        line5={val.line5}
        link1={val.link1}
        link2={val.link2}
        link3={val.link3}
        link4={val.link4}
        link5={val.link5}
        icon={val.icon}
        icon2={val.icon2}
      />
    </Grid>
  );
}

export default function App() {
  return (
    <>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{xs: 2, sm: 6, md: 12, lg: 30}}
        direction="row"
        justifyContent="center"
        alignItems="left"
        className={styles.grid}
        sx={{color:"white"}}
      >
        {Data.map(group)}
      </Grid>
      <div className={styles.footer} sx={{color: "white"}}>
      © Indian Institute of Information Technology Ranchi 2022
      </div>
    </>
  );
}

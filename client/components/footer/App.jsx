import Data from "./Data";
import Group from "./Group";
import styles from "../../styles/Footer.module.css"
import { Grid, Typography,createTheme } from "@mui/material";


function group(val) {
  let key=Object.keys(val)
  return (
    <Grid item>
      <Group
      xs={2} sm={2} md={4} lg={4}
        title={key}
        line1={val[key][0].line}
        line2={val[key][1].line}
        line3={val[key][2].line}
        line4={val[key][3].line}
        line5={val[key][4].line}
        link1={val[key][0].link}
        link2={val[key][1].link}
        link3={val[key][2].link}
        link4={val[key][3].link}
        link5={val[key][4].link}
        icon1={val[key][0].icon}
        icon2={val[key][1].icon}
        icon3={val[key][2].icon}
        icon4={val[key][3].icon}
        icon5={val[key][4].icon}
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
        columnSpacing={{xs:12, sm: 6, md: 12, lg: 30}}
        direction="row"
        justifyContent="center"
        alignItems="left"
        className={styles.grid}
        sx={{color:"white",marginTop:"2rem"}}
      >
        {Data.map(group)}
      </Grid>
      <div className={styles.footer} sx={{color: "white"}}>
      © Indian Institute of Information Technology Ranchi 2022
      </div>
    </>
  );
}

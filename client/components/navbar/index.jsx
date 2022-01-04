import {
    AppBar,
    Toolbar,
    CssBaseline,
    useTheme,
    useMediaQuery,
    autocompleteClasses,
  } from "@mui/material";
  import DrawerComponent from "./drawer";
  import { makeStyles } from '@mui/styles';
  import Image from 'next/image'
  
  const useStyles = makeStyles((theme) => ({
    navbar:{
      backgroundColor: "#25477A",
      height: "7vh"
    },
    navlinks: {
      marginLeft: 0,
      display: "flex",
      flexDirection: "row"
    },
    link: {
      fontWeight: 500,
      height: "6vh",
      textDecoration: "none",
      color: "white",
      fontSize: "0.5 rem",
      marginLeft: theme.spacing(10),
      margin: "auto",
      fontFamily: "Poppins",
      "&:hover": {
        color: "#2196F3",
    },
  },
    upperNav:{
      display: "flex",
      flexDirection: "row",
      margin: "auto",
      fontFamily: "Poppins",
    },
    img:{
      marginLeft: theme.spacing(15),
      width: "10%",
      height: "auto",
      maxWidth: "150px",
    },
    mainText:{
      fontWeight: 700,
      fontSize: "1.5vw",
      marginTop: theme.spacing(4),
      marginLeft: theme.spacing(5),
      color: "#25477A"
    },
    secondaryText:{
      fontWeight: 700,
      fontSize: "1.2vw",
      marginTop: theme.spacing(1.5),
      marginLeft: theme.spacing(5),
      color: "#58695D"
    }
  }
  ));
  

  function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
    return (
      <>
      <div className={classes.upperNav}>
      <div className={classes.img}>
        <Image src="/logo.svg" height={"140px"} width={"140px"}/>
      </div>
        <div>
          <div className={classes.mainText}>
            INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, RANCHI
          </div>
          <div className={classes.secondaryText}>
            Training and Placement Cell
          </div>
        </div>
      </div>

      <AppBar position="static" className={classes.navbar}>
        <CssBaseline />
        <Toolbar>
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <div className={classes.navlinks}>
              <div className={classes.link}>
                HOME
              </div>
              <div className={classes.link}>
                ABOUT US
              </div>
              <div className={classes.link}>
                COURSES
              </div>
              <div className={classes.link}>
                CELLS
              </div>
              <div className={classes.link}>
                GALLERY
              </div>
              <div className={classes.link}>
                CONTACT US
              </div>
            </div>
          )}
        </Toolbar>
      </AppBar>
      </>
    );
  }

  export default Navbar;
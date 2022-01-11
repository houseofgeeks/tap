import {
    AppBar,
    Toolbar,
    CssBaseline,
    useTheme,
    useMediaQuery,
  } from "@mui/material";
  import DrawerComponent from "./drawer";
  import { makeStyles } from '@mui/styles';
  
  const useStyles = makeStyles((theme) => ({
    navbar:{  
      backgroundColor: "#25477A",
      height: "50px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flexStart",
      alignItems: "flexEnd",

      [theme.breakpoints.between('xs', 'sm')]: {
        backgroundColor: "#25477A",
        height: "20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flexStart",
      alignItems: "flexEnd",
      },

      [theme.breakpoints.down("md")] : {
        backgroundColor: "#25477A",
        height: "50px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flexStart",
      alignItems: "flexEnd",
      },
    },

    navlinks: {
      marginLeft: 0,
      display: "flex",
      flexDirection: "row",
      height:"35px",
    },
    link: {
      fontWeight: 500,
      height: "50px",
      textDecoration: "none",
      color: "white",
      fontSize: "14px",
      marginLeft: theme.spacing(10),
      margin: "auto",
      fontFamily: "Poppins",
      "&:hover": {
        color: "#2196F3",
        cursor: "pointer"
    },
  },

    upperNav:{
      display: "flex",
      flexDirection: "row",
      margin: "auto",
      fontFamily: "Poppins",
    },

    img:{
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(1),
      marginLeft: theme.spacing(15),
      width: "130px",
      height: "130px",

      [theme.breakpoints.between('xs', 'sm')] : {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(3),
        width: "50px",
        height: "50px",
      },
      [theme.breakpoints.between('sm', 'md')] : {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(5),
        width: "100px",
        height: "100px",
      },
    },

    mainText:{
      fontWeight: 700,
      fontSize: "1.6vw",
      marginTop: theme.spacing(6.5),
      marginLeft: theme.spacing(3),
      color: "#25477A",
      [theme.breakpoints.between('xs', 'sm')] : {
        fontWeight: 700,
        fontSize: "2.3vw",
        marginTop: theme.spacing(2.3),
        marginLeft: theme.spacing(1),
        color: "#25477A",
      },
      [theme.breakpoints.between('sm', 'md')] : {
        fontWeight: 700,
        fontSize: "2.5vw",
        marginTop: theme.spacing(2.5),
        marginLeft: theme.spacing(2),
        color: "#25477A",
      },
      [theme.breakpoints.between('md', 'lg')] : {
        fontWeight: 700,
        fontSize: "1.8vw",
        marginTop: theme.spacing(7),
        marginLeft: theme.spacing(3),
        color: "#25477A",
      },
    },
    
    secondaryText:{
      fontWeight: 700,
      fontSize: "1.25vw",
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(3),
      marginBottom: theme.spacing(3),
      color: "#58695D",
      [theme.breakpoints.between('xs', 'sm')] : {
        fontWeight: 700,
        fontSize: "2vw",
        marginTop: theme.spacing(0.5),
        marginLeft: theme.spacing(1),
        color: "#58695D",
      },
      [theme.breakpoints.between('sm', 'md')] : {
        fontWeight: 700,
        fontSize: "1.8vw",
        marginTop: theme.spacing(1.5),
        marginLeft: theme.spacing(2),
        color: "#58695D",
    },
    [theme.breakpoints.between('md', 'lg')] : {
      fontWeight: 700,
      fontSize: "1.6vw",
      marginTop: theme.spacing(1.5),
      marginLeft: theme.spacing(3),
      color: "#58695D",
    },
  }
}));
  

  function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
    return (
      <>
      <div className={classes.upperNav}>
      <div>
        <img src="/logo.svg"  className={classes.img}/>
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
      
      <AppBar position="static" style={{padding: "0px, 0px, 0px, 0px"}}className={classes.navbar}>
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
import {React, useState } from "react";
import {
    Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import MenuIcon from "@mui/icons-material/Menu";


const useStyles = makeStyles(()=>({
    div:{
        textDecoration:"none",
        color: "blue",
        fontSize: "10px",
    },
    icon:{
        color: "white",
        fontSize: "20px",
    }
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <div className={classes.div}>HOME</div>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <div className={classes.div}>ABOUT US</div>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <div className={classes.div}>COURSES</div>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <div className={classes.div}>CELLS</div>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <div className={classes.div}>GALLERY</div>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <div className={classes.div}>CONTACT US</div>
            </ListItemText>
          </ListItem>
          <Divider/>
        </List>
      </Drawer>
      <div onClick={() => setOpenDrawer(!openDrawer)} >
        <MenuIcon className={classes.icon}/>
      </div>
    </>
  );
}

export default DrawerComponent;
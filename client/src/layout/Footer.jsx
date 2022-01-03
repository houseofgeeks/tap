import React from "react";
import {Link,Box,Container, Grid} from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
const Footer=()=>{
    return(
        <Box px={{xs:3,sm:10}} py={{xs:5,sm:10}} bgcolor="rgba(78,106,171,1)" color="white">
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Quick Access</Box>
                        <Box>
                            <Link href="/" color="inherit">B.tech Course</Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">M.tech Course</Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">Our Alumni</Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">Photo Galary</Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">Visitors</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Student Corner</Box>
                        <Box>
                            <Link href="/" color="inherit">Youtube Channel</Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">Online Resource</Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">Notifications</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Get In Touch</Box>
                        <Box style={{display:"flex"}}>
                            <MailIcon/>
                            <Link href="/" color="inherit">tap@iiitranchi.ac.in</Link>
                        </Box>
                        <Box style={{display:"flex"}}>
                            <MailIcon/>
                            <Link href="/" color="inherit">tap@iiitranchi.ac.in</Link>
                        </Box>
                        <Box style={{display:"flex"}}>
                            <LinkedInIcon/>
                            <Link href="https://www.linkedin.com/company/placement-cell-iiitr/" color="inherit">Linked In</Link>
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign="center" pt={{xs:5,sm:10}} pb={{xs:5,sm:0}}>
                   Indian Institute of Information Technology Ranchi &reg; {new Date().getFullYear()} 
                </Box>
            </Container>
        </Box>
    )
}
export default Footer;
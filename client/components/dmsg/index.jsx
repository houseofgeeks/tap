import {Box} from "@mui/material"
import {makeStyles} from "@mui/styles"
import Image from "next/image"
import Head from "next/head"
import ReadMoreReadLess from "./ReadMoreReadLess"
const useStyles=makeStyles((theme) => ({
  container: {
    height:"auto" ,
    width:"85vw" ,
    boxShadow:"0 0 1rem rgba(0,0,0,.1)",
    borderRadius:".5rem",
    margin:"auto", 
    display:"flex", 
    color:"#484F6C", 
    backgroundColor:"#F3F4F4"
},
  image:{
    height:"200px",
    width:"400px",
    margin:"4% 6% 4% 6%",
    position:"relative"
},
  message:{
    paddingRight:"0.5rem",
    fontFamily: "Lora, serif",
    weight: "400",
    fontSize: "0.9rem",
    marginTop: "0"
},
  msgp:{
    alignItems:"center", 
    justifyContent:"center",
},
  header:{
    marginTop: "5%",
    marginBottom:"0",
    fontSize: "1.2rem"
},
dName:{
  fontFamily: "Lora, serif",
  weight: "700",
  fontSize: "0.9rem",
  display: "flex",
  flexDirection: "column",
  fontWeight:"bold",
},
salutation:{
    fontSize:"0.8rem"
},



// For extra Small to Small Devices
  [theme.breakpoints.between('xs','md')]:{

    container:{
                display: "flex",
                flexDirection: "column",
                justifyContent:"center",
                alignItems:"center",
  
    },

    image:{
      width:"10rem",
      height:"10rem",
      marginBottom: "1%"
    },

    header:{
      textAlign:"center",
      fontSize:"1.5rem"
    },

    message:{
      padding:"0.5rem",
      fontSize: "0.7rem"
    },
    
    dName:{
      fontFamily: "Lora, serif",
      weight: "700",
      fontSize: "0.7rem",
      display: "flex",
      flexDirection: "column",
      fontWeight:"bold",
      padding:"0.5rem"
    },
    salutation:{
      fontSize:"0.7rem"
  },
    
  },

  [theme.breakpoints.between('md','xl')]:{

    image:{
      width:"300px",
      height:"150px",
      marginBottom: "1%"
    },
    
  }

}));

const index = () => {
  const classes = useStyles()
  return (
    <>
    <Head>
      
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Poppins:ital,wght@0,100;1,100&display=swap" rel="stylesheet"/>
    </Head>


    <div  className={classes.container}>

      <div className={classes.image}>
        <Image src="/../public/director.png" width='100%' height='100%' layout="fill"/>
      </div>
      <div >
      <h2 className={classes.header}>Director's Message</h2>

      <p className={classes.message}>
        <ReadMoreReadLess>
        <p className="msgp" >
      Evolving a brand-name takes years of nurturing, hard work and passion.
      IIIT Ranchi, which started its journey in 2015, has brought in the
      culture of innovation among its students. These students have received
      training that is ‘deep in depth’, yet ‘wide in breadth’. Such training has
      moulded them into better qualified professionals.
    </p>
    
    <p className="msgp">
      At the Indian Institute of Information Technology Ranchi, we are
      committed to playing a key role in creating an ambience for the creation
      of new ideas, knowledge and graduates who will be tech-leaders of
      tomorrow.
    </p>
    
    <p className="msgp">
      {" "}
      We are convinced that in order to make significant contributions to the
      development of the country and to the improvement in quality of life of
      its citizens, we will need to pursue a strategy that fosters creativity,
      supports interdisciplinary research and education. This will provide the
      students with an understanding and appreciation not only of the process of
      knowledge creation, but also of the process by which technology and
      knowledge may be used to create wealth as well as achieve social and
      economic goals.
    </p>
    
    <p className="msgp">
      Therefore, I am quite confident that our students shall perform the best
      on any platform and do justice to the trust placed on them.
    </p>
        </ReadMoreReadLess>
      </p>


      <p className={classes.dName}>
        Prof. Vishnu Priye <span className={classes.salutation}>Director of IIIT Ranchi</span>
      </p>
    
      </div>    
    </div>
    
    
    </>
    
  )
}

export default index;
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "../../styles/Footer.module.css";


const Data = [
    {
  "Quick Access": [
    {
      line: "B.Tech Course",
      link: "",
      icon: <div></div>,
    },
    {
        line: "M.Tech Course",
        link: "",
        icon: <div></div>,
    },
    {
        line: "Our Alumni",
        link: "",
        icon: <div></div>,
    },
    {
        line: "Photo Gallery",
        link: "",
        icon: <div></div>,
    },
    {
        line: "Visitors",
        link: "",
        icon: <div></div>,
    }
  ]
},
{
  "Student Corner": [
      {
          line: "Youtube Channel",
          link: "",
          icon: <div></div>,
      },
      {
          line: "Online Resources",
          link: "",
          icon: <div></div>,
      },
      {
          line: "Notifications",
          link: "",
          icon: <div></div>,
      },
      {
          line: "",
          link: "",
          icon: <div></div>,
      },
      {
          line: "",
          link: "",
          icon: <div></div>,
      },
  ]
},
{
  "Get In Touch":[
      {
          line: "tap@iiitranchi.ac.in",
          link: "",
          icon: <EmailIcon className={styles.icon} />,
      },
      {
          line: "tpo@iiitranchi.ac.in",
          link: "",
          icon: <EmailIcon className={styles.icon} />,
      },
      {
          line: "linkedin/in/tapcell_iiitranchi",
          link: "",
          icon: <LinkedInIcon className={styles.icon}/>,
      },
      {
          line: "",
          link: "",
          icon: <div></div>,
      },
      {
          line: "",
          link: "",
          icon: <div></div>,
      }
  ]
}
];
export default Data;

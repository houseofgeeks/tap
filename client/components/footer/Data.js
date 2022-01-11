import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "../../styles/Footer.module.css"
const Data=[
    {
        id : 1,
        title: "Quick Access",
        line1: "B.Tech Course",
        line2: "M.Tech Course",
        line3: "Our Alumni",
        line4: "Photo Gallery",
        line5: "Visitors",
        link1: "",
        link2: "",
        link3: "",
        link4: "",
        link5: "",
        icon: <div></div>,
        icon2: <div></div>
    },
    {
        id : 2,
        title: "Student Corner",
        line1: "Youtube Channel",
        line2: "Online Resources",
        line3: "Notifications",
        line4: "",
        line5: "",
        link1: "",
        link2: "",
        link3: "",
        link4: "",
        link5: "",
        icon: <div></div>,
        icon2: <div></div>,
    },
    {
        id : 3,
        title: "Get In Touch",
        line1: "tap@iiitranchi.ac.in",
        line2: "tpo@iiitranchi.ac.in",
        line3: "linkedin/in/tapcell_iiitranchi",
        line4: "",
        line5: "",
        link1: "",
        link2: "",
        link3: "",
        link4: "",
        link5: "",
        icon: <EmailIcon className={styles.icon}/>,
        icon2: <LinkedInIcon className={styles.icon}/>,
    },
]

export default Data
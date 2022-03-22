import {useState} from "react";


const ReadMoreReadLess = ({children}) => {

    const [isReadMoreShown, setReadMoreShown] = useState(false)
    
    const toggleBtn=() =>{
        setReadMoreShown(prevState=>!prevState)
    }
    
    return (
    
        <div>   
            {isReadMoreShown ? children : children[0]}
            <button style={{transition:"transform 1s", marginRight:"0", backgroundColor:"transparent", border:"none", fontWeight:"500", color:"rgb(139, 17, 209)", cursor:"pointer", fontSize:"0.7rem"}}  onClick={toggleBtn}>{isReadMoreShown ? 'Read Less' : 'Read More >>'}</button>
        </div>
    )
}

export default ReadMoreReadLess;
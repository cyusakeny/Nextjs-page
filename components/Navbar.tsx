import React,{useState} from "react";
import styles from "../styles/NavBar.module.css"
import {RiArrowDropDownLine} from "react-icons/ri"
interface Props {
    name?: string;
    age?: number;
}
const NavBar:React.FC<Props> = ()=>{
    const [show, setShow] = useState<boolean>(false);
    const ShowMenu = ()=>{
        if(show===true){
            return(
                <div className={styles.navSolutions}>
                <span className={styles.navSolutionSpan}>Health</span>
                <span className={styles.navSolutionSpan}>Economics</span>
                <span className={styles.navSolutionSpan}>Sports</span>
                <span className={styles.navSolutionSpan}>Education</span>
            </div>
            )
        }
        else{
            return null;
        }

    }
    return (
        <div className={styles.navdiv}>
         <div className={styles.navdiv1}>
            <span className={styles.navspan}>Features</span>
            <span className={styles.navspan}>Solutions </span>
            <RiArrowDropDownLine className={styles.dropdown} onClick={()=>{setShow(!show)}}/>
            <span className={styles.navspan}>Resources</span>
            <span className={styles.navspan}>Pricing</span>
         </div>
         {ShowMenu()}
        </div>
    )
}
export default NavBar;
import { Link } from "react-router-dom";
import { StyledProjectButton } from "./buttons.styles";

function ProjectButton() {


    function onButtonClick() {
        
    }
    

    return ( 
         <>
           <StyledProjectButton $isActive={false} onClick={() => onButtonClick()}>
               <Link to={"/exam-1"}>SEMESTER PROJECT</Link>
            </StyledProjectButton>
         </>
    );
}

export default ProjectButton;
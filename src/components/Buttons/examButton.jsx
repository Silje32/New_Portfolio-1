import { Link } from "react-router-dom";
import { StyledExamButton } from "./buttons.styles";

function ExamButton() {


    function onButtonClick() {
        
      }
    

    return ( 
         <>
           <StyledExamButton $isActive={false} onClick={() => onButtonClick()}>
               <Link to={"/exam-1"}>EXAM</Link>
            </StyledExamButton>
         </>
    );
}

export default ExamButton;
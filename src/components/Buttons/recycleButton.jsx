import { Link } from "react-router-dom";
import { StyledRecycleButton } from "./buttons.styles";

function RecycleButton() {


    function onButtonClick() {
        
    }
    

    return ( 
         <>
           <StyledRecycleButton $isActive={false} onClick={() => onButtonClick()}>
               <Link to={"/recycle"}>RECYCLE</Link>
            </StyledRecycleButton>
         </>
    );
}

export default RecycleButton;
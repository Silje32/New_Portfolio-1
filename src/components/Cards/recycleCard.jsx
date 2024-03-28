import RecycleButton from "../Buttons/recycleButton";
import { StyledH2 } from "../Header/heading.styles";
import { StyledRecycleCard } from "./styledCard.styles";


function RecycleCard() {

    return (  
        <>
          <StyledRecycleCard>
              <div>
                <StyledH2>
                    MY PROJECT:
                </StyledH2>
              </div> 
              <div> 
              <RecycleButton />
              </div>  
          </StyledRecycleCard>
        </>
    );
}

export default RecycleCard;
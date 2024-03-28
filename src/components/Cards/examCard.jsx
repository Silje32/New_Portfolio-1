import ExamButton from "../Buttons/examButton";
import { StyledH2 } from "../Header/heading.styles";
import { StyledExamCard } from "./styledCard.styles";


function ExamCard() {

    return (  
        <>
          <StyledExamCard>
              <div>
                <StyledH2>
                    MY PROJECT:
                </StyledH2>
              </div> 
              <div>
              <ExamButton />
              </div> 
          </StyledExamCard>
        </>
    );
}

export default ExamCard;
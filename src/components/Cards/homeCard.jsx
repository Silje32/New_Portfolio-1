import ExamButton from "../Buttons/examButton";
import ProjectButton from "../Buttons/projectButton";
import RecycleButton from "../Buttons/recycleButton";
import { StyledH2 } from "../Header/heading.styles";
import { StyledHomeCard } from "../Cards/styledCard.styles";


function HomeCard() {

    return (  
        <>
          <StyledHomeCard>
              <div>
                <StyledH2>
                    MY PROJECTS:
                </StyledH2>
              </div> 
              <div>
              <ExamButton />
              </div>
              <div>
              <ProjectButton />
              </div> 
              <div>  
              <RecycleButton />
              </div>  
          </StyledHomeCard>
        </>
    );
}

export default HomeCard;
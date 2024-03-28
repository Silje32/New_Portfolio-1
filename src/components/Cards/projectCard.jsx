import ProjectButton from "../Buttons/projectButton";
import { StyledH2 } from "../Header/heading.styles";
import { StyledProjectCard } from "./styledCard.styles";


function ProjectCard() {

    return (  
        <>
          <StyledProjectCard>
              <div>
                <StyledH2>
                    MY PROJECT:
                </StyledH2>
              </div> 
              <div>
              <ProjectButton />
              </div> 
          </StyledProjectCard>
        </>
    );
}

export default ProjectCard;
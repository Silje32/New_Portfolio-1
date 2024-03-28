import ExamCard from "../components/Cards/examCard";
import ProjectCard from "../components/Cards/projectCard";
import RecycleCard from "../components/Cards/recycleCard";
import { StyledCard } from "../components/Cards/styledCard.styles"

function Home() {

    return (
       <>
         <StyledCard>
             <ExamCard />
             <ProjectCard />
             <RecycleCard />
         </StyledCard>
       </>
    );       
}

export default Home;  
import Hero from '../components/js-projects/Hero';
import ProjectsGrid from '../components/js-projects/ProjectsGrid';
import FeaturedProjects from '../components/js-projects/FeaturedProjects';
import TechnicalSkills from '../components/js-projects/TechnicalSkills';
import ProjectCategories from '../components/js-projects/ProjectCategories';
import SearchFilter from '../components/js-projects/SearchFilter';
import ProjectDetails from '../components/js-projects/ProjectDetails';

const JSMinorProjects = () => {
  return (
    <>
      <Hero />
      <ProjectsGrid />
      <FeaturedProjects />
      <TechnicalSkills />
      <ProjectCategories />
      <SearchFilter />
      <ProjectDetails />
    </>
  );
};

export default JSMinorProjects;

import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of websites. Recently, I have been working on websites in the charity and hospitality sectors.
        </Desc>
        <ToggleButtonGroup>
          {['all', 'featured', 'hospitality', 'charity', 'other'].map((value) => (
            <React.Fragment key={value}>
              <ToggleButton
                active={toggle === value}
                value={value}
                onClick={() => setToggle(value)}
              >
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </ToggleButton>
              {value !== 'other' && <Divider />}
            </React.Fragment>
          ))}
        </ToggleButtonGroup>
        <CardContainer>
          {projects
            .filter((project) => toggle === 'all' || project.category.includes(toggle))
            .map((project) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;

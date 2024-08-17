import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of websites. Recently I have been working on websites in the charity and hospitality sectior.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'featured' ?
            <ToggleButton active value="featured" onClick={() => setToggle('all')}>Featured</ToggleButton>
            :
            <ToggleButton value="featured" onClick={() => setToggle('all')}>Featured</ToggleButton>
          }
          <Divider />
          {toggle === 'hospitality' ?
            <ToggleButton active value="hospitality" onClick={() => setToggle('web app')}>Hospitality</ToggleButton>
            :
            <ToggleButton value="hospitality" onClick={() => setToggle('web app')}>Hospitality</ToggleButton>
          }
          <Divider />
          {toggle === 'charity' ?
            <ToggleButton active value="charity" onClick={() => setToggle('android app')}>Charity</ToggleButton>
            :
            <ToggleButton value="charity" onClick={() => setToggle('android app')}>Charity</ToggleButton>
          }
          <Divider />
          {toggle === 'other' ?
            <ToggleButton active value="other" onClick={() => setToggle('machine learning')}>Other</ToggleButton>
            :
            <ToggleButton value="other" onClick={() => setToggle('machine learning')}>Other</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects

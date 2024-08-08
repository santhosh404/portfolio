import React from 'react'
import HeroSection from '../components/HeroSection'
import ExperienceSection from '../components/ExperienceSection'
import SkillsSection from '../components/Skills'
import ProjectsSection from '../components/ProjectSection'

export default function Home() {
  return (
    <div>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
    </div>
  )
}

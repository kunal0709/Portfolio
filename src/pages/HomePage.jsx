import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import About from '../components/About'
import Skills from '../components/Skills'
import Home from '../components/Home.jsx'
import Project from '../components/Project.jsx'

export default function HomePage() {
  return (
    <div>
        <div className="w-35 z-9999 rounded-full fixed  md:top-56 blue-shadow md:right-30 right-5 rotate-130" />
        <div className="w-35 z-9999 rounded-full fixed md:-bottom-10 -bottom-25 pink-shadow md:left-30  rotate-130" />
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>

    </div>
  )
}

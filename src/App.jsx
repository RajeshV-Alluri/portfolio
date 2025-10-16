import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Hero from './components/main/hero_section';
import Projects from './components/main/projects'
import Research from './components/main/fundings'
import Publications from './components/main/publications'
import Experience from './components/main/experience';
import About from './components/main/about';
import Footer from './components/footer';

class App extends React.Component {
  render(){
    return(
      <div>
        <Navbar />

        <main>

          <Routes>
            <Route path='/' element={
              <>
              <Hero />
              <Projects />
              <Experience />
              <Research />
              {/* <Publications /> */}
              {/* <About /> */}
              </>
              } />
              
            <Route path='/publications' element={<Publications />} />
          </Routes>
        </main> 

        <Footer />      
      </div>
    )
  }
}

export default App

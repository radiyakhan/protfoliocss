import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about'>
        <div className='about1'> 
          <h1 className='abouth1'>About Me</h1>
         <p className='aboutp' >
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
         Autem consectetur odio maiores quasi blanditiis nobis, veritatis 
         mollitia eligendi debitis voluptatum? Accusamus iste reprehenderit
         dolor quod commodi nam distinctio at libero? Lorem ipsum dolor sit 
         amet consectetur adipisicing elit. Recusandae officia officiis pariatur
         quos quaerat magni eius optio aut! Fugiat odit eum soluta non vitae? Libero 
         in minima officia adipisci voluptatum.</p>
         <button className='btn'>View CV</button>
         </div>
         <div className='img'>
            <Image alt='ok' src={require("../../public/my.jpg")}/>
         </div>
    </div>
    
        

    
  )
}

export default About

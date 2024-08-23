import React from 'react'

const Footer = () => {

  let footerStyle = {
    position:"relative",
    top : "30vh",
    width:"100%",
    border: "3px solid red",
    margin: "50px auto"
  }

  return (
    <footer className ="bg-dark text-light py-3" style={footerStyle}>
      <p className='text-center'>
      Copyright &copy; MyTodoListReactProject.netlify.app
      </p>
      
    </footer>
  )
}

export default Footer

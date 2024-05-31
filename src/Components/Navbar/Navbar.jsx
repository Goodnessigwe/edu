import "./Navbar.css"


const Navbar = () => {
  return (
    <nav className='container'>
        <img src='' className='logo' alt='Logo'/>
       <ul>
          <li>Home</li>
          <li>Program</li>
          <li>About us</li>
          <li>Campus</li>
          <li>Testimonials</li>
          <li><button className='btn'>Contact us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
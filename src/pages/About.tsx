import { Link } from "react-router-dom"

const About = ()=>{
  return(<>
    <h1>Welcome to About</h1>
    <nav>
      <Link to={'/'} > Home </Link>
      <Link to={'/about'} > About </Link>
    </nav>
  </>)
}

export default About
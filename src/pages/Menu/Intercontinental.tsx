import { Link, Outlet, useNavigate } from "react-router-dom"

const InterContinental = () => {

  const navigate = useNavigate()

  const handleClick = ()=>{
    navigate("/menu/intercontinental/recipe-info", {state: {name: "click kar ke aagya"}})
  }

  return (
    <div>
      Inter Continental
      <Link to={'recipe-info'} state={{name: ""}} > View </Link>
      <button onClick={handleClick}>Click</button>
      <Outlet />
    </div>
  )
}

export default InterContinental

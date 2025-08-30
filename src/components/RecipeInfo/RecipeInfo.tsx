import { useLocation, useNavigate } from "react-router-dom"

const RecipeInfo = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const name = (location.state || {}).name

  if(!name) {
    return <>
      <p>name not found</p>
      <button onClick={()=>navigate(-1)}>Go back</button>
    </>
  }

  return (
    <div>
      recipe name is : {name}
    </div>
  )
}

export default RecipeInfo

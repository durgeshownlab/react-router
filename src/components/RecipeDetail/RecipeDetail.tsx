import { useEffect, useState, type ReactNode } from "react"
import { useParams } from "react-router-dom";
import styled from "styled-components";


const LoadingMessage = styled.h2`
  background-color: red;
  text-align: center;
  color: white;
`;

const ErrorMessage = styled.h2`
  background-color: white;
  color: red;
  text-align: center;
`;

const Image = styled.img`
  width: 300px;
  border-radius: 15px;
`;

const RecipeDetail = () => {
  const {recipeId} = useParams<{recipeId: string}>()
  const [recipe, setRecipe] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


  const fetchRecipe = async (id: string): Promise<void>=>{
    try {
      setLoading(true);
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      if(!response.ok) {
        throw new Error("Field to fetch the recipe details");
      }

      const data = await response.json();
      if(!data.meals || data.meals.length==0) {
        throw new Error("Recipe Not Found");
      }

      console.log(data.meals[0])
      setRecipe(data.meals[0]);
      
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }


  useEffect(()=>{
    if(recipeId) {
      console.log(recipeId)
      fetchRecipe(recipeId)
    }

  }, [recipeId])

  if(loading) {
    return <LoadingMessage>Loading the recepie...</LoadingMessage>
  }

  if(error) {
    return <ErrorMessage>Oops! Recepie Not Found</ErrorMessage>
  }

  if(recipe) {
    return (<>
      <div className="flex w-full p-5 gap-5">
        <div className="flex flex-col min-w-1/2">
          <h1>{recipe?.strMeal}</h1>
          <Image className="min-w-1/2" src={recipe?.strMealThumb} alt={recipe?.strMeal} />
        </div>

        <div>
          <h3>Category: {recipe?.strCategory}</h3>
          <h5>Origin Type: {recipe?.strArea}</h5>
          <p>Tags: {recipe?.strTags}</p>
          <p>
            Insructions: {recipe?.strInstructions}
          </p>
          <div className="bg-blue-500">
            Ingredient: 
              <ul>
              {
                [...Array(20)].map((_, i): ReactNode=>{
                  
                  if(recipe[`strIngredient${i+1}`] && recipe[`strIngredient${i+1}`].trim()!="") {
                    return <li key={`strIngredient${i+1}`}>{recipe?.[`strIngredient${i+1}`]}</li>
                  }

                  return null;
                })
              }
            </ul>
          </div>
          <div className="bg-amber-500">
            Measure: 
            <ul>
              {
                [...Array(20)].map((_, i): ReactNode=>{
                  
                  if(recipe[`strMeasure${i+1}`] && recipe[`strMeasure${i+1}`].trim()!="") {
                    return <li key={`strMeasure${i+1}`}>{recipe?.[`strMeasure${i+1}`]}</li>
                  }

                  return null;
                })
              }
            </ul>
          </div>
          <video src={recipe?.strYoutube}></video>
        </div>
      </div>
    </>);
  }
}

export default RecipeDetail

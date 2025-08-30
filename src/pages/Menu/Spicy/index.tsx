import { Link, Outlet } from "react-router-dom"
import RecipeLink from "../../../components/RecipeLink/RecipeLink"
import { useEffect, useState } from "react"
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
interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const Spicy = () => {

  const [mealsList, setMealsList] = useState<Meal[] | null>(null)
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMeals = async (): Promise<void>=>{
    try{
      setLoading(true)
      const res=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
      if(!res.ok) {
        throw new Error("failed to fetch the meals");
      }
      
      const data = await res.json();
      if(!data.meals || data.meals.length===0) {
        throw new Error("No Meals Found")
      }
      console.log('data.meals: ', data.meals)
      setMealsList(data.meals)
    } 
    catch(err: any) {
      setError(err.message)
    }
    finally {
      setLoading(false)
    }
  }
  
  useEffect(()=>{
    fetchMeals()
  }, [])

  if(loading) {
    return <LoadingMessage>Loading the recepie...</LoadingMessage>
  }

  if(error) {
    return <ErrorMessage>Oops! Recepie Not Found</ErrorMessage>
  }

  return (
    <div>
      Spicy

      <Link to={'52772'}>52772</Link>
      <RecipeLink recipeList={mealsList} />

      <Outlet />  
    </div>
  )
}


export default Spicy
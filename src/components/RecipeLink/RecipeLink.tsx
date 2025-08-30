import type { FC } from "react"
import { NavLink } from "react-router-dom";
import styled from "styled-components"

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const RecipeListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const DynamicLink = styled(NavLink)`
  width: 100px;
  padding: 8px 16px;
  border-radius: 5px;

  &.active {
    color: blue;
  }
`

interface RecipeLinkProps {
  recipeList: Meal[] | null
}

const RecipeLink: FC<RecipeLinkProps> = ({recipeList}) => {
    return (
      <RecipeListWrapper>
        {
          recipeList && recipeList.map((recipe)=>(
            <DynamicLink key={recipe.idMeal} to={recipe?.idMeal}>
              <img className="w-25 rounded-full" src={recipe.strMealThumb} alt={recipe.strMeal} />
              <p className="text-ellipsis">{recipe.strMeal.substring(0, 5)}...</p>
            </DynamicLink>
          ))
        }
      </RecipeListWrapper>
    )
  // }
}

export default RecipeLink

import styled from "styled-components";
export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px;
  justify-content: space-evenly;
`;
export const RecipeContainer = styled.div`
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 10px 0 #aaa;
  padding: 10px;
`;
export const RecipeImg = styled.img`
  height: 200px;
  object-fit: cover;
`;
export const RecipeName = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const RecipeIngredients = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  border: 1px solid green;
  padding: 8px;
  border-radius: 4px;
  color: green;
  text-align: center;
}
`;
export const RecipeSeeMore = styled.div`
  font-size: 20px;
  border: 1px solid red;
  padding: 8px;
  border-radius: 4px;
  align-items: center;
  color: red;
  text-align: center;
`;

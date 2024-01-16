import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import axios from "axios";

import {
  HeaderComponant,
  AppNameContainer,
  SearchIcon,
  AppName,
  SearchContainer,
  SearchImg,
  SearchInput,
} from "./Componants/Header.jsx";

import {
  RecipeListContainer,
  RecipeContainer,
  RecipeImg,
  RecipeName,
  RecipeIngredients,
  RecipeSeeMore,
} from "./Componants/Recipiecontiner.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Placeholder = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px;
  opacity: 0.5;
`;
const RecipContainerComponant = (props) => {
  const { recipeObj } = props;
  console.log(props);
  return (
    <RecipeContainer>
      <RecipeImg src={recipeObj.recipe.image}></RecipeImg>
      <RecipeName>{recipeObj.recipe.label}</RecipeName>
      <RecipeIngredients>Ingredients</RecipeIngredients>
      <RecipeSeeMore>See More Details</RecipeSeeMore>
    </RecipeContainer>
  );
};

const Application_ID = "5d96481d";
const Application_Keys = "90e19fd409bc5058ac9f21e59b14e4bf";

function App() {
  const [timeoutID, updateTimeOutID] = useState(0);
  const [recipeList, updateRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${Application_ID}&app_key=${Application_Keys}`
    );
    updateRecipeList(response.data.hits);
  };
  const onChangeID = (event) => {
    clearTimeout(timeoutID);
    const timeOut = setTimeout(() => fetchRecipe(event.target.value), 1000);
    updateTimeOutID(timeOut);
  };

  return (
    <>
      <Container>
        <HeaderComponant>
          <AppNameContainer>
            <SearchIcon src="/burger.jpg"></SearchIcon>
            <AppName>Recipe Header</AppName>
          </AppNameContainer>
          <SearchContainer>
            <SearchImg src="/download.png"></SearchImg>
            <SearchInput
              placeholder="Enter Recipe"
              onChange={onChangeID}
            ></SearchInput>
          </SearchContainer>
        </HeaderComponant>
        <RecipeListContainer>
          {recipeList.length ? (
            recipeList.map((recipeObj) => (
              <RecipContainerComponant
                recipeObj={recipeObj}
                key={recipeObj}
              ></RecipContainerComponant>
            ))
          ) : (
            <Placeholder src="/burger.jpg"></Placeholder>
          )}
        </RecipeListContainer>
      </Container>
    </>
  );
}

export default App;

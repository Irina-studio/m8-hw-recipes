import { useEffect, useState } from "react";
import video from "./video.mp4";
import "./App.css";
import MyRecipesComponent from "./MyRecipesComponent";

function App() {
  const MY_ID = "ab367707";
  const MY_KEY = "abeffa5082965d36918a5a41d975296c";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("strawberry");

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`
      );
      const data = await response.json();
      setMyRecipes(data.hits);
    };
    getRecipe();
  }, [wordSubmitted]);

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  };

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  };

  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div>
        <h1>Find Recipe by Ingredients</h1>
      </div>
      <div className="container1">
        <form onSubmit={finalSearch}>
          <input
            className="search"
            autocomplete="off"
            placeholder="Search"
            onChange={myRecipeSearch}
            value={mySearch}
          />
        </form>
        <div className="container1">
          <button onClick={finalSearch}>Add</button>
        </div>
      </div>
      <div className="container4">
        {myRecipes.map((element, index) => (
          <div key={index} className="container3">
            <MyRecipesComponent
              label={element.recipe.label}
              image={element.recipe.image}
              calories={element.recipe.calories}
              ingredients={element.recipe.ingredientLines}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

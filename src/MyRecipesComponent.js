function MyRecipesComponent({ label, image, calories, ingredients }) {
  return (
    <div className="container2">
      <div className="container">
        <h2>{label}</h2>
      </div>

      <div className="container">
        <img src={image} alt="recipe" />
      </div>

      <ul className="container list">
        {ingredients.map((ingredient, index) => (
          <li key={index}> {ingredient} </li>
        ))}
      </ul>
      <div className="btn1">
        <button className="btn">{calories.toFixed()} calories</button>
      </div>
    </div>
  );
}

export default MyRecipesComponent;

import rawMeals from "./rawMealsBackUp";

const formatedMeals = rawMeals[0].results.map((meal) => {
  const protein =
    meal.nutrition?.nutrients?.find((n) => n.name === "Protein")?.amount || 0;
  const highProtein = protein >= 20;
  const diets= meal.diets || [];
  const cleanSummary= meal.summary?.replace(/<[^>]*>/g, "") || "";
  const shortSummary= cleanSummary.length> 120 ? cleanSummary.slice(0,120)+ "..." : cleanSummary;
  const ingredients= meal.extendedIngredients.map((n)=> n.original)

  return {
    title: meal.title,
    image: meal.image,
    id: meal.id,
    calories:
    Math.ceil( meal.nutrition?.nutrients.find((n) => n.name === "Calories")?.amount || 0),
    diets: [
      meal.vegan && "Vegan",
      diets?.includes("lacto ovo vegetarian") && "Vegeterian",
      diets?.includes("gluten free") && "Gluten-Free",
      diets?.includes("dairy free") && "Dairy-Free",
      (diets?.includes("paleolithic") ||
        diets?.includes("primal") ||
        diets?.includes("whole 30")) && "Paleo",
      highProtein && "High-Protein",
    ].filter(Boolean),
    summary: shortSummary,
    protein,
ingredients,
nutriScore: meal.spoonacularScore.toFixed(1)

  };
});

// const formatedMeals= rawMeals[0].results.map((meal)=>{
//     const protein= meal.nutrition?.nutrients.find((n)=> n.name==="Protein")?.amount || 0;

//     return {
//         title: meal.title,
//         protein
//     }
// })

// console.log(
//   formatedMeals
// )

export default formatedMeals;

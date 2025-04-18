const recipes = [
  {
    title: "Salade César",
    category: "Entrée",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hellofresh.fr%2Frecipes%2Fsalade-cesar-de-luxe-au-poulet-5ba8a97130006c3be559c7d2&psig=AOvVaw3_mrq_0EWc5PCw-5LKjT77&ust=1745079345587000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLjnzqf94YwDFQAAAAAdAAAAABAE",
    description: "Une salade classique avec poulet, croûtons et parmesan."
  },
  {
    title: "Spaghetti Carbonara",
    category: "Plat",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.marthastewart.com%2F338686%2Fspaghetti-carbonara&psig=AOvVaw0n19mIMeePAI-ra6GUJTGa&ust=1745079229879000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLDY8e_84YwDFQAAAAAdAAAAABAE",
    description: "Des pâtes crémeuses avec lardons et œufs."
  },
  {
    title: "Tarte aux Fraises",
    category: "Dessert",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.patisserie-et-gourmandise.com%2Frecette%2Ftarte-fraise%2F&psig=AOvVaw1hSdVXzP0giRZskvqeb6MQ&ust=1745079385766000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOjlurr94YwDFQAAAAAdAAAAABAl",
    description: "Une tarte fraîche avec crème pâtissière et fraises."
  },
];

let currentFilter = "all";

function displayRecipes(filter) {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const container = document.getElementById("recipes-container");
  container.innerHTML = "";

  const filtered = recipes.filter(r => {
    const inCategory = filter === "all" || r.category === filter;
    const inSearch = r.title.toLowerCase().includes(searchTerm) || r.description.toLowerCase().includes(searchTerm);
    return inCategory && inSearch;
  });

  filtered.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" />
      <h3>${recipe.title}</h3>
      <p>${recipe.description}</p>
    `;
    container.appendChild(card);
  });
}

function filterRecipes(category) {
  currentFilter = category;
  displayRecipes(category);
}

function searchRecipes() {
  displayRecipes(currentFilter);
}

document.getElementById("add-recipe-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("recipeTitle").value;
  const image = document.getElementById("recipeImage").value;
  const category = document.getElementById("recipeCategory").value;
  const description = document.getElementById("recipeDescription").value;

  const newRecipe = { title, image, category, description };
  recipes.push(newRecipe);

  this.reset();
  displayRecipes(currentFilter);
});

displayRecipes("all");

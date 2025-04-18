const recipes = [
  {
    title: "Salade César",
    category: "Entrée",
    image: "https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_50,w_2600/hellofresh_s3/image/5ba8a97130006c3be559c7d2-6cea7001.jpg",
    description: "Une salade classique avec poulet, croûtons et parmesan."
  },
  {
    title: "Spaghetti Carbonara",
    category: "Plat",
    image: "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-master768-v2.jpg?quality=75&auto=webp",
    description: "Des pâtes crémeuses avec lardons et œufs."
  },
  {
    title: "Tarte aux Fraises",
    category: "Dessert",
    image: "https://www.patisserie-et-gourmandise.com/wp-content/uploads/2018/04/recette-tarte-fraise-2.jpg",
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

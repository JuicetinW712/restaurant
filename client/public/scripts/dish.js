const renderDish = async () => {
  const requestedID = window.location.href.split("/").pop();

  const response = await fetch("/dishes");
  const data = await response.json();

  const dishContent = document.getElementById("dish-content");
  let dish;

  if (data) {
    console.log(requestedID);
    dish = data.find((dish) => dish.internal_name === requestedID);
  }

  if (dish) {
    document.getElementById("image").src = dish.image;
    document.getElementById("name").textContent = dish.name;
    document.getElementById("category").textContent =
      `Category: ${dish.category}`;
    document.getElementById("price").textContent = `$${dish.price}`;
    document.getElementById("calories").textContent =
      `${dish.calories} Calories`;
    document.getElementById("description").textContent = dish.description;
    document.title = dish.name;
  } else {
    const noDishes = document.createElement("h2");
    noDishes.textContent = "No dishes Available 😞";
    dishContent.appendChild(noDishes);
  }
};

renderDish();

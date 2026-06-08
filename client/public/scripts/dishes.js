const renderDishes = async () => {
  const response = await fetch("/dishes");
  const data = await response.json();

  const mainContent = document.getElementById("main-content");

  console.log(data);

  if (data) {
    data.map((dish) => {
      const card = document.createElement("article");
      card.className = "card";

      const topContainer = document.createElement("div");
      topContainer.className = "top-container";

      const img = document.createElement("img");
      img.src = dish.image;
      img.alt = dish.name;

      topContainer.appendChild(img);

      const bottomContainer = document.createElement("div");
      bottomContainer.className = "bottom-container";

      const name = document.createElement("h3");
      name.textContent = dish.name;

      const price = document.createElement("p");
      price.textContent = dish.description;

      const audience = document.createElement("p");
      audience.textContent = `Calories: ${dish.calories}`;

      const readMore = document.createElement("a");
      readMore.textContent = "Read More >";
      readMore.href = `/dishes/${dish.internal_name}`;
      readMore.role = "button";
      readMore.className = "read-more-btn";

      bottomContainer.appendChild(name);
      bottomContainer.appendChild(price);
      bottomContainer.appendChild(audience);
      bottomContainer.appendChild(readMore);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);

      mainContent.appendChild(card);
    });
  } else {
    const noDishes = document.createElement("h2");
    noDishes.textContent = "No Dishes Available 😞";
    mainContent.appendChild(noDishes);
  }
};

const requestedUrl = window.location.pathname.split("/").pop();

if (requestedUrl) {
  window.location.href = "../404.html";
} else {
  renderDishes();
}

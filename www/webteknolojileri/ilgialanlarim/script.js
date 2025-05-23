document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("product-container");

  fetch("https://api.tvmaze.com/shows")
    .then(res => res.json())
    .then(data => {
      const shows = data.slice(0, 5); // ilk 5 dizi/film
      container.innerHTML = "";

      shows.forEach(show => {
        const item = document.createElement("div");
        item.classList.add("card");
        item.innerHTML = `
          <h2>${show.name}</h2>
          <img src="${show.image.medium}" alt="${show.name}" />
          <p>${show.summary}</p>
          <p><strong>Türler:</strong> ${show.genres.join(", ")}</p>
          <p><strong>Yayın Tarihi:</strong> ${show.premiered}</p>
        `;
        container.appendChild(item);
      });
    })
    .catch(error => {
      container.innerHTML = "Veri çekilemedi.";
      console.error("Hata:", error);
    });
});

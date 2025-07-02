function getCharacters(done) {
    const results = fetch("https://rickandmortyapi.com/api/character")

    results.then(response => response.json())
    .then(data => {
        done(data)
    });
}

getCharacters(data => {

    data.results.forEach(personaje => {

        const article = document.createRange().createContextualFragment(/*html*/`
        <article>
            <div class="image-container">
                <img src="${personaje.image}" alt="Personaje">
            </div>

            <h2>${personaje.name}</h2>
            <span>${personaje.status}</span>
        </article>
        `);

        const main = document.querySelector("main");

        main.append(article);
    });
    
});

document.getElementById("buscarInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    const nombre = e.target.value.trim();
    if (nombre !== "") {
      // Redirige a personaje.html con nombre como parámetro en la URL
      window.location.href = `personaje.html?nombre=${encodeURIComponent(nombre)}`;
    }
  }
});
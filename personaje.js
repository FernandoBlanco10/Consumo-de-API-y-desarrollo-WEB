const contenedor = document.getElementById("detalle-personaje");

// Obtener nombre desde la URL
const params = new URLSearchParams(window.location.search);
const nombre = params.get("nombre");

if (nombre) {
  fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`)
    .then(res => res.json())
    .then(data => {
      if (data.results && data.results.length > 0) {
        const personaje = data.results[0]; // toma el primero que coincida
        contenedor.innerHTML = `
          <article style="max-width: 400px; margin: 30px auto; background: white; padding: 20px; border-radius: 10px;">
            <img src="${personaje.image}" alt="${personaje.name}" style="width:100%; border-radius: 10px;">
            <h2>${personaje.name}</h2>
            <p><strong>Status:</strong> ${personaje.status}</p>
            <p><strong>Especie:</strong> ${personaje.species}</p>
            <p><strong>Género:</strong> ${personaje.gender}</p>
            <p><strong>Origen:</strong> ${personaje.origin.name}</p>
            <p><strong>Ubicación:</strong> ${personaje.location.name}</p>
          </article>
        `;
      } else {
        contenedor.innerHTML = "<h2 style='color:white; text-align:center;'>No se encontró el personaje.</h2>";
      }
    });
} else {
  contenedor.innerHTML = "<h2 style='color:white; text-align:center;'>No se proporcionó ningún nombre.</h2>";
}
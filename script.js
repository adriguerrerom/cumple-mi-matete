document.addEventListener("DOMContentLoaded", () => {
  const candles = document.querySelectorAll(".candle");
  let apagadas = 0;

  candles.forEach(candle => {
    candle.addEventListener("click", () => {
      if (candle.classList.contains("apagada")) return;

      candle.classList.add("apagada");
      apagadas++;

      if (apagadas === candles.length) {
        mostrarSorpresa();
      }
    });
  });

  function mostrarSorpresa() {
    const contenedor = document.createElement("div");
    contenedor.className = "mensaje-sorpresa";

    const mensaje = document.createElement("p");
    mensaje.textContent = " Felices 16 años Matete, eres la mejor persona del mundo. Te mereces todo y siempre trataré de darte lo mejor.";

    const boton = document.createElement("button");
    boton.textContent = "Una pequeña sorpresita";
    boton.className = "boton-sorpresa";

    contenedor.appendChild(mensaje);
    contenedor.appendChild(boton);
    document.body.appendChild(contenedor);

    // Animación de entrada
    requestAnimationFrame(() => {
      contenedor.classList.add("show");
    });

    boton.addEventListener("click", () => {
      contenedor.remove(); // Oculta el texto y botón
      iniciarLluviaDinos(); // Activa la lluvia de dinosaurios
    });
  }

  function iniciarLluviaDinos() {
    const interval = setInterval(() => {
      const dino = document.createElement("div");
      dino.textContent = "🦖"; // aquí puedes alternar con 🦕💚 etc.
      dino.style.position = "fixed";
      dino.style.left = Math.random() * window.innerWidth + "px";
      dino.style.top = "-50px";
      dino.style.fontSize = Math.random() * 40 + 30 + "px";
      dino.style.animation = "caer 4s linear forwards";
      document.body.appendChild(dino);

      // Quitar después de que termine de caer
      setTimeout(() => dino.remove(), 4000);
    }, 200);

    // detener la lluvia a los 15s
    setTimeout(() => clearInterval(interval), 15000);
  }
});

// Función para obtener la hora actual en la zona horaria de Ciudad de México
function updateMexicoTime() {
    const mexicoCityTime = new Date().toLocaleString("en-US", {
      timeZone: "America/Mexico_City",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  
    // Selecciona el elemento HTML donde se mostrará la hora
    const timeElement = document.getElementById("mexico-time");
    if (timeElement) {
      timeElement.textContent = `Mex. ${mexicoCityTime}`;
    }
  }
  
  // Llama a la función una vez para establecer la hora inicial
  updateMexicoTime();
  
  // Configura un intervalo para actualizar la hora cada minuto
  setInterval(updateMexicoTime, 60000);
  
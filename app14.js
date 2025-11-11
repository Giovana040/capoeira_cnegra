console.log();

let isVideoVisible = false;

videoBtn.addEventListener("click", () => {
  if (!isVideoVisible) {
    // Troca imagem por vídeo
    mediaSection.innerHTML = `
      <iframe width="560" height="315"
        src="https://www.youtube.com/embed/hJHPCN-9Owk?autoplay=1"
        title="Vídeo de Capoeira"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>`;
    isVideoVisible = true;
  } else {
    // Volta para a imagem original
    mediaSection.innerHTML = '<img id="capoiraImg" src="Beach Capoeira.jpeg" alt="imagem grande 1">';
isVideoVisible = false;
  }
});

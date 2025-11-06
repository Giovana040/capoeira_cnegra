
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", () => {
  alert("Você clicou no botão!");
});

const videoBtn = document.getElementById("videoBtn");
const videoContainer = document.getElementById("videoContainer");
const closeVideo = document.getElementById("closeVideo");

videoBtn.addEventListener("click", () => {
  videoContainer.style.display = "block";
});

closeVideo.addEventListener("click", () => {
  videoContainer.style.display = "none";
});

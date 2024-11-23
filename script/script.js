//Foi usado javascript como solução da switch Toggle
document.addEventListener("DOMContentLoaded", () => {
  //Pegando os elementos pelo ID
  const toggle = document.getElementById("toggle");
  const labelOn = document.getElementById("on");
  const labelOff = document.getElementById("off");

  // Função para alternar a visibilidade
  const updateLabels = () => {
    if (toggle.checked) {
      labelOn.classList.add("visible");
      labelOn.classList.remove("hidden");
      labelOff.classList.add("hidden");
      labelOff.classList.remove("visible");
    } else {
      labelOn.classList.add("hidden");
      labelOn.classList.remove("visible");
      labelOff.classList.add("visible");
      labelOff.classList.remove("hidden");
    }
  };

  // Atualiza os labels ao carregar a página
  updateLabels();

  // Atualiza os labels ao clicar no toggle
  toggle.addEventListener("change", updateLabels);
});

//Variaveis para alterar o nome que está na tag p
const fileInput = document.getElementById('cover-photo');
const fileName = document.getElementById('file-name');
const fileError = document.getElementById('error-file');

fileInput.addEventListener('change', function() {
  // Verifica se há arquivo selecionado
  if (fileInput.files.length > 0) {
    fileName.textContent = `${fileInput.files[0].name}`;
    fileName.classList.add("file-selected");
    fileError.style.display = 'none';
  } else {
    fileName.textContent = "Nenhum arquivo selecionado";
    fileName.classList.remove("file-selected");
    fileError.style.display = 'flex';
  }
});
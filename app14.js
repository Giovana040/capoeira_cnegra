// A função que alterna a imagem
function trocarImagem() {
    // 1. Pega o elemento da imagem pelo ID
    const imagemElemento = document.getElementById('capoeiraImagem');

    // Define os caminhos das duas imagens
    // Certifique-se de que estes nomes de arquivo estejam corretos no seu projeto!
    const imagem1 = 'Beach Capoeira.jpeg'; 
    const imagem2 = 'Capoeira_Roda.jpg'; // Altere para o nome da sua segunda imagem
    
    // 2. Verifica qual imagem está sendo exibida e troca
    if (imagemElemento.src.includes(imagem1)) {
        // Se for a imagem 1, troca para a imagem 2
        imagemElemento.src = imagem2;
        imagemElemento.alt = 'Roda de Capoeira em Ação';
    } else {
        // Caso contrário, volta para a imagem 1
        imagemElemento.src = imagem1;
        imagemElemento.alt = 'Capoeira na Praia';
    }
}
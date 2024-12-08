$(document).ready(function() {
    // Variáveis para controle do carrossel
    let currentIndex = 0;
    const images = $(".carrossel-images img");
    const totalImages = images.length;

    // Função para atualizar a posição do carrossel
    function updateCarousel() {
        const offset = -currentIndex * 100;  // Desloca a imagem com base no índice
        $(".carrossel-images").css("transform", `translateX(${offset}%)`);
    }

    // Função para avançar para a próxima imagem
    $("#next").click(function() {
        currentIndex = (currentIndex + 1) % totalImages; // Avança e retorna ao primeiro quando chega no final
        updateCarousel();
    });

    // Função para voltar para a imagem anterior
    $("#prev").click(function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Volta e vai para a última se estiver no começo
        updateCarousel();
    });

    // Autoplay: A cada 3 segundos, avança automaticamente para a próxima imagem
    setInterval(function() {
        currentIndex = (currentIndex + 1) % totalImages; // Avança para a próxima imagem
        updateCarousel();
    }, 3000); // 3000ms = 3 segundos

});
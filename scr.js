


const skillsCarousel = document.getElementById('skillsCarousel');
let isMouseOver = false;
let scrollAmount = 0;

function duplicateItems() {
    const carouselItems = skillsCarousel.innerHTML;
    skillsCarousel.innerHTML += carouselItems; 
}

function startCarousel() {
    setInterval(() => {
        if (!isMouseOver) {
            scrollAmount += 1;
            skillsCarousel.style.transform = `translateX(-${scrollAmount}px)`;

            if (scrollAmount >= skillsCarousel.scrollWidth / 2) {
                scrollAmount = 0; 
                skillsCarousel.style.transform = 'translateX(0px)';
            }
        }
    }, 10); 
}


skillsCarousel.addEventListener('mouseover', () => {
    isMouseOver = true;
});


skillsCarousel.addEventListener('mouseout', () => {
    isMouseOver = false;
});


duplicateItems();
startCarousel();



function enviarSugestao(event) {
    event.preventDefault(); 


    const nome = document.getElementById('nome').value;
    const sugestao = document.getElementById('sugestao').value;

    console.log(`Enviando email com nome: ${nome} e sugestão: ${sugestao}`);

    document.getElementById('sugestaoForm').reset();
}







document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('home').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('homeSection').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('skills').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('skillsSection').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('projetos').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('projetosSection').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('contato').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('contatoSection').scrollIntoView({ behavior: 'smooth' });
    });
});


  
    



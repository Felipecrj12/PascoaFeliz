// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Fade-in com IntersectionObserver
const elementos = document.querySelectorAll('section');

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('mostrar');
        }
    });
}, {
    threshold: 0.1
});

elementos.forEach((elemento) => observer.observe(elemento));

// Botão Voltar ao Topo
const topoBtn = document.getElementById("topoBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        topoBtn.style.display = "block";
    } else {
        topoBtn.style.display = "none";
    }
};

if (topoBtn) {
    topoBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Abrir imagem ampliada
function abrirImagem(elemento) {
    const imagem = elemento.querySelector('img');
    const url = imagem.src;

    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '9999';

    const imgAmpliada = document.createElement('img');
    imgAmpliada.src = url;
    imgAmpliada.style.maxWidth = '90vw';
    imgAmpliada.style.maxHeight = '90vh';
    imgAmpliada.style.borderRadius = '10px';
    imgAmpliada.style.boxShadow = '0 0 20px white';

    overlay.appendChild(imgAmpliada);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => document.body.removeChild(overlay));
}
export const smoothScroll = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (target) {
        window.scrollTo({
            top: target.offsetTop - 64, // 64px es la altura aproximada de la barra de navegación
            behavior: 'smooth'
        });
    }
};
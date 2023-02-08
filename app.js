const navSlide = () =>{
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
    });

    window.addEventListener("resize", function() {
        if (window.innerWidth < 800) {
        document.querySelector(".nav-links").classList.remove("nav-active");
        }
        });
}

navSlide();

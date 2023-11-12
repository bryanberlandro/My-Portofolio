let navbar = document.querySelector('.navbar');
const navList = document.querySelector('ul');

window.addEventListener('scroll', function(){
    navbar.classList.toggle('bg-primary', this.window.scrollY > 20);
    navbar.classList.toggle('text-white', this.window.scrollY > 20);
    navList.classList.toggle('text-white', this.window.scrollY > 20);
})

const greeting = document.querySelector('#greeting');

setTimeout(function(){
    greeting.classList.add('translate-y-0', 'opacity-100')
}, 500)

setTimeout(function(){
    const heroGreeting = document.querySelector('#hero-greeting');

    heroGreeting.classList.add('translate-y-0', 'opacity-100');
}, 1200)

setTimeout(function(){
    const bubleReveal = document.querySelectorAll('#bubble');

    for (let i = 0; i < bubleReveal.length; i++){
        bubleReveal[i].classList.add('scale-100', 'opacity-100');
    }
}, 2000)




function startLoader(){
    let counterElement = document.querySelector(".count p");
    let currentValue = 0;

    function updateCounter(){
        if (currentValue < 100){
            let increment = Math.floor(Math.random() * 10) + 1;
            currentValue = Math.min(currentValue + increment, 100);
            counterElement.textContent = currentValue + '%';

            let delay = Math.floor(Math.random() * 200) + 25;
            setTimeout(updateCounter, delay);
        }
    }
    updateCounter();
}

startLoader();
gsap.to(".count", {opacity: 0, delay: 3.5, duration: 1});
gsap.to(".load", {opacity: 0, delay: 3.5, duration: 1});

let textWrapper = document.querySelector(".text");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


anime.timeline({loop: false})
    .add({
        targets: '.text .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 900,
        delay: (el, i) => 20 * i,
        begin: function (anim) {
            anim.animatables.forEach((target) => {
                target.target.style.opacity = 0;
            });
        }
    })
    .add({
        targets: '.text .letter',
        translateY: [0, 100],
        easing: "easeInOutQuad",
        duration: 3000,
        delay: (el, i) => 2000 + 60 * i
    })

    gsap.to(".pre-loader", {
        scale: 0.5,
        ease: "power4.inOut",
        duration: 2,
        delay: 3
    })
    gsap.to(".loader", {
        height: "0",
        ease: "power4.inOut",
        duration: 1.5,
        delay: 3.75
    })
    gsap.to(".loader-bg", {
        height: "0",
        ease: "power4.inOut",
        duration: 1.5, 
        delay: 4
    })
    gsap.to(".loader-2", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "power4.inOut",
        duration: 1.5,
        delay: 3.5
    })
    gsap.from(".header h1" , {
        y: 200,
        ease: "power4.inOut", 
        duration: 1.5,
        delay: 3.75, 
        stagger: 0.05
    })
    gsap.to(".img", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease: "power4.inOut",
        duration: 1.5,
        delay: 4.5,
        stagger: 0.25
    })


// // Assuming you have an element with the class "loader-content"
// const loaderContent = document.querySelector('.loader-content');

// // Add the "done" class when the loading is done
// loaderContent.classList.add('done');

// // Add the "loaded" class to the logo when the loading is done
// const logo = document.querySelector('.site-content nav .logo img');
// logo.classList.add('loaded');


//         // Add this script to your HTML
//         document.addEventListener("DOMContentLoaded", function () {
//             var loaderContent = document.querySelector(".pre-loader");
//             var siteContent = document.querySelector(".site-content");

//             // Simulating the loader completion, you should replace this with your actual loader completion logic
//             setTimeout(function () {
//                 loaderContent.classList.add("done");
//                 siteContent.classList.add("show-logo"); // Add a class to show the logo
//             }, 3000); // Adjust the timeout according to your loader duration
//         });
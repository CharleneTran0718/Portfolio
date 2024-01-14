

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
    gsap.from(".header a" , {
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


    setTimeout(function() {
        document.querySelector('.header a').classList.add('fade-in');
    }, 5000);

    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('custom-typing');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #efa0ad}";
        document.body.appendChild(css);
    };


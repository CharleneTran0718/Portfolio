var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("box");

function restartAnimations(element) {
    const animatedElements = element.querySelectorAll('[class*="html"], [class*="css"], [class*="js"], [class*="react"], [class*="py"], [class*="java"], [class*="sql"], [class*="ts"], [class*="node"]');
    animatedElements.forEach((el) => {
        if (el.style.animation) {
            el.style.animation = 'none';
            void el.offsetWidth; // Force reflow
            el.style.animation = '';
        }
    });
}

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    const activeElement = document.getElementById(tabname);
    activeElement.classList.add("active-tab");
    
    // Retrigger animations based on tab type
    if(tabname === 'experience') {
        const experienceItems = document.querySelectorAll('.experience-item');
        experienceItems.forEach((item, index) => {
            item.style.animation = 'none';
            void item.offsetWidth; // Force reflow
            item.style.animation = 'slideInBox 0.5s ease-out forwards';
            item.style.animationDelay = `${index * 0.15}s`;
        });
    } else if(tabname === 'frontend' || tabname === 'backend') {
        // Restart skill animations immediately
        const skillDivs = activeElement.querySelectorAll('.skills > div');
        skillDivs.forEach((skillDiv) => {
            skillDiv.style.animation = 'none';
            void skillDiv.offsetWidth; // Force reflow
            skillDiv.style.animation = '';
        });
    }
}

// Trigger initial animations on page load
document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.animate-box');
    boxes.forEach((box, index) => {
        box.style.setProperty('--delay', `${index * 0.2}s`);
    });
    
    // Apply staggered animation to experience items on initial load
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach((item, index) => {
        item.style.setProperty('--item-delay', `${index * 0.15}s`);
        item.style.animationDelay = `${index * 0.15}s`;
    });
});
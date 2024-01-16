function loco() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}
loco();


function page3Logic() {
    const elemContainer = document.querySelector("#elem-container");
    const fixedImage = document.querySelector("#fixed-image");

    elemContainer.addEventListener("mouseenter", () => {
        // fixedImage.style.display = "block";
        fixedImage.style.height = "32vmax";
    });

    elemContainer.addEventListener("mouseleave", () => {
        // fixedImage.style.display = "none";
        fixedImage.style.height = "0vmax";
    });

    const elements = document.querySelectorAll(".elem");
    elements.forEach(function(elem){
        elem.addEventListener("mouseenter", () => {
            var image = elem.getAttribute("data-image");
            fixedImage.style.backgroundImage = `url(${image})`;
        
        });
    });
}
page3Logic();


function page4Logic() {
    const design = document.querySelector("#page4-left>h1:nth-child(1)");
    const project = document.querySelector("#page4-left>h1:nth-child(2)");
    const execution = document.querySelector("#page4-left>h1:nth-child(3)");
    var page4Right = document.querySelector("#page4-right");
    var page4Paragraph = document.querySelector("#page4-left>p");

    design.addEventListener("click", () => {
        design.style.opacity = 1
        project.style.opacity = 0.3;
        execution.style.opacity = 0.3;
        page4Right.style.backgroundImage = `url(design-image.webp)`;
        page4Paragraph.innerHTML = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";
    });

    project.addEventListener("click", () => {
        project.style.opacity = 1
        design.style.opacity = 0.3;
        execution.style.opacity = 0.3;
        page4Right.style.backgroundImage = `url(project-image.webp)`;
        page4Paragraph.innerHTML = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.";
    });

    execution.addEventListener("click", () => {
        execution.style.opacity = 1
        design.style.opacity = 0.3;
        project.style.opacity = 0.3;
        page4Right.style.backgroundImage = `url(execution-image.webp)`;
        page4Paragraph.innerHTML = "We're with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.";
    });
}
page4Logic();


function swiperLogic() {
    var swiper = new Swiper(".mySwiper", {
        // slidesPerView: 3.5,
        slidesPerView: 1.5,
        spaceBetween: 50,
        breakpoints: {
            570: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3.5,
              spaceBetween: 40,
            }
        }
    });
}
swiperLogic();


function menuLogic() {
    const menuButton = document.querySelector("nav>button");
    const menuDiv = document.querySelector("#menu");
    const navImage = document.querySelector("nav>img")
    var flag = 0;
    menuButton.addEventListener("click", () => {
        if(flag === 0){
            menuDiv.style.top = "0%";
            navImage.style.opacity = 0;
            flag = 1;
        }
        else {
            menuDiv.style.top = "-100%";
            navImage.style.opacity = 1;
            flag = 0    ;
        }
    });
}
menuLogic();


function loaderAnimation() {
    const loader = document.querySelector("#loader");
    const heading = document.querySelector("#loader > h1");
    setTimeout(()=>{
        heading.innerHTML = "Content";
    }, 1500);
    setTimeout(()=>{
        heading.innerHTML = "Experiences";
    }, 3000);
    setTimeout(()=>{
        loader.style.top = "-100%";
    }, 4500);
}
loaderAnimation();
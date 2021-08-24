document.addEventListener("mousemove", parallax);
let cursorCircle = document.querySelector('.cursor');

function parallax(e){
    document.querySelectorAll('.bg').forEach(function(move){
        
        var moving_value = move.getAttribute("data-speed");
        var x = (e.clientX * moving_value)/150;
        var y = (e.clientY * moving_value)/150;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
        cursorCircle.style.transform = "translateX(" + e.clientX + "px) translateY(" + e.clientY + "px)";
    });
}

var swiper = new Swiper(".carousel-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: -5,
    coverflowEffect: {
      rotate: 0,
    },
    mousewheel: true,
  });

// const carouselImages = document.querySelector('.carousel__images');
// const images = document.querySelectorAll('.carousel__image');
// const carouselButtons = document.querySelectorAll('.carousel__button');
// const numberOfImages = document.querySelectorAll('.carousel__image').length;
// const activeCarousel = document.querySelector('.carousel__imageContainer');
// let imageIndex = 2;
// let translateX = 0;

// carouselButtons.forEach(button => {
//     button.addEventListener('click', (event) => {
//         if (event.target.id === 'previous') {
//             if (imageIndex !== 1) {
//                 imageIndex--;
//                 translateX += 340;
//             }
//         } else {
//             if (imageIndex !== numberOfImages) {
//                 imageIndex++;
//                 translateX -= 340;
//             }
//         }
    
//         carouselImages.style.transform = `translateX(${translateX}px)`;

//         images.forEach((image, index) => {
//             if (index === imageIndex - 1) {
//                 image.classList.add('active');
                
//             } else {
//                 image.classList.remove('active');
//             }
//         });
//     });
// });

// const activeImg = document.querySelector('.active');
// const projectInfo = document.querySelector('.project-info');
// const projectTitle = document.querySelector('.project-title');
// const projectTech = document.querySelector('.pt-span');
// console.log(projectInfo);

// activeImg.addEventListener('mouseenter', function(event){
//     //  event.target.style.filter = "brightness(50%)";
//      projectInfo.style.display = "flex";
//      projectInfo.style.flexDirection = "column";
//      projectInfo.style.alignItems = "flex-end";
//      projectTitle.innerHTML = projects[1].title;
//      projectTech.innerHTML = projects[1].tech
// });

// activeImg.addEventListener('mouseleave', function(event){
//     //  event.target.style.filter = "brightness(100%)";
//      projectInfo.style.display = "none";
     
// });

const projects = [
    {
        "title": "Shopping Cart Template",
        "tech": "Vanilla JS",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolor veniam atque hic minus eligendi!",
        "live": "htttps://examplename.app/",
        "repo": "https://github.com/gianbr"
    },
    {
        "title": "Old Portfolio",
        "tech": "Vanilla JS",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolor veniam atque hic minus eligendi!",
        "live": "htttps://examplename.app/",
        "repo": "https://github.com/gianbr"
    },
    {
        "title": "QA Game",
        "tech": "Vanilla JS",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolor veniam atque hic minus eligendi!",
        "live": "htttps://examplename.app/",
        "repo": "https://github.com/gianbr"
    }
]

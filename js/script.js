const closeBtn = document.querySelector(".x"),
    burger = document.querySelector(".burger__menu"),
    menu = document.querySelector(".menu"),
    container = document.querySelector(".privet"),
    logotype = document.querySelector('.logotype');


    burger.addEventListener("click", function(){
        container.style.display = 'flex'
        container.style.opacity  = '1'

        setTimeout(() => {
            container.style.transform = 'scaleY(1)'
        }, 300);
    });

    closeBtn.addEventListener('click', function(){
        container.style.transform = 'scaleY(0)'


        setTimeout(() => {
            container.style.opacity = '0' 
        }, 40);

        setTimeout(() => {
            container.style.display = 'none'
        }, 300);
    });
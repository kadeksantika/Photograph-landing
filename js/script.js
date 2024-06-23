const hamburger = document.getElementById('hamburger');
const body = document.getElementById('body');
const navigation = document.getElementById('navigation');
const aside = document.getElementById('aside');


hamburger.addEventListener('click', function () {
    if (navigation.classList.contains('nav-active')) {
        navigation.classList.remove('nav-active');
    } else {
        navigation.classList.add('nav-active');
    }
});


window.addEventListener('scroll', function () {
    var scrollDistance = window.scrollY;

    // Navigasi muncul
    if(!navigation.classList.contains('nav-active')){
        if (scrollDistance > window.innerHeight / 4) {
            body.classList.add('moreThan25Vh');
            if (scrollDistance > window.innerHeight / 2) {
                body.classList.add('moreThan50Vh');
                if (scrollDistance > window.innerHeight) {
                    body.classList.add('moreThan100Vh');
                    body.classList.remove('moreThan50Vh');
                } else {
                    body.classList.remove('moreThan100Vh');
                }
            } else {
                body.classList.remove('moreThan50Vh');
            }
        } else {
            body.classList.remove('moreThan25Vh');
        }
    }
 
    // Aside muncul
    if (scrollDistance > window.innerHeight) {
        aside.classList.add('active'); 
    } else {
        aside.classList.remove('active');
    }
 

});
var animateScaling__sign_in = anime({
    targets: '.nav__sign-btn',
    scale: 0.8,
    autoplay: false
});


document.querySelector('.nav__sign').onclick = animateScaling__sign_in.restart
let navbar = document.querySelector('.header .navbar');
let menubtn =  document.querySelector('#menu-btn');

menubtn.onclick = () =>{
    navbar.classList.toggle('active');
}


document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})





var swiper=new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:0,centeredSlides:!0,loop:!0,autoplay:{delay:1e4,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,t){return e+1<10?'<span class="'+t+'">'+`0${e+1}</span>`:'<span class="'+t+'">'+(e+1)+"</span>"}}});swiper=new Swiper(".mySwiper2",{slidesPerView:1,spaceBetween:0,loop:!0,autoplay:{delay:1e4,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const menuButton=document.querySelector(".hamburger__btn");let header=document.querySelector("header"),menuBox=document.querySelector(".menubox"),body=document.querySelector("body");menuButton&&(menuButton.addEventListener("click",(function(e){header.classList.toggle("active"),body.classList.toggle("overflow-hidden")})),document.body.addEventListener("click",(function(e){"active"==header.classList&&(e.target.closest("header")||(header.classList.remove("active"),body.classList.remove("overflow-hidden")))})),document.addEventListener("keydown",(function(e){"active"==header.classList&&"Escape"==e.code&&(header.classList.remove("active"),body.classList.remove("overflow-hidden"))}))),window.addEventListener("scroll",(function(){let e=document.body.scrollTop||document.documentElement.scrollTop;header.offsetWidth<=768?e>54?header.style.cssText="\n\t\t\t\tbackground: #252525;\n\t\t\t\tborder-bottom: 2px solid #4caf50;\n\t\t\t":header.removeAttribute("style"):e>54?header.style.cssText="\n\t\t\t\tpadding-top: 24px;\n\t\t\t\tbackground: #252525;\n\t\t\t\tborder-bottom: 2px solid #4caf50;\n\t\t\t":header.removeAttribute("style")}));
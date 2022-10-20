const body = document.body;
const dropDown = document.getElementById('mobile-drop-down-container');
const togglerOpen = document.getElementById('toggle-nav');
const togglerClose = document.getElementById('toggle-nav-2');
const input = document.getElementById('search-input');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
const searchBtn = document.getElementById('search');
const deskTopMenu = document.getElementById('desktop-menu-list');
const deskTopSearch = document.getElementById('desktop-search-container');
const backdrop = document.getElementById('backdrop')
const footerItems = document.querySelectorAll(".footer-item");
const closeBtn = document.getElementById("close-search");
const video = document.getElementById('bgvideo');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');

// opens the navigation drop down and changes the hamburger
togglerOpen.addEventListener('click', ()=>{
    dropDown.classList.add('mobile-drop-down-container-active');
    togglerOpen.style.display='none';
    togglerClose.style.display='block';
    body.style.overflow='hidden';
});

//closes the navigation drop down and changes the hamburger 
togglerClose.addEventListener('click', ()=>{
    dropDown.classList.remove('mobile-drop-down-container-active');
    togglerOpen.style.display='block';
    togglerClose.style.display='none';
    body.style.overflow='auto';
})

// opens the search bar when clicked
searchBtn.addEventListener('click', ()=>{
    deskTopMenu.classList.add('hide-desktop-menu-list');
    deskTopSearch.style.display='block';
    backdrop.classList.add('backdrop');
})

backdrop.addEventListener('click', function(){
    deskTopMenu.classList.remove('hide-desktop-menu-list');
    deskTopSearch.style.display='none';
    backdrop.classList.remove('backdrop');
})
// Closes the search bar when clicked
closeBtn.addEventListener('click', ()=>{
    deskTopMenu.classList.remove('hide-desktop-menu-list');
    deskTopSearch.style.display='none';
    backdrop.classList.remove('backdrop');
})



footerItems.forEach( function(footerItem){
    const title = footerItem.querySelector(".title-open")

    title.addEventListener('click', function() {

        footerItems.forEach(function (item){
            if(item !== footerItem){
                item.classList.remove('show-footer-links')
                // removes the classname on any footerItem that is not the current footerIte being clicked
            }
        })

        footerItem.classList.toggle("show-footer-links");
    })
})

playBtn.addEventListener('click', function(){
    video.play()
    playBtn.style.display ='none';
    pauseBtn.style.display = 'block'
});

pauseBtn.addEventListener('click', function(){
    video.pause()
    playBtn.style.display ='block';
    pauseBtn.style.display = 'none'
})

// video.addEventListener('click', function(){
//     if (pause){
//         video.pause()
//         playBtn.style.display ='block';
//         pauseBtn.style.display = 'none'
//     } else {
//         video.play()
//         playBtn.style.display ='none';
//         pauseBtn.style.display = 'block'
//     }
//     video.onplaying = function() {
//         play = true;
//       };
//       video.onpause = function() {
//         play = false;
//     }
// });

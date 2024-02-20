

window.addEventListener("load", (event) => {

    const siteHeader = document.getElementById('siteHeader') ;
    const navToggle = document.getElementById('navToggle') ;
    const servicesBtn = document.getElementById('servicesBtn') ; 
    const servicesSubmenu = document.getElementById('servicesSubmenu') ;

    servicesBtn.addEventListener('click' , ()=> {
        servicesSubmenu.classList.toggle('sub-open')
    })

    navToggle.addEventListener('click' , ()=> {
        siteHeader.classList.toggle('open')
    })
  });


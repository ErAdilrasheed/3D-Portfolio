//turn pages when click next or prev buuton
const pageTurnBtn = document.querySelectorAll('.nextprev-button');

pageTurnBtn.forEach((el, index) => {
  el.onclick = () => {
    const pageTurnId = el.getAttribute('data-page');
    const pageTurn = document.getElementById(pageTurnId);

    if (pageTurn.classList.contains('turn')) {
      pageTurn.classList.remove('turn');
      setTimeout(() => {
        pageTurn.style.zIndex = 20 - index;
      }, 500)
    }
    else {
      pageTurn.classList.add('turn');
      setTimeout(() => {
        pageTurn.style.zIndex = 20 + index;
      }, 500)
    }
  }
})

// contact me button when click
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
  pages.forEach((page, index) => {
    setTimeout(() => {
      page.classList.add('turn');

      setTimeout(() => {
        page.style.zIndex = 20 + index;
      }, 500)
    }, (index + 1) * 200 + 100)
  })
}

// create reverse index function 

let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex(){
  pageNumber--;
  if(pageNumber < 0){
    pageNumber = totalPages - 1;
  }
}

//back profile button when click

const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
  pages.forEach((_, index) => {
    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].classList.remove('turn');

      setTimeout(() => {
        reverseIndex();
        pages[pageNumber].style.zIndex = 10 + index;
 
      }, 500)
    }, (index + 1) * 200 + 100)
  })
}

// opening animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');
// opening animation cover right animation 
setTimeout(() => {
  coverRight.classList.add('turn');
}, 2100)

setTimeout(() => {
  coverRight.style.zIndex = -1;
}, 2800)

//opening animation (page left or profile page animation)
setTimeout(() => {
  pageLeft.style.zIndex = 20;
}, 3200)


//opening animation (all page right animation)

pages.forEach((_, index) => {
  setTimeout(() => {
    reverseIndex();
    pages[pageNumber].classList.remove('turn');

    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].style.zIndex = 10 + index;

    }, 500)
  }, (index + 1) * 200 + 2100)
})


// ------------------Google Contact Form Script-------------//

const scriptURL = 'https://script.google.com/macros/s/AKfycbzWHMIfZqIOh20kH98F_On52vBx92iAvQNhpGi-Jxf-4pIBuKrHIFQYeSzFQkzisS28/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {
msg.innerHTML = "We have received your message! "
setTimeout (function(){
    msg.innerHTML = ""
    form.reset()
}, 5000)
}

)
.catch(error => console.error('Error!', error.message))
}
)



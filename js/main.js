gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);


const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 1.5,
});

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

lenis.on('scroll', ScrollTrigger.update);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    if (targetId.length > 1) {
      e.preventDefault();
      lenis.scrollTo(targetId, {
        offset: -80,
        duration: 1.5,
      });
    }
  });
});





/*gsap.registerPlugin(MotionPathPlugin);

const tl=gsap.timeline();

tl.to(".dot-jump", {
    duration:3,
    motionPath: {
        path:"#jumpPath",
        align:"#jumpPath",
        alignOrigin: [0.5,0.5]
    },
    ease:"power1.inOut"
}, "+=0.5");

tl.to(".dot-jump", {
    scaleX:1.3,
    scaleY:0.7,
    duration:0.08,
    yoyo:true,
    repeat:1
});
tl.to(".hero-wave",{
    y:0,
    scaleY:1,
    duration:1.8,
    ease:"power4.out"
});


tl.to(".hero-wrapper",{
    scale:1,
    duration:3
},"-=1.8");

tl.to(".logo-wrapper",{
    opacity:1,
    y:0,
    filter:"blur(0px)",
    duration:1.2
},"-=2.2");


tl.to(".nav-list li",{
    opacity:1,
    y:0,
    stagger:0.05,
    duration:.8
},"-=2");

tl.to(".search-btn",{
    opacity:1,
    y:0,
    duration:.8
},"<");


tl.to(".line",{
    opacity:1,
    y:0,
    scaleY:1,
    filter:"blur(0px)",
    stagger:.18,
    duration:1.8
},"-=1.5");

tl.to(".hero-line path",{
    strokeDashoffset:0,
    duration:2.5,
    ease:"power2.out"
},"-=1.6");

tl.to(".dot-jump",{
    opacity:1,
    duration:.2
},"<");

tl.to(".dot-jump",{
    duration:2.2,
    motionPath:{
        path:"#jumpPath",
        align:"#jumpPath",
        alignOrigin:[0.5,0.5]
    },
    ease:"power1.inOut"
},"<"); */


gsap.registerPlugin(MotionPathPlugin);

gsap.to(".dot-jump", {
    duration:4,
    ease:"power1.inOut",

    motionPath: {
        path:"#jumpPath",
        align:"#jumpPath",
        autoRotate:false,
        alignOrigin: [0.5,0.5]
    }
});

const tl=gsap.timeline();

tl.to(".dot-jump", {
    duration:5,
    motionPath: {
        path:"#jumpPath",
        align:"#jumpPath"
    }
});

tl.to(".dot-jump", {
    scaleX:1.3,
    scaleY:0.7,
    duration:0.08,
    yoyo:true,
    repeat:1
});

tl.to(".hero-wave",{
    y:0,
    scaleY:1,
    duration:1.8,
    ease:"power4.out"
});


tl.to(".hero-wrapper",{
    scale:1,
    duration:3
},"-=1.8");

tl.to(".logo-wrapper",{
    opacity:1,
    y:0,
    filter:"blur(0px)",
    duration:1.2
},"-=2.2");


tl.to(".nav-list li",{
    opacity:1,
    y:0,
    stagger:0.05,
    duration:.8
},"-=2");

tl.to(".search-btn",{
    opacity:1,
    y:0,
    duration:.8
},"<");








/*
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".section").forEach((section) => {

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
    }
  });

  tl.from(section.querySelectorAll("h1, h2"), {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
  });

  tl.from(section.querySelectorAll("p"), {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.05,
    ease: "power3.out"
  }, "-=0.6");

  tl.from(section.querySelectorAll("img"), {
    scale: 1.2,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  }, "-=0.8");

});
gsap.to(window, {
  scrollTrigger: {
    scrub: 1
  }
});
const scrollbar = Scrollbar.init(document.body, {
  damping: 0.08,
});

*/

// ---------- SCROLL REVEALS  ----------

const textReveals = gsap.utils.toArray(
  '.section-header h2, .section-header p, .taste-content h2, .taste-content p, .ingredients-content h2, .ingredients-content p, .story-content h2, .story-content p'
);

textReveals.forEach(el => {
  gsap.set(el, { clipPath: 'inset(0 0 100% 0)', y: 30 });
  gsap.to(el, {
    clipPath: 'inset(0 0 0% 0)',
    y: 0,
    duration: 1.1,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    }
  });
});

gsap.utils.toArray('.taste-image, .ingredients-image').forEach(wrapper => {
  const img = wrapper.querySelector('img');
  gsap.set(wrapper, { overflow: 'hidden' });
  gsap.set(img, { clipPath: 'inset(0 0 0 100%)', scale: 1.15 });
  gsap.to(img, {
    clipPath: 'inset(0 0 0 0%)',
    scale: 1,
    duration: 1.4,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: wrapper,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
});

ScrollTrigger.batch('.seller-card', {
  start: 'top 88%',
  onEnter: batch => {
    gsap.fromTo(batch,
      { clipPath: 'inset(0 0 100% 0)', y: 60 },
      { clipPath: 'inset(0 0 0% 0)', y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12 }
    );
  },
  onLeaveBack: batch => {
    gsap.set(batch, { clipPath: 'inset(0 0 100% 0)', y: 60 });
  }
});

ScrollTrigger.batch('.stat-card', {
  start: 'top 90%',
  onEnter: batch => {
    gsap.fromTo(batch,
      { clipPath: 'inset(0 100% 0 0)' },
      { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power3.out', stagger: 0.1 }
    );
  }
});

ScrollTrigger.batch('.footer-column', {
  start: 'top 95%',
  onEnter: batch => {
    gsap.fromTo(batch, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power2.out' });
  }
});



/************************/

const circumference = 408.4;
document.querySelectorAll('.stat-card').forEach(card => {
    const target = parseInt(card.dataset.count, 10);
    const counterEL = card.querySelector('.counter');
    const circle = card.querySelector('.circle-progress');

    const state = { value : 0};

    gsap.to(state, {
        value: 1,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    onUpdate: () => {
        counterEL.textContent= Math.round(state.value * target);
        circle.style.strokeDashoffset = circumference * (1 - state.value);
    },
    onReverseComplete: () => {
        counterEL.textContent = 0;
        circle.computedStyleMap.strokeDashoffset = circumference;
    }
})
})

/* *********************************************** */
 /* SEARCH BUTTON */

const searchBtn = document.querySelector('.search-btn');
const searchField = document.querySelector('.search-field');
const searchClose = document.querySelector('.search-close');
const searchInput = document.querySelector('.search');

function openSearch() {
  searchField.classList.add('active');
  searchInput.focus();
}

function closeSearch() {
  searchField.classList.remove('active');
  searchInput.value = '';
}

searchBtn.addEventListener('click', openSearch);
searchClose.addEventListener('click', closeSearch);

document.addEventListener('click', (e) => {
  if (searchField.classList.contains('active') && !e.target.closest('.search-wrapper')) {
    closeSearch();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSearch();
})

/************************************* */

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navbar.classList.toggle("active");
});

document.querySelectorAll(".nav-list a").forEach(link => {
    link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navbar.classList.remove("active");
    });
});


/************************************************************ */

/* *********************************************** */


const sellersSwiper = new Swiper('.sellers-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 1.15, 
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1025: {
      enabled: false, 
    },
  },
});
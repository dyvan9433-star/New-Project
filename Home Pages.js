const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Dark mode toggle
    document.getElementById("toggleMode").onclick = function () {
      document.body.classList.toggle("dark");
    }


    // interactive page
    



     // Scroll Animation
        const texts = document.querySelectorAll('.text');

        window.addEventListener('scroll', () => {
            texts.forEach(text => {
                const rect = text.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    text.classList.add('show');
                }
            });
        });


// Register plugin
gsap.registerPlugin(ScrollTrigger);

// Card animation
gsap.to(".card", {
  scrollTrigger: {
    trigger: ".grid",
    start: "top 80%",
    toggleActions: "play none none reset"
  },
  opacity: 1,
  y: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out"
});

//  box
const boxes = document.querySelectorAll('.box');

  function showBoxes() {
    const triggerBottom = window.innerHeight * 0.85;

    boxes.forEach((box, index) => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        box.classList.add('show');
      }
    });
  }

  // assign left/right
  boxes.forEach((box, index) => {
    if (index % 2 === 0) {
      box.classList.add('left');
    } else {
      box.classList.add('right');
    }
  });

  window.addEventListener('scroll', showBoxes);
  showBoxes();
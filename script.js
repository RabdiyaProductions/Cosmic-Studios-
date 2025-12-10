// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
        });
        }

        // Year in footer
        const yearEl = document.getElementById("year");
        if (yearEl) {
          yearEl.textContent = new Date().getFullYear();
          }

          // Contact form fake submit
          const contactForm = document.getElementById("contactForm");
          const formMessage = document.getElementById("formMessage");

          if (contactForm && formMessage) {
            contactForm.addEventListener("submit", (e) => {
                e.preventDefault();
                    formMessage.textContent =
                          "Thanks for reaching out. This is a demo only – form submissions are not yet wired up.";
                              contactForm.reset();
                                });
                                }

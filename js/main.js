(function () {
  document.documentElement.classList.add("js");

  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  var nav = document.querySelector(".site-nav");
  var navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  var sections = document.querySelectorAll("main section[id]");
  var reveals = document.querySelectorAll(".reveal");
  var backToTop = document.querySelector(".back-to-top");
  var quoteLayer = document.querySelector(".quote-parallax");
  var faqButtons = document.querySelectorAll(".faq-question");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setOpen(open) {
    if (!toggle || !links) {
      return;
    }
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    links.classList.toggle("is-open", open);
  }

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    navAnchors.forEach(function (anchor) {
      anchor.addEventListener("click", function () {
        setOpen(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    });
  }

  function onScroll() {
    if (nav) {
      nav.classList.toggle("is-scrolled", window.scrollY > 12);
    }
    if (backToTop) {
      backToTop.classList.toggle("is-visible", window.scrollY > 480);
    }
    if (quoteLayer && !reduceMotion) {
      var rect = quoteLayer.parentElement.getBoundingClientRect();
      var offset = (window.innerHeight - rect.top) * 0.08;
      quoteLayer.style.transform = "translate3d(0," + offset + "px,0)";
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  faqButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var item = button.closest(".faq-item");
      var answer = item.querySelector(".faq-answer");
      var open = button.getAttribute("aria-expanded") === "true";
      faqButtons.forEach(function (other) {
        other.setAttribute("aria-expanded", "false");
        other.querySelector("span").textContent = "+";
        other.closest(".faq-item").querySelector(".faq-answer").hidden = true;
      });
      if (!open) {
        button.setAttribute("aria-expanded", "true");
        button.querySelector("span").textContent = "–";
        answer.hidden = false;
      }
    });
  });

  if (!("IntersectionObserver" in window)) {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  if (reveals.length) {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  if (sections.length && navAnchors.length) {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }
          var id = entry.target.id;
          navAnchors.forEach(function (anchor) {
            var match = anchor.getAttribute("href") === "#" + id;
            if (match) {
              anchor.setAttribute("aria-current", "true");
            } else {
              anchor.removeAttribute("aria-current");
            }
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }
})();

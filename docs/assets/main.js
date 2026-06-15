/* Il Gusto — light interactions: sticky header, mobile nav, scroll reveal, lightbox */
(function () {
  "use strict";

  // Sticky header state
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    // Backdrop element for tap-outside-to-close
    var backdrop = document.createElement("div");
    backdrop.className = "nav-backdrop";
    document.body.appendChild(backdrop);

    function openNav() {
      links.classList.add("open");
      toggle.classList.add("open");
      backdrop.classList.add("show");
      document.body.classList.add("nav-locked");
      toggle.setAttribute("aria-expanded", "true");
    }
    function closeNav() {
      links.classList.remove("open");
      toggle.classList.remove("open");
      backdrop.classList.remove("show");
      document.body.classList.remove("nav-locked");
      toggle.setAttribute("aria-expanded", "false");
    }
    function toggleNav() {
      links.classList.contains("open") ? closeNav() : openNav();
    }

    toggle.addEventListener("click", toggleNav);
    backdrop.addEventListener("click", closeNav);
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeNav();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });
    // Reset if resized back to desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth > 680) closeNav();
    });
  }

  // Scroll reveal
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // Lightbox for gallery
  var box = document.querySelector(".lightbox");
  if (box) {
    var boxImg = box.querySelector("img");
    document.querySelectorAll("[data-lightbox]").forEach(function (img) {
      img.addEventListener("click", function () {
        boxImg.src = img.currentSrc || img.src;
        boxImg.alt = img.alt;
        box.classList.add("open");
      });
    });
    box.addEventListener("click", function () { box.classList.remove("open"); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") box.classList.remove("open");
    });
  }

  // Footer year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

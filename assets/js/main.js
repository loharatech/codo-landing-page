(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  // Mobile navigation
  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    toggle.addEventListener('click', function () {
      setOpen(!nav.classList.contains('is-open'));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); toggle.focus(); }
    });
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('is-open') && !header.contains(e.target)) setOpen(false);
    });
  }

  // Header shadow once the page scrolls
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Reveal sections as they enter the viewport
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Highlight the nav link for the section in view
  var links = Array.prototype.slice.call(document.querySelectorAll('.site-nav ul a[href^="#"]'));
  var sections = links.map(function (a) { return document.querySelector(a.getAttribute('href')); }).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    var active = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id); });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(function (s) { active.observe(s); });
  }

  // Copyright year
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();

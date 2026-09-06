// Progressive enhancement: anchors work without JavaScript.
// Match anchor clearance to the actual header height, including wrapped links.
(() => {
  const header = document.querySelector('.site-header');
  const links = [...document.querySelectorAll('.nav-items li:not([hidden]) a[href^="#"]')];
  const sections = links.map(link => document.querySelector(link.hash));
  if (!header || !sections.length || sections.some(section => !section)) return;

  function update() {
    const sticky = getComputedStyle(header).position === 'sticky';
    const clearance = sticky ? header.getBoundingClientRect().height + 24 : 24;
    const value = `${clearance}px`;
    if (document.documentElement.style.getPropertyValue('--anchor-clearance') !== value) {
      document.documentElement.style.setProperty('--anchor-clearance', value);
    }
    let active = -1;
    sections.forEach((section, index) => {
      if (section.getBoundingClientRect().top <= clearance + 60) active = index;
    });
    if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 3) {
      active = sections.length - 1;
    }
    // Near the page end, a short section may not reach the top of the viewport.
    // Keep its clicked anchor current while that heading is still visible.
    const anchored = links.findIndex(link => link.hash === window.location.hash);
    if (anchored !== -1) {
      const top = sections[anchored].getBoundingClientRect().top;
      if (top >= clearance - 1 && top < window.innerHeight) active = anchored;
    }
    links.forEach((link, index) => {
      if (index === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  let scheduled = false;
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => { scheduled = false; update(); });
  }
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  window.addEventListener('hashchange', schedule);
  if ('ResizeObserver' in window) new ResizeObserver(schedule).observe(header);
  update();
})();

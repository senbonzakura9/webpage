document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (btn && nav) {
    btn.addEventListener('click', () => nav.classList.toggle('open'));
  }
});

// === Vanta Birds Background (global) ===
(function(){
  function startVanta(){
    if (!window.VANTA) return;
    try { window.__vanta && window.__vanta.destroy && window.__vanta.destroy(); } catch(e){}
    window.__vanta = window.VANTA.BIRDS({
      el: "body",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundAlpha: 0.0,
      color1: 0x1b28d4,
      color2: 0xd20404,
      colorMode: "lerp"
    });
  }
  if (document.readyState === "complete") {
    startVanta();
  } else {
    window.addEventListener("load", startVanta);
  }
})();

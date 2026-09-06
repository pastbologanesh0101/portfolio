// Footer year.
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- custom cursor (smooth lag) ----------
(function customCursor() {
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!fine) return;

  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener("pointermove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    if (reduced) {
      ring.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    }
    if (!document.body.classList.contains("cursor-ready")) {
      document.body.classList.add("cursor-ready");
    }
  });

  if (!reduced) {
    const ease = 0.14; // lower = slower, dreamier trail
    const tick = () => {
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(tick);
    };
    tick();
  }

  // Grow the ring over interactive elements.
  document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
    el.addEventListener("pointerenter", () => ring.classList.add("hover"));
    el.addEventListener("pointerleave", () => ring.classList.remove("hover"));
  });

  document.addEventListener("mouseleave", () =>
    document.body.classList.remove("cursor-ready")
  );
  document.addEventListener("mouseenter", () =>
    document.body.classList.add("cursor-ready")
  );
})();

// ---------- scroll reveal ----------
(function scrollReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((el) => io.observe(el));
})();

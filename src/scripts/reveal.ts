// Single IntersectionObserver that adds `.in` to every `.reveal` element
// when it enters the viewport. Stagger is handled via CSS transition-delay
// on data-index. Disabled automatically when prefers-reduced-motion is active
// (global.css sets opacity:1 and no transform on .reveal, so elements are
// immediately visible without this script doing anything).

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
    observer.observe(el);
  });
} else {
  // Immediately mark all reveal elements as visible
  document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
    el.classList.add('in');
  });
}

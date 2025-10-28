/**
 * Parallax Effect Handler
 * Creates a parallax scrolling effect where background moves slower than foreground content
 */

interface ParallaxElement {
  element: HTMLElement;
  speedMultiplier: number;
  initialY: number;
}

let parallaxElements: ParallaxElement[] = [];
let ticking = false;
let lastScrollY = 0;
let heroSection: HTMLElement | null = null;

/**
 * Initialize parallax effect for hero section
 * Respects user's prefers-reduced-motion preference
 */
export function initParallax() {
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    console.log('⚙️ Parallax disabled (prefers-reduced-motion)');
    return;
  }

  heroSection = document.getElementById('hero');
  if (!heroSection) {
    console.warn('Hero section not found');
    return;
  }

  // Get all parallax elements
  const bgGradient = heroSection.querySelector(
    '[data-parallax="bg-gradient"]'
  ) as HTMLElement;
  const bgGrid = heroSection.querySelector(
    '[data-parallax="bg-grid"]'
  ) as HTMLElement;

  // Get the content container (the z-10 relative div that contains terminal and text)
  const contentContainer = heroSection.querySelector(
    '.relative.z-10'
  ) as HTMLElement;

  // Register parallax elements with their speed multipliers
  // Option 1: Traditional Parallax - Background stays back, content moves forward
  if (bgGradient) {
    parallaxElements.push({
      element: bgGradient,
      speedMultiplier: 0.2, // Very slow background - stays far back
      initialY: 0,
    });
  }

  if (bgGrid) {
    parallaxElements.push({
      element: bgGrid,
      speedMultiplier: 0.25, // Grid moves slightly faster than gradient
      initialY: 0,
    });
  }

  if (contentContainer) {
    parallaxElements.push({
      element: contentContainer,
      speedMultiplier: 0.8, // Content moves much faster for clear depth effect
      initialY: 0,
    });
  }

  // Add scroll event listener with requestAnimationFrame for performance
  window.addEventListener('scroll', handleScroll, { passive: true });

  console.log('✅ Parallax effect initialized');
}

/**
 * Handle scroll event with requestAnimationFrame for smooth performance
 */
function handleScroll() {
  lastScrollY = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
}

/**
 * Update parallax transforms for all registered elements
 */
function updateParallax() {
  if (!heroSection) {
    ticking = false;
    return;
  }

  // Get hero section position relative to viewport
  const heroRect = heroSection.getBoundingClientRect();
  const heroTop = heroRect.top;
  const heroBottom = heroRect.bottom;

  // Only apply parallax when hero is visible in viewport
  const isHeroVisible = heroBottom > 0 && heroTop < window.innerHeight;

  parallaxElements.forEach(({ element, speedMultiplier }) => {
    if (isHeroVisible) {
      // Calculate parallax offset based on scroll position and element position
      // Negative multiplier makes elements move up when scrolling down (correct parallax effect)
      const offset = lastScrollY * speedMultiplier * -1;
      element.style.transform = `translateY(${offset}px)`;
    } else {
      // Reset when not visible for performance
      element.style.transform = 'translateY(0px)';
    }
  });

  ticking = false;
}

/**
 * Clean up parallax effect
 */
export function destroyParallax() {
  window.removeEventListener('scroll', handleScroll);
  parallaxElements = [];
  ticking = false;
}

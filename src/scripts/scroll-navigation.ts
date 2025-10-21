/**
 * Enhanced Scroll Navigation
 * Enables smooth scrolling with mouse wheel, arrow keys, and keyboard shortcuts
 */

// Keyboard scroll navigation
export function initKeyboardScroll() {
  let isScrolling = false;

  document.addEventListener('keydown', (event: KeyboardEvent) => {
    // Don't interfere if user is typing in an input/textarea
    const target = event.target as HTMLElement;
    if (
      target.tagName === 'INPUT' ||
      target.tagName === 'TEXTAREA' ||
      target.isContentEditable
    ) {
      return;
    }

    const scrollAmount = 100; // px per key press
    const pageScrollAmount = window.innerHeight * 0.8; // 80% of viewport height

    let shouldScroll = false;
    let scrollDistance = 0;

    switch (event.key) {
      case 'ArrowDown':
        scrollDistance = scrollAmount;
        shouldScroll = true;
        break;

      case 'ArrowUp':
        scrollDistance = -scrollAmount;
        shouldScroll = true;
        break;

      case 'PageDown':
        scrollDistance = pageScrollAmount;
        shouldScroll = true;
        break;

      case 'PageUp':
        scrollDistance = -pageScrollAmount;
        shouldScroll = true;
        break;

      case ' ': // Spacebar
        // Shift + Space = scroll up, Space = scroll down
        scrollDistance = event.shiftKey ? -pageScrollAmount : pageScrollAmount;
        shouldScroll = true;
        event.preventDefault(); // Prevent default spacebar behavior
        break;

      case 'Home':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        event.preventDefault();
        return;

      case 'End':
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        event.preventDefault();
        return;
    }

    if (shouldScroll && !isScrolling) {
      event.preventDefault();
      isScrolling = true;

      window.scrollBy({
        top: scrollDistance,
        behavior: 'smooth',
      });

      // Reset scrolling flag after animation
      setTimeout(() => {
        isScrolling = false;
      }, 100);
    }
  });
}

// Section navigation with keyboard shortcuts
export function initSectionNavigation() {
  const sections = [
    'hero',
    'problem',
    'vision',
    'features',
    'demo',
    'community',
    'contribute',
    'getting-started',
  ];

  let currentSectionIndex = 0;

  document.addEventListener('keydown', (event: KeyboardEvent) => {
    // Don't interfere if user is typing
    const target = event.target as HTMLElement;
    if (
      target.tagName === 'INPUT' ||
      target.tagName === 'TEXTAREA' ||
      target.isContentEditable
    ) {
      return;
    }

    // Ctrl/Cmd + Arrow Down = Next section
    if ((event.ctrlKey || event.metaKey) && event.key === 'ArrowDown') {
      event.preventDefault();
      currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
      scrollToSection(sections[currentSectionIndex]);
    }

    // Ctrl/Cmd + Arrow Up = Previous section
    if ((event.ctrlKey || event.metaKey) && event.key === 'ArrowUp') {
      event.preventDefault();
      currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
      scrollToSection(sections[currentSectionIndex]);
    }
  });

  // Update current section based on scroll position
  const updateCurrentSection = () => {
    const scrollPosition = window.scrollY + 200; // Offset for nav height

    sections.forEach((sectionId, index) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSectionIndex = index;
        }
      }
    });
  };

  window.addEventListener('scroll', updateCurrentSection);
  updateCurrentSection(); // Initial check
}

// Helper function to scroll to a section
function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    const navHeight = 64; // Height of sticky nav
    const targetPosition = section.offsetTop - navHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  }
}

// Smooth mouse wheel scrolling enhancement
export function initSmoothMouseScroll() {
  // Most modern browsers already handle this well,
  // but we can enhance it for better UX
  let isWheelScrolling = false;

  window.addEventListener(
    'wheel',
    (event: WheelEvent) => {
      // Don't interfere with horizontal scrolling
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        return;
      }

      // Let the browser handle natural scrolling
      // This ensures compatibility with all mouse/trackpad configurations
      isWheelScrolling = true;

      setTimeout(() => {
        isWheelScrolling = false;
      }, 100);
    },
    { passive: true }
  );
}

// Initialize all scroll navigation features
export function initScrollNavigation() {
  initKeyboardScroll();
  initSectionNavigation();
  initSmoothMouseScroll();

  console.log('✅ Scroll navigation initialized');
  console.log('📋 Keyboard shortcuts:');
  console.log('  - Arrow Up/Down: Scroll page');
  console.log('  - Page Up/Down: Scroll by viewport');
  console.log('  - Space: Scroll down (Shift+Space: up)');
  console.log('  - Home/End: Jump to top/bottom');
  console.log('  - Ctrl/Cmd + Arrow Up/Down: Jump between sections');
}

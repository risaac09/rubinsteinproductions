import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const isMobile = () => window.innerWidth < 768

/**
 * Mark elements as ready (visible) before animating.
 * Elements have visibility:hidden in CSS to prevent FOUC.
 */
export function markReady(targets) {
  gsap.set(targets, { visibility: 'visible' })
}

/**
 * Simple fade-in + translateY trigger.
 * @param {string|Element} targets - CSS selector or element(s)
 * @param {object} opts - ScrollTrigger options override
 */
export function fadeInUp(targets, opts = {}) {
  if (prefersReducedMotion()) {
    markReady(targets)
    return
  }

  const elements = gsap.utils.toArray(targets)
  if (!elements.length) return

  markReady(elements)

  gsap.fromTo(
    elements,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: elements[0],
        start: 'top 85%',
        toggleActions: 'play none none none',
        ...opts,
      },
    }
  )
}

/**
 * Staggered entrance for a list of cards/items.
 */
export function staggerEntrance(container, itemSelector, opts = {}) {
  if (prefersReducedMotion()) {
    const items = gsap.utils.toArray(itemSelector)
    markReady(items)
    return
  }

  const items = gsap.utils.toArray(
    typeof itemSelector === 'string'
      ? container.querySelectorAll(itemSelector)
      : itemSelector
  )
  if (!items.length) return

  markReady(items)

  gsap.fromTo(
    items,
    { opacity: 0, y: 60, scale: 0.95 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: container,
        start: 'top 75%',
        toggleActions: 'play none none none',
        ...opts,
      },
    }
  )
}

/**
 * Slide-in from a direction (left or right).
 */
export function slideIn(target, direction = 'left', opts = {}) {
  if (prefersReducedMotion()) {
    markReady(target)
    return
  }

  markReady(target)

  const x = direction === 'left' ? -50 : 50

  gsap.fromTo(
    target,
    { opacity: 0, x },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: target,
        start: 'top 80%',
        toggleActions: 'play none none none',
        ...opts,
      },
    }
  )
}

/**
 * Wrap each line of text in a .line-wrap span for per-line reveals.
 * Returns the created spans for cleanup.
 */
export function splitLines(element) {
  const text = element.innerText
  const words = text.split(' ')
  // Approximate line breaks by chunking words into groups
  // A real SplitText would use bounding rects; this is a lightweight version
  element.innerHTML = ''
  const lines = []

  // Temporary measure to find line breaks
  const temp = document.createElement('span')
  temp.style.position = 'absolute'
  temp.style.visibility = 'hidden'
  temp.style.whiteSpace = 'nowrap'
  temp.style.font = window.getComputedStyle(element).font
  document.body.appendChild(temp)

  let currentLine = []
  let lineWidth = 0
  const maxWidth = element.clientWidth || 600

  words.forEach((word, i) => {
    temp.textContent = (currentLine.join(' ') + (currentLine.length ? ' ' : '') + word)
    if (temp.offsetWidth > maxWidth && currentLine.length > 0) {
      lines.push(currentLine.join(' '))
      currentLine = [word]
    } else {
      currentLine.push(word)
    }
    if (i === words.length - 1 && currentLine.length) {
      lines.push(currentLine.join(' '))
    }
  })

  document.body.removeChild(temp)

  const spans = lines.map(line => {
    const wrap = document.createElement('span')
    wrap.className = 'line-wrap'
    const inner = document.createElement('span')
    inner.className = 'line-inner'
    inner.textContent = line
    wrap.appendChild(inner)
    element.appendChild(wrap)
    return inner
  })

  return spans
}

/**
 * Text reveal: lines slide up from clip into view.
 */
export function textReveal(target, opts = {}) {
  if (prefersReducedMotion()) {
    markReady(target)
    return
  }

  const el = typeof target === 'string' ? document.querySelector(target) : target
  if (!el) return

  markReady(el)

  const lines = splitLines(el)

  gsap.fromTo(
    lines,
    { y: '105%', opacity: 0 },
    {
      y: '0%',
      opacity: 1,
      duration: 0.75,
      ease: 'power3.out',
      stagger: 0.08,
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none none',
        ...opts,
      },
    }
  )
}

/**
 * Horizontal line draw: width 0% → 100%.
 */
export function drawLine(target, opts = {}) {
  if (prefersReducedMotion()) {
    gsap.set(target, { scaleX: 1, transformOrigin: 'left center' })
    return
  }

  gsap.fromTo(
    target,
    { scaleX: 0, transformOrigin: 'left center' },
    {
      scaleX: 1,
      duration: 0.8,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: target,
        start: 'top 85%',
        toggleActions: 'play none none none',
        ...opts,
      },
    }
  )
}

/**
 * Pin a section while an animation plays, then release.
 * Returns the ScrollTrigger instance, or null when reduced motion is preferred.
 */
export function pinSection(trigger, opts = {}) {
  if (prefersReducedMotion()) return null
  return ScrollTrigger.create({
    trigger,
    start: 'top top',
    end: opts.end || '+=150%',
    pin: true,
    pinSpacing: true,
    anticipatePin: 1,
    ...opts,
  })
}

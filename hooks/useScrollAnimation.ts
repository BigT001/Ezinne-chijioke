'use client'

import { useEffect, useRef, useState } from 'react'

export const useScrollAnimation = <T extends HTMLElement>() => {
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Reset animation when element goes out of view
        if (!entry.isIntersecting && isInView) {
          setIsInView(false)
        }
        // Trigger animation when element comes into view
        if (entry.isIntersecting && !isInView) {
          setIsInView(true)
        }
      },
      {
        threshold: 0.1, // Trigger when even 10% of the element is visible
        rootMargin: '50px', // Start animation slightly before element comes into view
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [isInView])

  return { ref, isInView }
}
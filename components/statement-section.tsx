"use client"

import { useEffect, useRef, useState } from "react"

export function StatementSection() {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative clip-asymmetric"
      style={{ backgroundColor: "hsl(350 45% 18%)" }}
    >
      <div className="flex items-center justify-center min-h-[70vh] md:min-h-[80vh] px-6 md:px-12 py-32 md:py-44">
        <div
          className={`text-center max-w-5xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-[0.98]"
          }`}
        >
          <p
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[-0.03em] leading-[1.1]"
            style={{ color: "hsl(36 20% 88%)" }}
          >
            THE MORE YOU TRY TO FIX ME,
            <br />
            THE MORE YOU MAKE IT WORSE.
          </p>
          <p
            className="mt-14 md:mt-20 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-[-0.02em] leading-[1.2]"
            style={{ color: "hsl(36 20% 88% / 0.6)" }}
          >
            COULD YOU LOVE ME AT MY WORST?
            <br />
            COULD YOU LOVE ME EVEN THOUGH IT HURTS?
          </p>
        </div>
      </div>
    </section>
  )
}

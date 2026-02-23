"use client"

import { useEffect, useRef, useState } from "react"

export function ContactSection() {
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
    <footer
      ref={ref}
      className="bg-[#0B0B0B] py-32 md:py-44 lg:py-56 px-6 md:px-12"
    >
      <div
        className={`flex flex-col items-center text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-foreground text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[-0.02em]">
          LOVING BLACKBEAR SINCE 2016.
        </p>

        <div className="mt-20 md:mt-28 w-8 h-[1px] bg-border" />
      </div>
    </footer>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"

export function PrettyLiesSection() {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative clip-diagonal-top"
      style={{ backgroundColor: "hsl(36 25% 85%)" }}
    >
      <div className="px-6 md:px-12 lg:px-20 py-32 md:py-44 lg:py-56">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left: Large artistic image */}
          <div
            className={`flex-1 w-full transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <img
              src="/images/pretty-lies.png"
              alt="Pretty Lies"
              className="w-full h-auto object-cover aspect-[3/4]"
            />
          </div>

          {/* Right: Editorial typography */}
          <div
            className={`flex-1 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[-0.03em] leading-[1.15]"
              style={{ color: "hsl(0 0% 8%)" }}
            >
              TELL ME PRETTY LIES
              <br />
              LOOK ME IN THE FACE
              <br />
              TELL ME THAT YOU LOVE ME
              <br />
              EVEN IF {"IT'S"} FAKE
            </p>
            <div className="mt-10 md:mt-14">
              <p
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[-0.02em] leading-[1.2]"
                style={{ color: "hsl(0 0% 25%)" }}
              >
                {"'CAUSE I DON'T FUCKING"}
                <br />
                CARE AT ALL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"

export function ConfessionSection() {
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
      id="confession"
      ref={ref}
      className="relative clip-diagonal-top"
      style={{ backgroundColor: "hsl(36 25% 85%)" }}
    >
      <div className="px-6 md:px-12 lg:px-20 py-32 md:py-44 lg:py-56">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
          
          {/* Left: Editorial text */}
          <div
            className={`flex-1 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[-0.03em] leading-[1.1]"
              style={{ color: "hsl(0 0% 8%)" }}
            >
              {"I DON'T WANNA KNOW"}
              <br />
              RIGHT NOW.
              <br />
              {"BUT MAYBE I'M THE WORST,"}
              <br />
              THE WORST YOU EVER HAD.
            </p>

            <div className="mt-10 md:mt-14">
              <p
                className="text-base md:text-lg lg:text-xl tracking-[0.02em] leading-relaxed"
                style={{ color: "hsl(0 0% 25%)" }}
              >
                Every melody is a memory.
                <br />
                {"Every hook is a mistake I'd repeat."}
              </p>
            </div>
          </div>

          {/* Right: Video */}
          <div
            className={`flex-1 w-full transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
              
              {/* 🎬 Video background */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/confession-video.mp4" type="video/mp4" />
              </video>

              {/* Cinematic overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Play icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-12 h-12 border flex items-center justify-center backdrop-blur-sm bg-white/10"
                  style={{
                    borderColor: "hsl(36 20% 88% / 0.4)",
                  }}
                >
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 8.134a1 1 0 010 1.732l-13.5 7.794A1 1 0 010 16.794V1.206A1 1 0 011.5.34L15 8.134z"
                      fill="hsl(36, 20%, 88%)"
                      fillOpacity="0.6"
                    />
                  </svg>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
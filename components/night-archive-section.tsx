"use client"

import { useEffect, useRef, useState } from "react"

export function NightArchiveSection() {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative bg-[#0B0B0B] py-32 md:py-44 lg:py-56 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Top quote */}
        <div
          className={`mb-20 md:mb-28 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-foreground text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[-0.03em] leading-[1.1]">
            {"TELL YOU YOU'RE BEAUTIFUL,"}
            <br />
            THEN STAB YOU IN THE BACK.
          </h2>
          <div className="mt-6 mx-auto w-16 h-[1px] bg-[hsl(350,45%,25%)]" />
        </div>

        {/* Video Section */}
        <div
          className={`group w-full transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative aspect-video w-full overflow-hidden bg-black">
            
            {/* 🎬 Video background */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/second-video.mp4" type="video/mp4" />
            </video>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />

            {/* Play button visual */}
            <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-500">
              <div
                className="w-14 h-14 border flex items-center justify-center backdrop-blur-sm bg-white/5"
                style={{ borderColor: "hsl(36 20% 88% / 0.15)" }}
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
                    fillOpacity="0.4"
                  />
                </svg>
              </div>
            </div>

          </div>
        </div>

        {/* Lyrics text below video */}
        <div
          className={`mt-20 md:mt-28 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-foreground text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[-0.02em] leading-[1.2]">
            {"I'M NOT ALONE"}
            <br />
            {"IT'S JUST ME AND YOUR GHOST"}
          </p>
          <p className="mt-8 md:mt-12 text-muted-foreground text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[-0.02em] leading-[1.2]">
            {"AND THIS CRIPPLIN' DEPRESSION"}
            <br />
            I THOUGHT I LEARNED MY LESSON
          </p>
        </div>
      </div>
    </section>
  )
}
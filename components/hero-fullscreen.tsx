"use client"

import { useEffect, useRef, useState, useCallback } from "react"

export function HeroFullscreen() {
  const [mounted, setMounted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const fadeIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const fadeAudioIn = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0
    audio.play()

    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current)

    fadeIntervalRef.current = setInterval(() => {
      if (audio.volume < 0.95) {
        audio.volume = Math.min(audio.volume + 0.05, 1)
      } else {
        audio.volume = 1
        if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current)
      }
    }, 60)
  }, [])

  const fadeAudioOut = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current)

    fadeIntervalRef.current = setInterval(() => {
      if (audio.volume > 0.05) {
        audio.volume = Math.max(audio.volume - 0.05, 0)
      } else {
        audio.volume = 0
        audio.pause()
        if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current)
      }
    }, 60)
  }, [])

  const toggleMusic = useCallback(() => {
    if (isPlaying) {
      fadeAudioOut()
    } else {
      fadeAudioIn()
    }
    setIsPlaying((prev) => !prev)
  }, [isPlaying, fadeAudioIn, fadeAudioOut])

  useEffect(() => {
    return () => {
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current)
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0B0B0B]">
      {/* Hidden audio element */}
      <audio ref={audioRef} loop preload="none" className="hidden">
        <source src="/soundtrack.mp3" type="audio/mpeg" />
      </audio>

      {/* Layer 1: Full-screen background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
        style={{ height: "100vh", width: "100%" }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Layer 2: Dark overlay (40-60% opacity) */}
      <div className="absolute inset-0 z-[1] bg-[#0B0B0B]/50" />

      {/* Layer 3: Grain texture (above overlay, below text) */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      {/* Layer 4: Content on top */}
      <div className={`relative z-[3] flex flex-col items-center text-center px-6 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h1 className="text-foreground uppercase tracking-[-0.04em] leading-[0.85] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold">
          <span className="block animate-fade-in-up">ARE YOU IN LOVE</span>
          <span className="block animate-fade-in-up-delay-1">WITH ME</span>
          <span className="block animate-fade-in-up-delay-2">OR THE IDEA?</span>
        </h1>

        <div className="mt-10 md:mt-14 animate-fade-in-up-delay-2">
          <p className="text-foreground text-lg sm:text-xl md:text-2xl tracking-[0.08em] uppercase font-bold">
            {"WHO'S LOVING YOU?"}
          </p>
        </div>

        {/* Music toggle */}
        <div className="mt-12 md:mt-16 animate-fade-in-up-delay-3">
          <button
            onClick={toggleMusic}
            className="group relative text-muted-foreground text-[10px] md:text-xs tracking-[0.4em] uppercase transition-all duration-500 hover:text-foreground focus:outline-none focus-visible:text-foreground bg-transparent border-none cursor-pointer"
            aria-label={isPlaying ? "Pause soundtrack" : "Play soundtrack"}
          >
            <span className="relative">
              {isPlaying ? "PAUSE SOUNDTRACK" : "PLAY SOUNDTRACK"}
              <span className="absolute left-0 -bottom-1 w-0 h-[0.5px] bg-foreground transition-all duration-500 group-hover:w-full" />
            </span>
          </button>
        </div>

        <div className="mt-10 md:mt-12 animate-fade-in-up-delay-3">
          <a
            href="#confession"
            className="text-foreground text-xs tracking-[0.4em] uppercase hover:text-[hsl(350,45%,35%)] transition-colors duration-500 animate-subtle-pulse"
          >
            ENTER
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0B0B] to-transparent" />
    </section>
  )
}

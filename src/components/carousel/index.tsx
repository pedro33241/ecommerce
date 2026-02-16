"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CarouselProps {
    slides: {
        title: string
        subtitle: string
        description: string
        image: string
        bgColor?: string
    }[]
    autoPlay?: boolean
    interval?: number
}

export function Carousel({ slides, autoPlay = true, interval = 5000 }: CarouselProps) {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        if (!autoPlay) return
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, interval)
        return () => clearInterval(timer)
    }, [autoPlay, interval, slides.length])

    const goToSlide = useCallback((index: number) => setCurrentSlide(index), [])
    const goToPrevious = useCallback(() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length), [slides.length])
    const goToNext = useCallback(() => setCurrentSlide((prev) => (prev + 1) % slides.length), [slides.length])

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black">
            {/* Slides */}
            <div className="relative h-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={cn(
                            "absolute inset-0 transition-opacity duration-700 ease-in-out",
                            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                        )}
                        style={{
                            backgroundImage: `url(${slide.image || "/placeholder.svg"})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center 30%",
                            backgroundColor: slide.bgColor || "#000000"
                        }}
                    >
                        {/* Overlay escuro */}
                        <div className="absolute inset-0 bg-black/40" />

                        {/* Conteúdo */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
                            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 sm:mb-4 max-w-5xl leading-tight">
                                {slide.title}
                            </h2>
                            <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white font-semibold mb-3 sm:mb-6 max-w-4xl">
                                {slide.subtitle}
                            </p>
                            <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-white/90 max-w-2xl">
                                {slide.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Botões de navegação */}
            <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white z-10"
                onClick={goToPrevious}
            >
                <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white z-10"
                onClick={goToNext}
            >
                <ChevronRight className="h-6 w-6" />
            </Button>
        </div>
    )
}

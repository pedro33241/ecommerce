"use client";
import { useState, useEffect, memo, useCallback } from "react";
import { ArrowUp } from "lucide-react";

function BackToTopComponent() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = useCallback(() => {
        setIsVisible(window.scrollY > 300);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility, { passive: true });
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, [toggleVisibility]);

    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
            aria-label="Voltar ao topo"
        >
            <ArrowUp className="h-6 w-6" />
        </button>
    );
}

export const BackToTop = memo(BackToTopComponent);


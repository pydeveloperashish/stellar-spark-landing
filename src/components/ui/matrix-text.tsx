
"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LetterState {
    char: string;
    isMatrix: boolean;
    isSpace: boolean;
}

interface MatrixTextProps {
    text?: string;
    className?: string;
    initialDelay?: number;
    letterAnimationDuration?: number;
    letterInterval?: number;
    fontSize?: string;
}

export const MatrixText = ({
    text = "HelloWorld!",
    className,
    initialDelay = 500,
    letterAnimationDuration = 1200,
    letterInterval = 250,
    fontSize = "text-4xl md:text-6xl"
}: MatrixTextProps) => {
    const [letters, setLetters] = useState<LetterState[]>(() =>
        text.split("").map((char) => ({
            char,
            isMatrix: false,
            isSpace: char === " ",
        }))
    );
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const getRandomChar = useCallback(() => {
        const chars = "01";
        return chars.charAt(Math.floor(Math.random() * chars.length));
    }, []);

    const animateLetter = useCallback(
        (index: number) => {
            if (index >= text.length) return;

            requestAnimationFrame(() => {
                setLetters((prev) => {
                    const newLetters = [...prev];
                    if (!newLetters[index].isSpace) {
                        newLetters[index] = {
                            ...newLetters[index],
                            char: getRandomChar(),
                            isMatrix: true,
                        };
                    }
                    return newLetters;
                });

                setTimeout(() => {
                    setLetters((prev) => {
                        const newLetters = [...prev];
                        newLetters[index] = {
                            ...newLetters[index],
                            char: text[index],
                            isMatrix: false,
                        };
                        return newLetters;
                    });
                    
                    if (index === text.length - 1) {
                        setIsAnimationComplete(true);
                    }
                }, letterAnimationDuration);
            });
        },
        [getRandomChar, text, letterAnimationDuration]
    );

    const startAnimation = useCallback(() => {
        if (isAnimating) return;

        setIsAnimating(true);
        let currentIndex = 0;

        const animate = () => {
            if (currentIndex >= text.length) {
                setIsAnimating(false);
                return;
            }

            animateLetter(currentIndex);
            currentIndex++;
            setTimeout(animate, letterInterval);
        };

        animate();
    }, [animateLetter, text, isAnimating, letterInterval]);

    useEffect(() => {
        const timer = setTimeout(startAnimation, initialDelay);
        return () => clearTimeout(timer);
    }, [startAnimation, initialDelay]);

    useEffect(() => {
        setLetters(text.split("").map((char) => ({
            char,
            isMatrix: false,
            isSpace: char === " ",
        })));
        setIsAnimationComplete(false);
        setIsAnimating(false);
    }, [text]);

    const motionVariants = useMemo(
        () => ({
            matrix: {
                color: "#00ff00",
                textShadow: "0 2px 4px rgba(0, 255, 0, 0.5)",
            },
            normal: {
                color: "#ffffff",
                textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            },
        }),
        []
    );

    return (
        <div
            className={cn(
                "flex items-center justify-center text-white",
                className
            )}
            aria-label="Matrix text animation"
        >
            <div className="flex items-center justify-center">
                <div className="flex flex-wrap items-center justify-center">
                    {letters.map((letter, index) => (
                        <motion.div
                            key={`${index}-${letter.char}`}
                            className={cn("font-mono w-[1ch] text-center overflow-hidden", fontSize)}
                            initial="initial"
                            animate={letter.isMatrix ? "matrix" : "normal"}
                            variants={motionVariants}
                            transition={{
                                duration: 0.1,
                                ease: "easeInOut",
                            }}
                            style={{
                                display: "inline-block",
                                fontVariantNumeric: "tabular-nums",
                                textShadow: isAnimationComplete && !letter.isMatrix ? "0 0 10px rgba(255, 255, 255, 0.8)" : undefined,
                            }}
                        >
                            {letter.isSpace ? "\u00A0" : letter.char}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};


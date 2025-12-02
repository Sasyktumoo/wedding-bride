"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import TypewriterText from "./TypewriterText";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroProps {
  showIntro?: boolean;
}

export default function Hero({ showIntro = false }: HeroProps) {
  const [textStage, setTextStage] = useState(0);
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-br from-[#faf9f6] via-[#f5f4f1] to-[#faf9f6]">
      
      {/* Sparkling Gold Dots */}
      <div className="absolute inset-0">
        {/* Generate lots of sparkling dots */}
        {Array.from({ length: 80 }, (_, i) => ({
          top: `${Math.floor(Math.random() * 95) + 3}%`,
          left: `${Math.floor(Math.random() * 95) + 3}%`,
          size: [1, 1.5, 2][Math.floor(Math.random() * 3)],
          delay: Math.random() * 2,
          duration: 2 + Math.random() * 1.5,
        })).map((dot, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#d4af37]"
            style={{
              top: dot.top,
              left: dot.left,
              width: `${dot.size * 4}px`,
              height: `${dot.size * 4}px`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: dot.delay,
            }}
          />
        ))}
      </div>
      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial={showIntro ? { opacity: 0, y: 20 } : "hidden"}
        animate={showIntro ? { opacity: 1, y: 0 } : "visible"}
        transition={showIntro ? { duration: 1.5, delay: 0.5, ease: "easeOut" } : {}}
        className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl"
      >
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Text Content - Centered */}
          <div className="px-2 sm:px-0">
            {/* Invitation Title */}
            <motion.div 
              variants={!showIntro ? fadeInUp : undefined}
              initial={showIntro ? { opacity: 0 } : undefined}
              animate={showIntro ? { opacity: 1 } : undefined}
              transition={showIntro ? { delay: 1.0, duration: 0.5 } : undefined}
              className="mb-6 sm:mb-8"
            >
              {showIntro ? (
                <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-[#2c3e50] mb-0 font-semibold tracking-wider uppercase">
                  <TypewriterText 
                    text={t.hero.intro} 
                    delay={1000}
                    speed={80}
                    onComplete={() => setTextStage(1)}
                  />
                </h2>
              ) : (
                <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-[#2c3e50] mb-0 font-semibold tracking-wider uppercase">
                  {t.hero.intro}
                </h2>
              )}
            </motion.div>

            {/* Invitation Greeting */}
            {(!showIntro || textStage >= 1) && (
              <motion.div 
                variants={!showIntro ? fadeInUp : undefined}
                initial={showIntro ? { opacity: 0 } : undefined}
                animate={showIntro ? { opacity: 1 } : undefined}
                transition={showIntro ? { delay: 0.3, duration: 0.5 } : undefined}
                className="mb-4 sm:mb-6"
              >
                {showIntro ? (
                  <p className="heading-serif text-xl sm:text-2xl md:text-3xl font-medium text-[#2c3e50] mb-0 tracking-wide">
                    <TypewriterText 
                      text={t.hero.greeting} 
                      delay={300}
                      speed={80}
                      onComplete={() => setTextStage(2)}
                    />
                  </p>
                ) : (
                  <p className="heading-serif text-xl sm:text-2xl md:text-3xl font-medium text-[#2c3e50] mb-0 tracking-wide">
                    {t.hero.greeting}
                  </p>
                )}
              </motion.div>
            )}

            {/* Invitation Message */}
            {(!showIntro || textStage >= 2) && (
              <motion.div 
                variants={!showIntro ? fadeInUp : undefined}
                initial={showIntro ? { opacity: 0 } : undefined}
                animate={showIntro ? { opacity: 1 } : undefined}
                transition={showIntro ? { delay: 0.3, duration: 0.5 } : undefined}
                className="mb-4 sm:mb-6 md:mb-8"
              >
                {showIntro ? (
                  <p className="heading-serif text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#2c3e50] leading-relaxed mb-0 tracking-wide">
                    <TypewriterText 
                      text={t.hero.invitation} 
                      delay={300}
                      speed={40}
                      onComplete={() => setTextStage(3)}
                    />
                  </p>
                ) : (
                  <p className="heading-serif text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#2c3e50] leading-relaxed mb-0 tracking-wide">
                    {t.hero.invitation}
                  </p>
                )}
              </motion.div>
            )}

            {/* Names */}
            {(!showIntro || textStage >= 3) && (
              <motion.div 
                variants={!showIntro ? fadeInUp : undefined}
                initial={showIntro ? { opacity: 0 } : undefined}
                animate={showIntro ? { opacity: 1 } : undefined}
                transition={showIntro ? { delay: 0.3, duration: 0.5 } : undefined}
                className="mb-4 sm:mb-6 md:mb-8"
              >
                {showIntro ? (
                  <h1 className="heading-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#d4af37] leading-tight">
                    <TypewriterText 
                      text={`${t.hero.groomName} ${t.hero.ampersand} ${t.hero.brideName}`} 
                      delay={300}
                      speed={100}
                      onComplete={() => setTextStage(t.hero.weddingText ? 4 : 5)}
                    />
                  </h1>
                ) : (
                  <h1 className="heading-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#d4af37] leading-tight">
                    {t.hero.groomName} {t.hero.ampersand} {t.hero.brideName}
                  </h1>
                )}
              </motion.div>
            )}

            {/* Wedding Text (continuation after names) */}
            {t.hero.weddingText && (!showIntro || textStage >= 4) && (
              <motion.div 
                variants={!showIntro ? fadeInUp : undefined}
                initial={showIntro ? { opacity: 0 } : undefined}
                animate={showIntro ? { opacity: 1 } : undefined}
                transition={showIntro ? { delay: 0.3, duration: 0.5 } : undefined}
                className="mb-4 sm:mb-6 md:mb-8"
              >
                {showIntro ? (
                  <p className="heading-serif text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#2c3e50] leading-relaxed mb-0 tracking-wide">
                    <TypewriterText 
                      text={t.hero.weddingText} 
                      delay={300}
                      speed={40}
                      onComplete={() => setTextStage(5)}
                    />
                  </p>
                ) : (
                  <p className="heading-serif text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#2c3e50] leading-relaxed mb-0 tracking-wide">
                    {t.hero.weddingText}
                  </p>
                )}
              </motion.div>
            )}

            {/* Divider */}
            {(!showIntro || textStage >= 5) && (
              <motion.div 
                variants={!showIntro ? fadeInUp : undefined}
                initial={showIntro ? { opacity: 0, scaleX: 0 } : undefined}
                animate={showIntro ? { opacity: 1, scaleX: 1 } : undefined}
                transition={showIntro ? { delay: 0.3, duration: 0.8 } : undefined}
                className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6"
                onAnimationComplete={() => showIntro && setTextStage(6)}
              >
                <div className="h-px w-16 sm:w-24 bg-[#d4af37]"></div>
                <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
                <div className="h-px w-16 sm:w-24 bg-[#d4af37]"></div>
              </motion.div>
            )}

            {/* Closing Message */}
            {(!showIntro || textStage >= 6) && (
              <motion.div 
                variants={!showIntro ? fadeInUp : undefined}
                initial={showIntro ? { opacity: 0 } : undefined}
                animate={showIntro ? { opacity: 1 } : undefined}
                transition={showIntro ? { delay: 0.3, duration: 0.5 } : undefined}
              >
                {showIntro ? (
                  <p className="heading-serif text-base sm:text-lg md:text-xl font-normal text-[#2c3e50] leading-relaxed mb-0 tracking-wide italic">
                    <TypewriterText 
                      text={t.hero.honor} 
                      delay={300}
                      speed={35}
                    />
                  </p>
                ) : (
                  <p className="heading-serif text-base sm:text-lg md:text-xl font-normal text-[#2c3e50] leading-relaxed mb-0 tracking-wide italic">
                    {t.hero.honor}
                  </p>
                )}
              </motion.div>
            )}

          </div>

        </div>
      </motion.div>
    </section>
  );
}


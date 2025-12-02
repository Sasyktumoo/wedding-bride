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
    <section className="relative min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#f8f6f0] via-[#faf8f2] to-[#f5f3ed] overflow-hidden">
      {/* Elegant Background Decorations */}
      <div className="absolute inset-0 opacity-30">
        {/* Top Left Floral Corner */}
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
          <svg viewBox="0 0 200 200" className="w-full h-full text-[#d4af37]/40">
            <path d="M0,50 Q20,30 40,50 Q60,70 50,90 Q40,110 20,100 Q0,90 0,50 M10,60 Q30,45 50,60" 
                  fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <path d="M20,20 Q40,0 60,20 Q80,40 70,60 Q60,80 40,70 Q20,60 20,20" 
                  fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="30" cy="40" r="2" fill="currentColor" opacity="0.6"/>
            <circle cx="50" cy="30" r="2" fill="currentColor" opacity="0.6"/>
            <path d="M5,80 Q15,60 25,80 L20,100 L10,100 Z" 
                  fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </svg>
        </div>
        
        {/* Bottom Right Floral Corner */}
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 transform rotate-180">
          <svg viewBox="0 0 200 200" className="w-full h-full text-[#d4af37]/40">
            <path d="M0,50 Q20,30 40,50 Q60,70 50,90 Q40,110 20,100 Q0,90 0,50 M10,60 Q30,45 50,60" 
                  fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <path d="M20,20 Q40,0 60,20 Q80,40 70,60 Q60,80 40,70 Q20,60 20,20" 
                  fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="30" cy="40" r="2" fill="currentColor" opacity="0.6"/>
            <circle cx="50" cy="30" r="2" fill="currentColor" opacity="0.6"/>
          </svg>
        </div>

        {/* Delicate Pattern Overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.03) 0%, transparent 50%),
                           radial-gradient(circle at 80% 70%, rgba(212, 175, 55, 0.03) 0%, transparent 50%)`
        }}></div>
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


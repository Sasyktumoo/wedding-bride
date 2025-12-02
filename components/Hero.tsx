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
    <section className="relative min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #fdfbf7 0%, #faf7f0 25%, #f8f3e8 50%, #faf7f0 75%, #fdfbf7 100%)',
      }}>
      
      {/* Watercolor Blobs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl bg-gradient-to-br from-[#f5e6d3]/40 to-transparent"></div>
        <div className="absolute top-32 right-20 w-48 h-48 rounded-full blur-2xl bg-gradient-to-bl from-[#f5e6d3]/30 to-transparent"></div>
        <div className="absolute bottom-20 left-16 w-56 h-56 rounded-full blur-3xl bg-gradient-to-tr from-[#f5e6d3]/35 to-transparent"></div>
        <div className="absolute bottom-40 right-32 w-40 h-40 rounded-full blur-2xl bg-gradient-to-tl from-[#f5e6d3]/25 to-transparent"></div>
      </div>
      
      {/* Elegant Botanical Line Art */}
      <div className="absolute inset-0">
        {/* Top Center - Hanging Branches */}
        <motion.div 
          className="absolute top-0 right-12 sm:right-20 md:right-32 w-40 h-64 sm:w-48 sm:h-72 md:w-56 md:h-80 opacity-40"
          animate={{ 
            y: [0, 5, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <svg viewBox="0 0 120 200" className="w-full h-full">
            <g stroke="#c9a961" fill="none" strokeWidth="1.2" strokeLinecap="round">
              {/* Main stem */}
              <path d="M60,0 Q58,30 60,60 Q62,90 60,120" opacity="0.7"/>
              {/* Hanging leaves right */}
              <path d="M60,15 Q75,18 85,25 Q90,30 85,35 Q75,32 60,30" opacity="0.6"/>
              <path d="M60,35 Q78,38 88,48 Q92,55 86,60 Q76,55 60,52" opacity="0.6"/>
              <path d="M60,60 Q76,63 84,72 Q88,78 82,83 Q72,78 60,75" opacity="0.6"/>
              {/* Hanging leaves left */}
              <path d="M60,20 Q45,23 35,30 Q30,35 35,40 Q45,37 60,35" opacity="0.6"/>
              <path d="M60,45 Q42,48 32,58 Q28,65 34,70 Q44,65 60,62" opacity="0.6"/>
              <path d="M60,75 Q44,78 36,87 Q32,93 38,98 Q48,93 60,90" opacity="0.6"/>
            </g>
          </svg>
        </motion.div>

        {/* Left Side - Large Botanical Element */}
        <motion.div 
          className="absolute bottom-0 left-0 w-48 h-96 sm:w-64 sm:h-[450px] md:w-80 md:h-[500px] opacity-40"
          animate={{ 
            x: [0, -3, 0],
            rotate: [0, -1, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        >
          <svg viewBox="0 0 150 300" className="w-full h-full">
            <g stroke="#c9a961" fill="none" strokeWidth="1.2" strokeLinecap="round">
              {/* Main stem curving upward */}
              <path d="M20,300 Q25,250 30,200 Q32,150 35,100 Q38,50 40,20" opacity="0.7"/>
              
              {/* Large leaves on the stem */}
              <path d="M22,280 Q5,275 0,260 Q-2,250 8,245 Q20,248 25,265" opacity="0.6"/>
              <path d="M24,260 Q8,255 4,240 Q2,228 12,224 Q22,228 27,245" opacity="0.6"/>
              <path d="M26,230 Q10,228 5,215 Q2,205 13,200 Q24,203 29,218" opacity="0.6"/>
              <path d="M28,200 Q12,198 8,185 Q5,175 16,171 Q26,174 31,188" opacity="0.6"/>
              
              {/* Right side leaves */}
              <path d="M33,270 Q50,268 60,255 Q65,245 55,240 Q42,242 35,255" opacity="0.6"/>
              <path d="M34,240 Q48,238 56,227 Q60,218 52,214 Q40,216 36,228" opacity="0.6"/>
              <path d="M35,210 Q47,208 54,198 Q57,190 50,186 Q40,188 37,198" opacity="0.6"/>
              
              {/* Decorative curls */}
              <path d="M25,150 Q20,145 20,140 Q20,135 25,135" opacity="0.5"/>
              <path d="M36,160 Q40,155 40,150 Q40,145 36,145" opacity="0.5"/>
              
              {/* Top leaves */}
              <path d="M38,100 Q25,98 18,88 Q15,80 23,76 Q35,78 39,88" opacity="0.6"/>
              <path d="M39,70 Q48,68 54,58 Q57,50 50,47 Q40,49 38,58" opacity="0.6"/>
              <path d="M40,40 Q28,38 22,30 Q18,22 26,19 Q38,21 41,30" opacity="0.6"/>
            </g>
          </svg>
        </motion.div>

        {/* Right Side - Hanging Branch */}
        <motion.div 
          className="absolute top-0 right-0 w-40 h-72 sm:w-52 sm:h-80 md:w-64 md:h-96 opacity-40"
          animate={{ 
            y: [0, 4, 0],
            rotate: [0, 1.5, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        >
          <svg viewBox="0 0 120 250" className="w-full h-full">
            <g stroke="#c9a961" fill="none" strokeWidth="1.2" strokeLinecap="round">
              {/* Main curved branch */}
              <path d="M100,0 Q95,40 90,80 Q88,120 85,160" opacity="0.7"/>
              
              {/* Leaves and sprigs */}
              <path d="M98,25 Q110,28 115,38 Q118,45 112,48 Q102,45 96,35" opacity="0.6"/>
              <path d="M95,50 Q108,52 114,62 Q116,70 109,73 Q98,70 93,60" opacity="0.6"/>
              <path d="M92,80 Q105,83 110,92 Q112,100 105,103 Q95,100 90,90" opacity="0.6"/>
              <path d="M89,110 Q101,113 106,122 Q108,130 101,133 Q91,130 87,120" opacity="0.6"/>
              <path d="M86,140 Q98,143 103,152 Q105,160 98,163 Q88,160 84,150" opacity="0.6"/>
              
              {/* Decorative curls */}
              <circle cx="110" cy="35" r="2" fill="#c9a961" opacity="0.5"/>
              <circle cx="107" cy="65" r="1.5" fill="#c9a961" opacity="0.5"/>
              <circle cx="103" cy="95" r="2" fill="#c9a961" opacity="0.5"/>
            </g>
          </svg>
        </motion.div>

        {/* Bottom Right - Smaller Accent */}
        <motion.div 
          className="absolute bottom-12 right-12 sm:bottom-16 sm:right-16 md:bottom-20 md:right-20 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 opacity-35"
          animate={{ 
            rotate: [0, -3, 0],
            scale: [1, 1.03, 1]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <g stroke="#c9a961" fill="none" strokeWidth="1" strokeLinecap="round">
              <path d="M50,70 Q55,50 60,30" opacity="0.7"/>
              <ellipse cx="58" cy="35" rx="6" ry="12" transform="rotate(30 58 35)" opacity="0.6"/>
              <ellipse cx="62" cy="50" rx="5" ry="10" transform="rotate(20 62 50)" opacity="0.6"/>
              <path d="M50,70 Q45,60 42,48" opacity="0.6"/>
              <ellipse cx="44" cy="52" rx="5" ry="10" transform="rotate(-25 44 52)" opacity="0.6"/>
            </g>
          </svg>
        </motion.div>
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


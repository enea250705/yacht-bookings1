import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';
import { 
  Award, 
  Anchor, 
  Users, 
  Globe, 
  Shield, 
  Star, 
  ChevronRight,
  Diamond,
  Trophy,
  Compass,
  Calendar,
  Crown,
  Sparkles,
  ArrowRight,
  Quote
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const About: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Enhanced premium parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 2]);

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

// Enhanced luxury animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 1.2
    }
  }
};

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95,
      rotateX: 45
    },
  visible: { 
    opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
    transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
    }
  }
};

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: 45
    },
  visible: { 
    opacity: 1, 
      scale: 1,
    rotateY: 0,
    transition: { 
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
    }
    },
    hover: {
      scale: 1.05,
      rotateY: -5,
      z: 50,
    transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
    }
  }
};

  // Enhanced achievements data
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      number: "50+",
      label: "Awards Won",
      description: "International maritime excellence",
      color: "from-navy-600 to-navy-800"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      number: "25",
      label: "Years Legacy",
      description: "Crafting maritime masterpieces",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "500+",
      label: "Elite Clients",
      description: "Trust our expertise worldwide",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "40+",
      label: "Countries",
      description: "Global presence and service",
      color: "from-emerald-400 to-emerald-600"
    }
  ];
  
  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50">
      
      {/* Enhanced premium background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          ref={parallaxRef}
          className="absolute inset-0 opacity-5"
          style={{ y, rotate }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-navy-200 to-navy-300 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-navy-400 to-navy-600 rounded-full blur-3xl" />
          <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full blur-2xl" />
        </motion.div>
        
        {/* Enhanced floating decorative elements */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity }}
        >
          {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
              className="absolute"
            style={{
                left: `${10 + (i * 8)}%`,
                top: `${20 + (i % 3) * 30}%`,
            }}
            >
      <motion.div
                className="w-2 h-2 bg-white/30/20 rounded-full"
        animate={{
                  y: [-20, 20, -20],
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.5, 1]
        }}
        transition={{
                  duration: 4 + i,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
            </motion.div>
          ))}
      </motion.div>
      
        {/* Premium geometric patterns */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{ 
            backgroundImage: [
              'repeating-linear-gradient(45deg, rgba(255, 255, 255,0.1) 0px, transparent 1px, transparent 10px, rgba(255, 255, 255,0.1) 11px)',
              'repeating-linear-gradient(135deg, rgba(255, 255, 255,0.1) 0px, transparent 1px, transparent 10px, rgba(255, 255, 255,0.1) 11px)',
              'repeating-linear-gradient(45deg, rgba(255, 255, 255,0.1) 0px, transparent 1px, transparent 10px, rgba(255, 255, 255,0.1) 11px)'
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-navy-900/10 to-navy-800/10 border border-navy-400/30 rounded-full mb-6 backdrop-blur-sm">
            <div>
              <Anchor className="w-5 h-5 text-navy-900" />
            </div>
            <span className="text-navy-900 font-medium tracking-wider uppercase text-sm">About Excellence</span>
            <Sparkles className="w-4 h-4 text-navy-900" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight">
            <span className="block">Crafting Maritime</span>
            <span className="block bg-gradient-to-r from-navy-600 to-navy-800 bg-clip-text text-transparent">
              Masterpieces
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over two decades, we've been pushing the boundaries of yacht design and craftsmanship, 
            creating floating works of art that redefine the very essence of luxury.
          </p>
        </div>

        {/* Enhanced Premium Achievement Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="relative p-8 bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 shadow-xl shadow-black/5 overflow-hidden">
                {/* Premium gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Premium icon with 3D effect */}
                <div className="relative z-10 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl text-white mb-4 shadow-lg`}>
                    {achievement.icon}
                      </div>
                    </div>

                <div className="text-center relative z-10">
                  <div className="text-3xl sm:text-4xl font-bold text-navy-900 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-800 mb-2">
                    {achievement.label}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
          
                {/* Premium hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;



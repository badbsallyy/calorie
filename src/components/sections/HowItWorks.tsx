"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Camera, Cpu, LineChart, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Camera,
    number: "01",
    title: "Snap Your Meal",
    description:
      "Simply take a photo of your food or scan a barcode. Our AI handles the rest, no manual entry required.",
    preview: (
      <div className="relative w-full h-48 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-32 h-32 rounded-full border-4 border-dashed border-primary/30" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Camera className="w-12 h-12 text-primary" />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-40 h-40 rounded-full border-2 border-primary/20" />
        </motion.div>
      </div>
    ),
  },
  {
    icon: Cpu,
    number: "02",
    title: "AI Analysis",
    description:
      "Our advanced AI instantly recognizes food items, portions, and calculates accurate nutritional values in seconds.",
    preview: (
      <div className="relative w-full h-48 bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-2xl flex items-center justify-center overflow-hidden">
        <motion.div className="grid grid-cols-3 gap-2">
          {["🍔", "🍟", "🥤"].map((emoji, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2, repeat: Infinity, repeatDelay: 2, duration: 0.3 }}
              className="w-12 h-12 bg-card rounded-xl flex items-center justify-center text-2xl shadow-lg border border-border"
            >
              {emoji}
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          {[...Array(3)].map((_, idx) => (
            <motion.div
              key={idx}
              animate={{ scaleY: [1, 2, 1] }}
              transition={{ duration: 0.4, repeat: Infinity, delay: idx * 0.1 }}
              className="w-1 h-4 bg-purple-500 rounded-full"
            />
          ))}
        </motion.div>
      </div>
    ),
  },
  {
    icon: LineChart,
    number: "03",
    title: "Track & Optimize",
    description:
      "View detailed insights, track your progress over time, and receive personalized recommendations to reach your goals.",
    preview: (
      <div className="relative w-full h-48 bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-2xl flex items-center justify-center overflow-hidden p-4">
        <div className="w-full h-full flex flex-col justify-end">
          <div className="flex items-end justify-between h-32 gap-2">
            {[65, 80, 45, 90, 70, 85, 95].map((height, idx) => (
              <motion.div
                key={idx}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: idx * 0.1, duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg"
              />
            ))}
          </div>
          <motion.div
            className="absolute top-4 right-4 text-sm font-bold text-blue-400"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            +15%
          </motion.div>
        </div>
      </div>
    ),
  },
]

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4"
          >
            <span>How It Works</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Three Simple Steps to
            <br />
            <span className="text-gradient">Transform Your Health</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started is easy. Our intuitive platform guides you through your health journey.
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-full w-full h-0.5 z-0">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                    className="h-full bg-gradient-to-r from-primary/50 to-primary/20 origin-left"
                  />
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.2 }}
                    className="absolute right-0 top-1/2 -translate-y-1/2"
                  >
                    <ArrowRight className="w-4 h-4 text-primary/50" />
                  </motion.div>
                </div>
              )}

              {/* Card */}
              <div className="bg-card rounded-3xl p-6 border border-border hover:border-primary/30 transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-4xl font-bold text-primary/30">{step.number}</span>
                </div>

                {/* Preview */}
                {step.preview}

                {/* Content */}
                <h3 className="text-xl font-semibold mt-6 mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

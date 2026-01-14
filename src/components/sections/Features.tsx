"use client"

import React from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Scan,
  Brain,
  Target,
  TrendingUp,
  Utensils,
  Bell,
  Database,
  Smartphone,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Scan,
    title: "AI Food Recognition",
    description:
      "Simply snap a photo of your meal and our AI instantly identifies and logs all ingredients with accurate calorie counts.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Brain,
    title: "Smart Meal Suggestions",
    description:
      "Get personalized meal recommendations based on your goals, preferences, and nutritional needs powered by advanced AI.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description:
      "Set and track your health goals with precision. Whether it's weight loss, muscle gain, or maintaining a healthy lifestyle.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Progress Analytics",
    description:
      "Visualize your journey with detailed charts and insights. Understand your eating patterns and optimize your diet.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Utensils,
    title: "Recipe Builder",
    description:
      "Create and save your favorite recipes with automatic nutrition calculation. Build your personal meal library.",
    color: "from-teal-500 to-green-500",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description:
      "Never miss a meal log with intelligent reminders that adapt to your eating schedule and habits.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Database,
    title: "Vast Food Database",
    description:
      "Access over 2 million food items with verified nutritional information. From restaurants to home-cooked meals.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Sync",
    description:
      "Seamlessly sync your data across all devices. Start on your phone, continue on your tablet or desktop.",
    color: "from-pink-500 to-rose-500",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
} as const

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
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
            <span>Features</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everything You Need to
            <br />
            <span className="text-gradient">Master Your Nutrition</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to make calorie tracking effortless and help you achieve your health goals faster.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:border-primary/50 transition-all duration-300 group cursor-pointer overflow-hidden">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground flex-1">
                    {feature.description}
                  </p>
                  
                  {/* Hover effect line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    className="h-0.5 bg-gradient-to-r from-primary to-primary-light mt-4 origin-left"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

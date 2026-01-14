"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    avatar: "👩‍💼",
    rating: 5,
    content:
      "This app has completely transformed my relationship with food. The AI recognition is incredibly accurate, and I've lost 15 pounds in just 3 months!",
  },
  {
    name: "Michael Chen",
    role: "Professional Athlete",
    avatar: "🧔",
    rating: 5,
    content:
      "As an athlete, precise nutrition tracking is crucial. Calories gives me the detailed macros I need without spending hours logging everything manually.",
  },
  {
    name: "Emma Williams",
    role: "Nutritionist",
    avatar: "👩‍⚕️",
    rating: 5,
    content:
      "I recommend this to all my clients. The meal suggestions are spot-on and the analytics help them understand their eating patterns better.",
  },
  {
    name: "David Rodriguez",
    role: "Busy Professional",
    avatar: "👨‍💻",
    rating: 5,
    content:
      "Finally, an app that fits my hectic schedule! The barcode scanning and photo recognition save me so much time every day.",
  },
  {
    name: "Lisa Thompson",
    role: "Weight Loss Journey",
    avatar: "👩",
    rating: 5,
    content:
      "I've tried countless calorie tracking apps, but this one actually sticks. The UI is beautiful and the AI features make it so easy to use.",
  },
  {
    name: "James Miller",
    role: "Personal Trainer",
    avatar: "💪",
    rating: 5,
    content:
      "My clients love this app. The progress tracking and smart recommendations help them stay motivated throughout their fitness journey.",
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
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
            <span>Testimonials</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Loved by
            <br />
            <span className="text-gradient">Thousands of Users</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community of health-conscious individuals achieving their goals every day.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <Card className="h-full hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  
                  {/* Content */}
                  <p className="text-muted-foreground mb-6">{testimonial.content}</p>
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "10,000+", label: "Active Users" },
            { value: "4.9/5", label: "App Rating" },
            { value: "1M+", label: "Meals Tracked" },
            { value: "98%", label: "Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

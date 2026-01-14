"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Zap, Apple, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Nutrition Tracking</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Track Your
              <br />
              <span className="text-gradient">Calories</span>
              <br />
              Effortlessly
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg"
            >
              The smartest AI-powered calorie tracker that helps you achieve your health goals. 
              Snap, scan, and track your meals in seconds.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="group">
                Get Started Free
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 mt-12"
            >
              {[
                { value: "10K+", label: "Active Users" },
                { value: "1M+", label: "Meals Tracked" },
                { value: "4.9", label: "App Rating" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative flex justify-center items-center"
          >
            {/* Phone Frame */}
            <div className="relative w-[280px] sm:w-[320px] h-[560px] sm:h-[640px]">
              {/* Phone Border */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-gray-700 to-gray-900 p-2 shadow-2xl">
                {/* Phone Screen */}
                <div className="w-full h-full rounded-[2.5rem] bg-background overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-10" />
                  
                  {/* Screen Content */}
                  <div className="h-full pt-10 px-4 pb-4 flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-sm text-muted-foreground">Today</div>
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-xs">👤</span>
                      </div>
                    </div>

                    {/* Calories Card */}
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-4 mb-4 border border-primary/20"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-xs text-muted-foreground">Calories Today</div>
                          <div className="text-3xl font-bold text-primary">1,847</div>
                        </div>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="w-16 h-16 rounded-full border-4 border-primary/30 border-t-primary flex items-center justify-center"
                        >
                          <Flame className="w-6 h-6 text-primary" />
                        </motion.div>
                      </div>
                      <div className="h-2 bg-border rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "74%" }}
                          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                      <div className="text-xs text-muted-foreground mt-2">74% of daily goal</div>
                    </motion.div>

                    {/* Macro Cards */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {[
                        { icon: "🥩", label: "Protein", value: "85g", color: "text-red-400" },
                        { icon: "🍞", label: "Carbs", value: "220g", color: "text-yellow-400" },
                        { icon: "🥑", label: "Fats", value: "65g", color: "text-green-400" },
                      ].map((macro, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 1 + idx * 0.1 }}
                          className="bg-card rounded-xl p-3 text-center border border-border"
                        >
                          <div className="text-xl mb-1">{macro.icon}</div>
                          <div className={`text-sm font-bold ${macro.color}`}>{macro.value}</div>
                          <div className="text-[10px] text-muted-foreground">{macro.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Recent Meals */}
                    <div className="flex-1">
                      <div className="text-xs text-muted-foreground mb-2">Recent Meals</div>
                      <div className="space-y-2">
                        {[
                          { name: "Breakfast", icon: "🥗", cal: 420, time: "8:30 AM" },
                          { name: "Lunch", icon: "🍕", cal: 680, time: "12:45 PM" },
                          { name: "Snack", icon: "🍎", cal: 95, time: "3:00 PM" },
                        ].map((meal, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.3 + idx * 0.1 }}
                            className="flex items-center justify-between bg-secondary/50 rounded-xl p-3 border border-border"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{meal.icon}</span>
                              <div>
                                <div className="text-xs font-medium">{meal.name}</div>
                                <div className="text-[10px] text-muted-foreground">{meal.time}</div>
                              </div>
                            </div>
                            <div className="text-xs text-primary font-medium">{meal.cal} cal</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Button */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.6 }}
                      className="mt-4"
                    >
                      <div className="bg-primary rounded-full py-3 text-center text-black font-medium text-sm flex items-center justify-center gap-2">
                        <Zap className="w-4 h-4" />
                        Add Meal
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-card rounded-2xl shadow-xl flex items-center justify-center border border-border"
              >
                <Apple className="w-8 h-8 text-red-400" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 -left-8 w-14 h-14 bg-card rounded-xl shadow-xl flex items-center justify-center border border-border"
              >
                <span className="text-2xl">🥗</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 -right-6 w-14 h-14 bg-card rounded-xl shadow-xl flex items-center justify-center border border-border"
              >
                <span className="text-2xl">🏃</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

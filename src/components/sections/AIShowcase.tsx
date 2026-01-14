"use client"

import React, { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Sparkles, Search, Wand2, ChefHat } from "lucide-react"

const demoFoods = [
  { name: "Grilled Chicken", calories: 165, protein: "31g", icon: "🍗" },
  { name: "Brown Rice", calories: 216, protein: "5g", icon: "🍚" },
  { name: "Steamed Broccoli", calories: 55, protein: "4g", icon: "🥦" },
  { name: "Olive Oil", calories: 119, protein: "0g", icon: "🫒" },
]

const mealSuggestions = [
  { name: "Power Bowl", calories: 520, time: "25 min", icon: "🥗", match: "95%" },
  { name: "Protein Smoothie", calories: 380, time: "5 min", icon: "🥤", match: "88%" },
  { name: "Grilled Salmon", calories: 450, time: "20 min", icon: "🐟", match: "85%" },
]

export function AIShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const handleSearch = () => {
    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
      setShowResults(true)
    }, 1500)
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
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
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Experience the Power of
            <br />
            <span className="text-gradient">Intelligent Nutrition</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our advanced AI technology makes tracking and planning your meals effortless.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4 mb-12"
        >
          {[
            { icon: Search, label: "Food Search" },
            { icon: Wand2, label: "Meal Builder" },
            { icon: ChefHat, label: "Smart Suggestions" },
          ].map((tab, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveTab(idx)
                setShowResults(false)
                setSearchQuery("")
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                activeTab === idx
                  ? "bg-primary text-black"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-3xl border border-border p-8 overflow-hidden">
            <AnimatePresence mode="wait">
              {activeTab === 0 && (
                <motion.div
                  key="search"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  {/* Search Bar */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search any food... (try 'chicken salad')"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                      className="w-full px-6 py-4 rounded-2xl bg-secondary border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground"
                    />
                    <button
                      onClick={handleSearch}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-primary rounded-xl text-black hover:bg-primary-light transition-colors"
                    >
                      <Search className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Search Animation */}
                  {isSearching && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center justify-center py-12"
                    >
                      <div className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full"
                        />
                        <span className="text-muted-foreground">Searching database...</span>
                      </div>
                    </motion.div>
                  )}

                  {/* Results */}
                  {showResults && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3"
                    >
                      <div className="text-sm text-muted-foreground mb-4">
                        Found 4 items matching your search
                      </div>
                      {demoFoods.map((food, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 cursor-pointer transition-all"
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-3xl">{food.icon}</span>
                            <div>
                              <div className="font-medium">{food.name}</div>
                              <div className="text-sm text-muted-foreground">
                                Protein: {food.protein}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-primary font-bold">{food.calories}</div>
                            <div className="text-xs text-muted-foreground">calories</div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {!isSearching && !showResults && (
                    <div className="text-center py-12 text-muted-foreground">
                      <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
                      <p>Start typing to search our database of 2M+ foods</p>
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 1 && (
                <motion.div
                  key="builder"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold mb-2">AI Meal Builder</h3>
                    <p className="text-muted-foreground text-sm">
                      Combine ingredients and let AI calculate nutrition
                    </p>
                  </div>

                  {/* Meal Preview */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Ingredients */}
                    <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
                      <h4 className="text-sm font-medium text-muted-foreground mb-4">
                        Selected Ingredients
                      </h4>
                      <div className="space-y-3">
                        {demoFoods.slice(0, 3).map((food, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.15 }}
                            className="flex items-center justify-between p-3 rounded-xl bg-card border border-border"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{food.icon}</span>
                              <span className="text-sm">{food.name}</span>
                            </div>
                            <span className="text-xs text-primary">{food.calories} cal</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Nutrition Summary */}
                    <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-6 border border-primary/20">
                      <h4 className="text-sm font-medium text-primary mb-4">
                        Nutrition Summary
                      </h4>
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-4"
                      >
                        <div className="text-center">
                          <div className="text-4xl font-bold text-primary">436</div>
                          <div className="text-sm text-muted-foreground">Total Calories</div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-lg font-semibold text-red-400">40g</div>
                            <div className="text-xs text-muted-foreground">Protein</div>
                          </div>
                          <div>
                            <div className="text-lg font-semibold text-yellow-400">32g</div>
                            <div className="text-xs text-muted-foreground">Carbs</div>
                          </div>
                          <div>
                            <div className="text-lg font-semibold text-green-400">18g</div>
                            <div className="text-xs text-muted-foreground">Fats</div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 2 && (
                <motion.div
                  key="suggestions"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold mb-2">Smart Meal Suggestions</h3>
                    <p className="text-muted-foreground text-sm">
                      AI-powered recommendations based on your goals
                    </p>
                  </div>

                  <div className="space-y-4">
                    {mealSuggestions.map((meal, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.15 }}
                        className="flex items-center justify-between p-5 rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 cursor-pointer transition-all group"
                      >
                        <div className="flex items-center gap-4">
                          <motion.span
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            className="text-4xl"
                          >
                            {meal.icon}
                          </motion.span>
                          <div>
                            <div className="font-semibold group-hover:text-primary transition-colors">
                              {meal.name}
                            </div>
                            <div className="text-sm text-muted-foreground flex items-center gap-3">
                              <span>{meal.calories} cal</span>
                              <span>•</span>
                              <span>{meal.time}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-primary font-bold">{meal.match}</div>
                          <div className="text-xs text-muted-foreground">match</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import React, { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Check, Zap, Crown, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Free",
    icon: Zap,
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with calorie tracking",
    features: [
      "Basic calorie tracking",
      "Manual food logging",
      "Daily goals",
      "Basic reports",
      "Mobile app access",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    icon: Crown,
    price: "$9.99",
    period: "/month",
    description: "Advanced features for serious health enthusiasts",
    features: [
      "Everything in Free",
      "AI food recognition",
      "Unlimited meal scans",
      "Advanced analytics",
      "Personalized recommendations",
      "Recipe builder",
      "Priority support",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: "Custom",
    period: "",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Team management",
      "Admin dashboard",
      "API access",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      
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
            <span>Pricing</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Simple, Transparent
            <br />
            <span className="text-gradient">Pricing Plans</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your health journey. No hidden fees, cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-1 bg-secondary rounded-full">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !isAnnual ? "bg-primary text-black" : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isAnnual ? "bg-primary text-black" : "text-muted-foreground"
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1 bg-primary text-black text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <Card
                className={`h-full ${
                  plan.popular
                    ? "border-primary shadow-lg shadow-primary/20"
                    : "hover:border-primary/30"
                } transition-all duration-300`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Price */}
                  <div className="text-center">
                    <span className="text-4xl font-bold">
                      {plan.price === "Custom"
                        ? plan.price
                        : isAnnual && plan.price !== "$0"
                        ? `$${(parseFloat(plan.price.replace("$", "")) * 0.8).toFixed(2)}`
                        : plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Compare Plans</h3>
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <table className="w-full">
              <thead className="bg-secondary/50">
                <tr>
                  <th className="text-left p-4 text-sm font-medium">Feature</th>
                  <th className="text-center p-4 text-sm font-medium">Free</th>
                  <th className="text-center p-4 text-sm font-medium text-primary">Pro</th>
                  <th className="text-center p-4 text-sm font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Calorie Tracking", free: true, pro: true, enterprise: true },
                  { feature: "AI Food Recognition", free: false, pro: true, enterprise: true },
                  { feature: "Meal Scans/Month", free: "10", pro: "Unlimited", enterprise: "Unlimited" },
                  { feature: "Analytics", free: "Basic", pro: "Advanced", enterprise: "Custom" },
                  { feature: "API Access", free: false, pro: false, enterprise: true },
                  { feature: "Support", free: "Community", pro: "Priority", enterprise: "Dedicated" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-t border-border">
                    <td className="p-4 text-sm">{row.feature}</td>
                    <td className="text-center p-4">
                      {typeof row.free === "boolean" ? (
                        row.free ? (
                          <Check className="w-4 h-4 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )
                      ) : (
                        <span className="text-sm">{row.free}</span>
                      )}
                    </td>
                    <td className="text-center p-4 bg-primary/5">
                      {typeof row.pro === "boolean" ? (
                        row.pro ? (
                          <Check className="w-4 h-4 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )
                      ) : (
                        <span className="text-sm text-primary font-medium">{row.pro}</span>
                      )}
                    </td>
                    <td className="text-center p-4">
                      {typeof row.enterprise === "boolean" ? (
                        row.enterprise ? (
                          <Check className="w-4 h-4 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )
                      ) : (
                        <span className="text-sm">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

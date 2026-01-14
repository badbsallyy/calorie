"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does the AI food recognition work?",
    answer:
      "Our AI uses advanced computer vision to analyze photos of your meals. Simply take a picture, and our system identifies individual food items, estimates portions, and calculates nutritional information in seconds. The AI continuously learns and improves with each scan.",
  },
  {
    question: "Is the calorie tracking accurate?",
    answer:
      "Our database contains over 2 million verified food items with accurate nutritional data. The AI portion estimation is about 95% accurate on average. For packaged foods, barcode scanning provides exact nutritional information from manufacturer data.",
  },
  {
    question: "Can I track custom recipes?",
    answer:
      "Absolutely! Our recipe builder lets you create and save custom recipes. Simply add ingredients, specify quantities, and we'll automatically calculate the total nutritional value. You can save unlimited recipes and log them with a single tap.",
  },
  {
    question: "Does the app work offline?",
    answer:
      "Basic logging features work offline, and your data syncs automatically when you reconnect. However, AI food recognition and database searches require an internet connection to access our cloud-based AI and database.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "You can cancel your subscription anytime from your account settings. Your Pro features will remain active until the end of your billing period. There are no cancellation fees or penalties.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "We take privacy seriously. Your health data is encrypted and stored securely. We never sell your personal information to third parties. You can export or delete your data at any time from your account settings.",
  },
  {
    question: "Can I sync with other fitness apps?",
    answer:
      "Yes! We integrate with popular fitness platforms including Apple Health, Google Fit, Fitbit, and Strava. Your calorie data syncs automatically to give you a complete picture of your health journey.",
  },
  {
    question: "Do you offer family or team plans?",
    answer:
      "Our Enterprise plan includes team management features perfect for families, sports teams, or corporate wellness programs. Contact our sales team for custom pricing and features tailored to your needs.",
  },
]

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
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
            <span>FAQ</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked
            <br />
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Calories. Can&apos;t find what you&apos;re looking for? Contact our support team.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card rounded-2xl border border-border px-6 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="text-base font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors font-medium"
          >
            Contact our support team →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

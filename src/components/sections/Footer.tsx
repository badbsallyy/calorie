"use client"

import React from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Download", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press Kit", href: "#" },
  ],
  Resources: [
    { label: "Help Center", href: "#" },
    { label: "Community", href: "#" },
    { label: "API Docs", href: "#" },
    { label: "Status", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "GDPR", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-black font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-bold">Calories</span>
            </motion.a>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              The AI-powered calorie tracker that helps you achieve your health goals effortlessly.
            </p>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className="px-4 py-2 bg-black rounded-lg flex items-center gap-2 hover:bg-gray-900 transition-colors"
              >
                <span className="text-xl">🍎</span>
                <div>
                  <div className="text-[10px] text-gray-400">Download on</div>
                  <div className="text-sm font-medium">App Store</div>
                </div>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className="px-4 py-2 bg-black rounded-lg flex items-center gap-2 hover:bg-gray-900 transition-colors"
              >
                <span className="text-xl">▶️</span>
                <div>
                  <div className="text-[10px] text-gray-400">Get it on</div>
                  <div className="text-sm font-medium">Google Play</div>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-sm">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Calories. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for a healthier world
          </p>
        </div>
      </div>
    </footer>
  )
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calories - AI-Powered Calorie Tracker",
  description: "The smartest AI-powered calorie tracker that helps you achieve your health goals. Snap, scan, and track your meals in seconds.",
  keywords: ["calorie tracker", "nutrition", "AI", "health", "fitness", "meal tracking"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

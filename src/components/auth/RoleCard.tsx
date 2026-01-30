"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface RoleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  theme: "student" | "faculty" | "admin";
  onClick: () => void;
}

export function RoleCard({ title, description, icon: Icon, theme, onClick }: RoleCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, translateY: -5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={onClick}
      className="card"
      style={{ cursor: "pointer", display: "flex", flexDirection: "column", gap: "1rem", minHeight: "220px" }}
      data-theme={theme}
    >
      <div 
        style={{ 
          width: "50px", 
          height: "50px", 
          borderRadius: "var(--radius-sm)", 
          background: "var(--primary-glow)", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          color: "var(--primary)"
        }}
      >
        <Icon size={28} />
      </div>
      <div>
        <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{title}</h3>
        <p style={{ color: "var(--text-soft)", fontSize: "0.875rem", lineHeight: "1.5" }}>
          {description}
        </p>
      </div>
      <div style={{ marginTop: "auto" }}>
        <span style={{ 
          fontSize: "0.75rem", 
          fontWeight: "600", 
          textTransform: "uppercase", 
          letterSpacing: "0.05em",
          color: "var(--primary)"
        }}>
          Enter Portal →
        </span>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
    label: string;
    value: string | number;
    icon: LucideIcon;
    trend?: {
        value: string;
        isPositive: boolean;
    };
}

export function StatsCard({ label, value, icon: Icon, trend }: StatsCardProps) {
    return (
        <div className="card" style={{ flex: 1, minWidth: "200px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <div style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "var(--radius-sm)",
                    background: "var(--primary-glow)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary)"
                }}>
                    <Icon size={20} />
                </div>
                {trend && (
                    <span style={{
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "100px",
                        background: trend.isPositive ? "rgba(16, 185, 129, 0.1)" : "rgba(239, 68, 68, 0.1)",
                        color: trend.isPositive ? "#10b981" : "#ef4444"
                    }}>
                        {trend.isPositive ? "+" : ""}{trend.value}
                    </span>
                )}
            </div>
            <div>
                <p style={{ color: "var(--text-soft)", fontSize: "0.875rem", fontWeight: "500", marginBottom: "0.25rem" }}>
                    {label}
                </p>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700" }}>{value}</h3>
            </div>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";

interface AttendanceRingProps {
    percentage: number;
    label: string;
    size?: number;
}

export function AttendanceRing({ percentage, label, size = 120 }: AttendanceRingProps) {
    const radius = (size - 20) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    const getColor = (p: number) => {
        if (p >= 75) return "#10b981"; // Green
        if (p >= 60) return "#f59e0b"; // Yellow
        return "#ef4444"; // Red
    };

    const color = getColor(percentage);

    return (
        <div className="card" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            padding: "1.5rem",
            flex: 1
        }}>
            <div style={{ position: "relative", width: size, height: size }}>
                <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="transparent"
                        stroke="var(--bg-soft)"
                        strokeWidth="10"
                    />
                    <motion.circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="transparent"
                        stroke={color}
                        strokeWidth="10"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        strokeLinecap="round"
                    />
                </svg>
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center"
                }}>
                    <span style={{ fontSize: "1.25rem", fontWeight: "700" }}>{percentage}%</span>
                </div>
            </div>
            <span style={{ fontWeight: "600", fontSize: "0.9375rem", textAlign: "center" }}>{label}</span>
        </div>
    );
}

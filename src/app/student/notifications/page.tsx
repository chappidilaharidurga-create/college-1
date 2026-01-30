"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
    Bell,
    Info,
    AlertTriangle,
    CheckCircle2,
    MessageSquare,
    Clock,
    MoreVertical
} from "lucide-react";
import { motion } from "framer-motion";

export default function NotificationsPage() {
    const notifications = [
        {
            id: 1,
            title: "Fee Payment Deadline",
            message: "The deadline for semester fee payment is Feb 15, 2026. Please clear any dues to avoid late fees.",
            type: "alert",
            time: "2 hours ago",
            icon: AlertTriangle,
            color: "#ef4444"
        },
        {
            id: 2,
            title: "Attendance Alert",
            message: "Your attendance in 'Database Systems' has dropped below 75%. Please meet your faculty advisor.",
            type: "warning",
            time: "5 hours ago",
            icon: Info,
            color: "#f59e0b"
        },
        {
            id: 3,
            title: "Assessment Graded",
            message: "Your submission for 'Assignment 1: Normalization' has been graded. Mark: 18/20.",
            type: "success",
            time: "Yesterday",
            icon: CheckCircle2,
            color: "#10b981"
        },
        {
            id: 4,
            title: "Campus Event: TechFest 2026",
            message: "Registration is now open for the annual TechFest. Visit the student portal for details.",
            type: "info",
            time: "2 days ago",
            icon: MessageSquare,
            color: "#3b82f6"
        }
    ];

    // Generic nav items (will adapt based on role in a real app)
    const navItems = [
        { label: "Dashboard", icon: Bell, href: "#" },
        { label: "Notifications", icon: Bell, href: "/notifications" },
    ];

    return (
        <DashboardLayout role="student" navItems={navItems}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700" }}>System Notifications</h2>
                <button className="btn-soft" style={{ fontSize: "0.875rem" }}>Mark all as read</button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {notifications.map((note, i) => (
                    <motion.div
                        key={note.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="card"
                        style={{
                            display: "flex",
                            gap: "1.25rem",
                            padding: "1.25rem",
                            alignItems: "flex-start",
                            borderLeft: `4px solid ${note.color}`
                        }}
                    >
                        <div style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            background: note.color + "1a",
                            color: note.color,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0
                        }}>
                            <note.icon size={20} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                                <h4 style={{ fontWeight: "700", fontSize: "0.9375rem" }}>{note.title}</h4>
                                <div style={{ fontSize: "0.75rem", color: "var(--text-soft)", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                                    <Clock size={12} /> {note.time}
                                </div>
                            </div>
                            <p style={{ fontSize: "0.875rem", color: "var(--text-soft)", lineHeight: "1.5" }}>{note.message}</p>
                        </div>
                        <button style={{ background: "transparent", border: "none", color: "var(--text-soft)", cursor: "pointer" }}>
                            <MoreVertical size={16} />
                        </button>
                    </motion.div>
                ))}
            </div>
        </DashboardLayout>
    );
}

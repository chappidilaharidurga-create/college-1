"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
    BarChart3,
    LayoutDashboard,
    BookOpen,
    Calendar,
    Bell,
    Clock,
    MapPin
} from "lucide-react";
import { motion } from "framer-motion";

export default function StudentTimetable() {
    const navItems = [
        { label: "Overview", icon: LayoutDashboard, href: "/student/dashboard" },
        { label: "My Courses", icon: BookOpen, href: "/student/courses" },
        { label: "Timetable", icon: Calendar, href: "/student/timetable" },
        { label: "Results", icon: BarChart3, href: "/student/results" },
        { label: "Notifications", icon: Bell, href: "/student/notifications" },
    ];

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM"];

    const schedule = [
        { day: "Monday", time: "09:00 AM", subject: "CN", room: "L-101", color: "#3b82f6" },
        { day: "Monday", time: "11:00 AM", subject: "DBMS", room: "L-202", color: "#10b981" },
        { day: "Tuesday", time: "09:00 AM", subject: "SE", room: "L-105", color: "#8b5cf6" },
        { day: "Wednesday", time: "10:00 AM", subject: "CN", room: "L-101", color: "#3b82f6" },
        { day: "Thursday", time: "02:00 PM", subject: "DBMS Lab", room: "LAB-02", color: "#10b981" },
        { day: "Friday", time: "11:00 AM", subject: "OS", room: "L-303", color: "#f59e0b" },
    ];

    const getSlot = (day: string, time: string) => {
        return schedule.find(s => s.day === day && s.time === time);
    };

    return (
        <DashboardLayout role="student" navItems={navItems}>
            <div style={{ marginBottom: "2rem" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700" }}>Weekly Academic Timetable</h2>
                <p style={{ color: "var(--text-soft)", fontSize: "0.875rem" }}>Semester V | Section A | Current Week</p>
            </div>

            <div className="card" style={{ padding: "0", overflowX: "auto" }}>
                <div style={{ minWidth: "800px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "100px repeat(5, 1fr)", background: "var(--bg-soft)", borderBottom: "1px solid var(--border)" }}>
                        <div style={{ padding: "1rem" }}></div>
                        {days.map(day => (
                            <div key={day} style={{ padding: "1rem", textAlign: "center", fontWeight: "700", fontSize: "0.875rem", borderLeft: "1px solid var(--border)" }}>
                                {day}
                            </div>
                        ))}
                    </div>

                    <div>
                        {timeSlots.map(slot => (
                            <div key={slot} style={{ display: "grid", gridTemplateColumns: "100px repeat(5, 1fr)", borderBottom: "1px solid var(--border)" }}>
                                <div style={{ padding: "1.5rem 0.5rem", textAlign: "center", fontSize: "0.75rem", color: "var(--text-soft)", fontWeight: "600" }}>
                                    {slot}
                                </div>
                                {days.map(day => {
                                    const entry = getSlot(day, slot);
                                    return (
                                        <div key={day} style={{ padding: "0.5rem", borderLeft: "1px solid var(--border)", minHeight: "100px", position: "relative" }}>
                                            {entry && (
                                                <motion.div
                                                    initial={{ scale: 0.9, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    style={{
                                                        background: entry.color + "1a",
                                                        borderLeft: `3px solid ${entry.color}`,
                                                        padding: "0.75rem",
                                                        borderRadius: "4px",
                                                        height: "100%"
                                                    }}
                                                >
                                                    <div style={{ fontWeight: "700", fontSize: "0.8125rem", color: entry.color, marginBottom: "0.25rem" }}>{entry.subject}</div>
                                                    <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.6875rem", color: "var(--text-soft)" }}>
                                                        <MapPin size={10} /> {entry.room}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/ui/StatsCard";
import {
    Presentation,
    Users,
    BookOpen,
    BarChart3,
    Bell,
    Clock,
    Calendar,
    CheckCircle2,
    AlertCircle
} from "lucide-react";
import { motion } from "framer-motion";

export default function FacultyDashboard() {
    const navItems = [
        { label: "Dashboard", icon: Presentation, href: "/faculty/dashboard" },
        { label: "Attendance", icon: Users, href: "/faculty/attendance" },
        { label: "Materials", icon: BookOpen, href: "/faculty/materials" },
        { label: "Assessments", icon: BarChart3, href: "/faculty/assessments" },
        { label: "Notifications", icon: Bell, href: "/faculty/notifications" },
    ];

    const todayClasses = [
        { time: "10:00 AM", subject: "Network Security", room: "L-202", status: "Upcoming" },
        { time: "02:00 PM", subject: "Parallel Computing Lab", room: "LAB-01", status: "Upcoming" },
    ];

    return (
        <DashboardLayout role="faculty" navItems={navItems}>
            <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
                <StatsCard label="Active Courses" value="4" icon={BookOpen} />
                <StatsCard label="Total Students" value="210" icon={Users} trend={{ value: "5 new", isPositive: true }} />
                <StatsCard label="Avg. Attendance" value="84%" icon={CheckCircle2} trend={{ value: "Stable", isPositive: true }} />
                <StatsCard label="Pending Grading" value="12" icon={AlertCircle} trend={{ value: "3 due today", isPositive: false }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                {/* Schedule */}
                <div className="card">
                    <h3 style={{ fontSize: "1.125rem", fontWeight: "700", marginBottom: "1.5rem" }}>Today's Lectures</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {todayClasses.map((lecture, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem", background: "var(--bg-soft)", borderRadius: "var(--radius-sm)" }}>
                                <div style={{ padding: "0.5rem", background: "var(--primary-glow)", color: "var(--primary)", borderRadius: "var(--radius-sm)" }}>
                                    <Clock size={20} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontWeight: "600" }}>{lecture.subject}</div>
                                    <div style={{ fontSize: "0.75rem", color: "var(--text-soft)" }}>{lecture.time} | Room {lecture.room}</div>
                                </div>
                                <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--primary)" }}>{lecture.status}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="card">
                    <h3 style={{ fontSize: "1.125rem", fontWeight: "700", marginBottom: "1.5rem" }}>Quick Actions</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                        <button className="btn-primary" style={{ height: "80px", flexDirection: "column", gap: "0.5rem" }}>
                            <Users size={20} /> Mark Attendance
                        </button>
                        <button className="btn-soft" style={{ height: "80px", flexDirection: "column", gap: "0.5rem", border: "1px solid var(--border)" }}>
                            <Upload size={20} /> Upload Material
                        </button>
                        <button className="btn-soft" style={{ height: "80px", flexDirection: "column", gap: "0.5rem", border: "1px solid var(--border)" }}>
                            <Bell size={20} /> Send Notify
                        </button>
                        <button className="btn-soft" style={{ height: "80px", flexDirection: "column", gap: "0.5rem", border: "1px solid var(--border)" }}>
                            <BarChart3 size={20} /> View Reports
                        </button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

import { Upload } from "lucide-react";

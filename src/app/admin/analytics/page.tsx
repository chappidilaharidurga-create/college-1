"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/ui/StatsCard";
import {
    Users,
    GraduationCap,
    Presentation,
    BookOpen,
    Settings,
    BarChart3,
    Bell,
    Activity,
    AlertTriangle
} from "lucide-react";
import { motion } from "framer-motion";

export default function AdminAnalytics() {
    const navItems = [
        { label: "Analytics", icon: BarChart3, href: "/admin/analytics" },
        { label: "Users", icon: Users, href: "/admin/users" },
        { label: "Departments", icon: BookOpen, href: "/admin/departments" },
        { label: "System Config", icon: Settings, href: "/admin/config" },
        { label: "Notifications", icon: Bell, href: "/admin/notifications" },
    ];

    const recentActivities = [
        { type: "user", user: "Admin", action: "Updated course curriculum", time: "10 mins ago" },
        { type: "attendance", user: "Prof. Smith", action: "Submitted CS201 attendance", time: "25 mins ago" },
        { type: "alert", user: "System", action: "Database backup completed", time: "1 hour ago" },
    ];

    return (
        <DashboardLayout role="admin" navItems={navItems}>
            {/* Overview Cards */}
            <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
                <StatsCard label="Total Students" value="2,450" icon={GraduationCap} trend={{ value: "12%", isPositive: true }} />
                <StatsCard label="Total Faculty" value="184" icon={Presentation} trend={{ value: "4", isPositive: true }} />
                <StatsCard label="Active Sessions" value="24" icon={Activity} trend={{ value: "High Load", isPositive: false }} />
                <StatsCard label="Systen Health" value="99.9%" icon={Settings} trend={{ value: "Stable", isPositive: true }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                {/* Simple Growth Chart Representation */}
                <div className="card">
                    <h2 style={{ fontSize: "1.125rem", fontWeight: "700", marginBottom: "1.5rem" }}>Admission Trends</h2>
                    <div style={{ height: "200px", display: "flex", alignItems: "flex-end", gap: "1rem", padding: "1rem 0" }}>
                        {[40, 60, 45, 90, 75, 100, 85].map((h, i) => (
                            <div key={i} style={{ flex: 1, position: "relative" }}>
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ delay: i * 0.1, duration: 0.8 }}
                                    style={{
                                        background: "var(--primary)",
                                        borderRadius: "4px 4px 0 0",
                                        width: "100%",
                                        minHeight: "4px"
                                    }}
                                />
                                <div style={{ position: "absolute", bottom: "-25px", left: "50%", transform: "translateX(-50%)", fontSize: "10px", color: "var(--text-soft)" }}>
                                    {2018 + i}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity Log */}
                <div className="card">
                    <h2 style={{ fontSize: "1.125rem", fontWeight: "700", marginBottom: "1.5rem" }}>Live Activity Feed</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {recentActivities.map((act, id) => (
                            <div key={id} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.75rem", background: "var(--bg-soft)", borderRadius: "var(--radius-sm)" }}>
                                <div style={{
                                    width: "32px",
                                    height: "32px",
                                    borderRadius: "50%",
                                    background: act.type === "alert" ? "rgba(239, 68, 68, 0.1)" : "var(--primary-glow)",
                                    color: act.type === "alert" ? "#ef4444" : "var(--primary)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    {act.type === "alert" ? <AlertTriangle size={16} /> : <Activity size={16} />}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontSize: "0.875rem", fontWeight: "600" }}>{act.user} - {act.action}</p>
                                    <p style={{ fontSize: "0.75rem", color: "var(--text-soft)" }}>{act.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

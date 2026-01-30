"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { AttendanceRing } from "@/components/ui/AttendanceRing";
import { StatsCard } from "@/components/ui/StatsCard";
import {
    LayoutDashboard,
    BookOpen,
    Calendar,
    BarChart3,
    Bell,
    GraduationCap,
    Clock,
    MapPin
} from "lucide-react";

export default function StudentDashboard() {
    const navItems = [
        { label: "Overview", icon: LayoutDashboard, href: "/student/dashboard" },
        { label: "My Courses", icon: BookOpen, href: "/student/courses" },
        { label: "Timetable", icon: Calendar, href: "/student/timetable" },
        { label: "Results", icon: BarChart3, href: "/student/results" },
        { label: "Notifications", icon: Bell, href: "/student/notifications" },
    ];

    const attendanceData = [
        { label: "Computer Networks", percentage: 85 },
        { label: "Database Systems", percentage: 72 },
        { label: "Software Engineering", percentage: 94 },
        { label: "Web Development", percentage: 61 },
    ];

    const schedule = [
        { time: "09:00 AM", subject: "Computer Networks", room: "L-102", color: "#3b82f6" },
        { time: "11:00 AM", subject: "Database Systems", room: "LAB-04", color: "#8b5cf6" },
        { time: "02:00 PM", subject: "Web Development", room: "L-301", color: "#10b981" },
    ];

    return (
        <DashboardLayout role="student" navItems={navItems}>
            {/* Top Stats */}
            <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
                <StatsCard
                    label="Total Credits"
                    value="24"
                    icon={GraduationCap}
                    trend={{ value: "2 pending", isPositive: true }}
                />
                <StatsCard
                    label="GPA"
                    value="3.82"
                    icon={BarChart3}
                    trend={{ value: "0.12", isPositive: true }}
                />
                <StatsCard
                    label="Attendance"
                    value="78%"
                    icon={Clock}
                    trend={{ value: "Above req.", isPositive: true }}
                />
                <StatsCard
                    label="Pending Tasks"
                    value="5"
                    icon={BookOpen}
                    trend={{ value: "2 due soon", isPositive: false }}
                />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1.5rem" }}>
                {/* Attendance Visualizer */}
                <div className="card">
                    <div style={{ marginBottom: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h2 style={{ fontSize: "1.125rem", fontWeight: "700" }}>Attendance by Course</h2>
                        <button className="btn-soft" style={{ fontSize: "0.75rem" }}>View Full Report</button>
                    </div>
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                        {attendanceData.map((data) => (
                            <AttendanceRing
                                key={data.label}
                                label={data.label}
                                percentage={data.percentage}
                                size={140}
                            />
                        ))}
                    </div>
                </div>

                {/* Timetable / Schedule */}
                <div className="card">
                    <div style={{ marginBottom: "1.5rem" }}>
                        <h2 style={{ fontSize: "1.125rem", fontWeight: "700" }}>Today's Schedule</h2>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {schedule.map((item, id) => (
                            <div key={id} style={{
                                display: "flex",
                                gap: "1rem",
                                padding: "1rem",
                                background: "var(--bg-soft)",
                                borderRadius: "var(--radius-sm)",
                                borderLeft: `4px solid ${item.color}`
                            }}>
                                <div style={{ fontWeight: "700", width: "70px", fontSize: "0.875rem" }}>{item.time}</div>
                                <div>
                                    <div style={{ fontWeight: "600", fontSize: "0.9375rem" }}>{item.subject}</div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", color: "var(--text-soft)", fontSize: "0.75rem", marginTop: "0.25rem" }}>
                                        <MapPin size={12} /> {item.room}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

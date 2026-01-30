"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
    BarChart3,
    LayoutDashboard,
    BookOpen,
    Calendar,
    Bell,
    Download,
    FileText,
    Award
} from "lucide-react";
import { motion } from "framer-motion";

export default function StudentResults() {
    const navItems = [
        { label: "Overview", icon: LayoutDashboard, href: "/student/dashboard" },
        { label: "My Courses", icon: BookOpen, href: "/student/courses" },
        { label: "Timetable", icon: Calendar, href: "/student/timetable" },
        { label: "Results", icon: BarChart3, href: "/student/results" },
        { label: "Notifications", icon: Bell, href: "/student/notifications" },
    ];

    const results = [
        { subject: "Computer Networks", code: "CS301", marks: 88, grade: "A", status: "Pass" },
        { subject: "Database Systems", code: "CS302", marks: 76, grade: "B+", status: "Pass" },
        { subject: "Software Engineering", code: "CS303", marks: 92, grade: "A+", status: "Pass" },
        { subject: "Theory of Computation", code: "CS304", marks: 65, grade: "C", status: "Pass" },
    ];

    return (
        <DashboardLayout role="student" navItems={navItems}>
            <div className="card" style={{ marginBottom: "2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                    <div>
                        <h2 style={{ fontSize: "1.25rem", fontWeight: "700" }}>Semester Examination Results</h2>
                        <p style={{ color: "var(--text-soft)", fontSize: "0.875rem" }}>Academic Year: 2024-25 | Semester: V</p>
                    </div>
                    <button className="btn-primary" style={{ gap: "0.5rem" }}>
                        <Download size={18} /> Download Marksheet
                    </button>
                </div>

                <div style={{ display: "grid", gap: "1rem" }}>
                    {results.map((res, i) => (
                        <motion.div
                            key={res.code}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="card"
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 100px 100px 100px",
                                alignItems: "center",
                                background: "var(--bg-soft)",
                                padding: "1.25rem"
                            }}
                        >
                            <div>
                                <h4 style={{ fontWeight: "600" }}>{res.subject}</h4>
                                <p style={{ fontSize: "0.75rem", color: "var(--text-soft)" }}>{res.code}</p>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <span style={{ fontSize: "0.875rem", color: "var(--text-soft)" }}>Marks</span>
                                <div style={{ fontWeight: "700" }}>{res.marks}/100</div>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <span style={{ fontSize: "0.875rem", color: "var(--text-soft)" }}>Grade</span>
                                <div style={{ fontWeight: "800", color: "var(--primary)" }}>{res.grade}</div>
                            </div>
                            <div style={{ textAlign: "right" }}>
                                <span style={{
                                    padding: "0.25rem 0.75rem",
                                    borderRadius: "100px",
                                    fontSize: "0.75rem",
                                    fontWeight: "700",
                                    background: "rgba(16, 185, 129, 0.1)",
                                    color: "#10b981"
                                }}>
                                    {res.status}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <div className="card" style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                    <div style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: "var(--primary-glow)",
                        color: "var(--primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Award size={32} />
                    </div>
                    <div>
                        <h3 style={{ fontSize: "1.125rem", fontWeight: "700" }}>Current SGPA: 8.42</h3>
                        <p style={{ fontSize: "0.875rem", color: "var(--text-soft)" }}>Top 10% of the department</p>
                    </div>
                </div>
                <div className="card" style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                    <div style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: "rgba(16, 185, 129, 0.1)",
                        color: "#10b981",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <FileText size={32} />
                    </div>
                    <div>
                        <h3 style={{ fontSize: "1.125rem", fontWeight: "700" }}>Backlogs: 0</h3>
                        <p style={{ fontSize: "0.875rem", color: "var(--text-soft)" }}>All subjects cleared till date</p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

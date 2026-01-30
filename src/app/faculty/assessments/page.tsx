"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
    Presentation,
    Users,
    BookOpen,
    BarChart3,
    Bell,
    Plus,
    FileEdit,
    CheckSquare,
    Clock,
    ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";

export default function FacultyAssessments() {
    const assessments = [
        {
            id: 1,
            name: "Mid-Term Quiz 1",
            subject: "Computer Networks",
            totalMarks: 20,
            submissions: 42,
            total: 45,
            status: "Grading Required",
            deadline: "Completed"
        },
        {
            id: 2,
            name: "Assignment 1: Normalization",
            subject: "Database Systems",
            totalMarks: 10,
            submissions: 45,
            total: 45,
            status: "Completed",
            deadline: "Completed"
        },
        {
            id: 3,
            name: "Project Prototype",
            subject: "Web Development",
            totalMarks: 50,
            submissions: 15,
            total: 40,
            status: "In Progress",
            deadline: "Feb 05, 2026"
        }
    ];

    const navItems = [
        { label: "Dashboard", icon: Presentation, href: "/faculty/dashboard" },
        { label: "Attendance", icon: Users, href: "/faculty/attendance" },
        { label: "Materials", icon: BookOpen, href: "/faculty/materials" },
        { label: "Assessments", icon: BarChart3, href: "/faculty/assessments" },
        { label: "Notifications", icon: Bell, href: "/faculty/notifications" },
    ];

    return (
        <DashboardLayout role="faculty" navItems={navItems}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700" }}>Manage Assessments</h2>
                <button className="btn-primary" style={{ gap: "0.5rem" }}>
                    <Plus size={18} /> Create New
                </button>
            </div>

            <div style={{ display: "grid", gap: "1.5rem" }}>
                {assessments.map((item, i) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="card"
                    >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                            <div>
                                <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--primary)", background: "var(--primary-glow)", padding: "0.25rem 0.625rem", borderRadius: "100px", marginBottom: "0.5rem", display: "inline-block" }}>
                                    {item.subject}
                                </span>
                                <h3 style={{ fontSize: "1.125rem", fontWeight: "700" }}>{item.name}</h3>
                            </div>
                            <div style={{ textAlign: "right" }}>
                                <div style={{ fontSize: "0.875rem", fontWeight: "600", color: item.status === "Completed" ? "#10b981" : "#f59e0b" }}>{item.status}</div>
                                <div style={{ fontSize: "0.75rem", color: "var(--text-soft)" }}>{item.deadline}</div>
                            </div>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", padding: "1rem", background: "var(--bg-soft)", borderRadius: "var(--radius-sm)", marginBottom: "1.5rem" }}>
                            <div style={{ textAlign: "center" }}>
                                <div style={{ fontSize: "0.75rem", color: "var(--text-soft)", marginBottom: "0.25rem" }}>Total Marks</div>
                                <div style={{ fontWeight: "700" }}>{item.totalMarks}</div>
                            </div>
                            <div style={{ textAlign: "center", borderLeft: "1px solid var(--border)", borderRight: "1px solid var(--border)" }}>
                                <div style={{ fontSize: "0.75rem", color: "var(--text-soft)", marginBottom: "0.25rem" }}>Submissions</div>
                                <div style={{ fontWeight: "700" }}>{item.submissions} / {item.total}</div>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <div style={{ fontSize: "0.75rem", color: "var(--text-soft)", marginBottom: "0.25rem" }}>Avg Score</div>
                                <div style={{ fontWeight: "700" }}>--</div>
                            </div>
                        </div>

                        <div style={{ display: "flex", gap: "1rem" }}>
                            <button className="btn-primary" style={{ flex: 1, gap: "0.5rem" }}>
                                <CheckSquare size={18} /> Grade Submissions
                            </button>
                            <button className="btn-soft" style={{ flex: 1, gap: "0.5rem" }}>
                                <FileEdit size={18} /> Edit Details
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </DashboardLayout>
    );
}

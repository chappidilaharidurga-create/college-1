"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
    BookOpen,
    Users,
    BarChart3,
    Settings,
    Bell,
    Building2,
    GraduationCap,
    Plus,
    ChevronRight,
    MoreVertical,
    Layers
} from "lucide-react";
import { motion } from "framer-motion";

interface Course {
    id: string;
    name: string;
    code: string;
    credits: number;
    studentsCount: number;
}

interface Department {
    id: string;
    name: string;
    head: string;
    courses: Course[];
    facultyCount: number;
}

export default function AdminDepartments() {
    const [departments, setDepartments] = useState<Department[]>([
        {
            id: "1",
            name: "Computer Science & Engineering",
            head: "Dr. Alan Turing",
            facultyCount: 42,
            courses: [
                { id: "c1", name: "Data Structures", code: "CS101", credits: 4, studentsCount: 120 },
                { id: "c2", name: "Algorithms", code: "CS201", credits: 4, studentsCount: 115 },
                { id: "c3", name: "Cloud Computing", code: "CS305", credits: 3, studentsCount: 88 },
            ]
        },
        {
            id: "2",
            name: "Electronics & Communication",
            head: "Dr. Nikola Tesla",
            facultyCount: 35,
            courses: [
                { id: "c4", name: "Digital Logic Design", code: "EC102", credits: 4, studentsCount: 95 },
                { id: "c5", name: "Microprocessors", code: "EC205", credits: 4, studentsCount: 82 },
            ]
        },
        {
            id: "3",
            name: "Information Technology",
            head: "Dr. Grace Hopper",
            facultyCount: 28,
            courses: [
                { id: "c6", name: "Web Security", code: "IT301", credits: 3, studentsCount: 74 },
            ]
        }
    ]);

    const navItems = [
        { label: "Analytics", icon: BarChart3, href: "/admin/analytics" },
        { label: "Users", icon: Users, href: "/admin/users" },
        { label: "Departments", icon: BookOpen, href: "/admin/departments" },
        { label: "System Config", icon: Settings, href: "/admin/config" },
        { label: "Notifications", icon: Bell, href: "/admin/notifications" },
    ];

    return (
        <DashboardLayout role="admin" navItems={navItems}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <div>
                    <h2 style={{ fontSize: "1.25rem", fontWeight: "700" }}>Department & Course Management</h2>
                    <p style={{ color: "var(--text-soft)", fontSize: "0.875rem" }}>Total Departments: {departments.length}</p>
                </div>
                <button className="btn-primary" style={{ gap: "0.5rem" }}>
                    <Plus size={18} /> New Department
                </button>
            </div>

            <div style={{ display: "grid", gap: "1.5rem" }}>
                {departments.map((dept, i) => (
                    <motion.div
                        key={dept.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="card"
                        style={{ padding: "0" }}
                    >
                        {/* Dept Header */}
                        <div style={{ padding: "1.5rem", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-sm)", background: "var(--primary-glow)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Building2 size={24} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: "1.125rem", fontWeight: "700" }}>{dept.name}</h3>
                                    <p style={{ fontSize: "0.875rem", color: "var(--text-soft)" }}>Head: {dept.head} | {dept.facultyCount} Faculty Members</p>
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "0.5rem" }}>
                                <button className="btn-soft"><Layers size={16} /> Manage</button>
                                <button className="btn-soft"><MoreVertical size={16} /></button>
                            </div>
                        </div>

                        {/* Courses Table */}
                        <div style={{ padding: "1.5rem" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                                <h4 style={{ fontSize: "0.875rem", fontWeight: "600", color: "var(--text-soft)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Offered Courses</h4>
                                <button style={{ background: "transparent", border: "none", color: "var(--primary)", fontSize: "0.75rem", fontWeight: "700", cursor: "pointer" }}>+ ADD COURSE</button>
                            </div>
                            <div style={{ display: "grid", gap: "0.75rem" }}>
                                {dept.courses.map((course) => (
                                    <div
                                        key={course.id}
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: "1fr 100px 100px 100px 40px",
                                            alignItems: "center",
                                            padding: "1rem",
                                            background: "var(--bg-soft)",
                                            borderRadius: "var(--radius-sm)",
                                            fontSize: "0.875rem"
                                        }}
                                    >
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                            <BookOpen size={16} style={{ color: "var(--primary)" }} />
                                            <div>
                                                <div style={{ fontWeight: "600" }}>{course.name}</div>
                                                <div style={{ fontSize: "0.75rem", color: "var(--text-soft)" }}>{course.code}</div>
                                            </div>
                                        </div>
                                        <div style={{ textAlign: "center" }}>
                                            <span style={{ color: "var(--text-soft)", fontSize: "0.75rem" }}>Credits</span>
                                            <div style={{ fontWeight: "700" }}>{course.credits}</div>
                                        </div>
                                        <div style={{ textAlign: "center" }}>
                                            <span style={{ color: "var(--text-soft)", fontSize: "0.75rem" }}>Students</span>
                                            <div style={{ fontWeight: "700" }}>{course.studentsCount}</div>
                                        </div>
                                        <div style={{ textAlign: "right", color: "var(--primary)", fontWeight: "600" }}>Active</div>
                                        <button style={{ background: "transparent", border: "none", color: "var(--text-soft)", cursor: "pointer", textAlign: "right" }}>
                                            <ChevronRight size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </DashboardLayout>
    );
}

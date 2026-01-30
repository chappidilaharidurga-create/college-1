"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Presentation, Users, BookOpen, BarChart3, Bell, Check, X, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Student {
    id: string;
    name: string;
    rollNo: string;
    status: "present" | "absent" | "late";
}

export default function FacultyAttendance() {
    const [students, setStudents] = useState<Student[]>([
        { id: "1", name: "Alex Johnson", rollNo: "CS201", status: "present" },
        { id: "2", name: "Sarah Williams", rollNo: "CS202", status: "present" },
        { id: "3", name: "John Davis", rollNo: "CS203", status: "absent" },
        { id: "4", name: "Emily Brown", rollNo: "CS204", status: "late" },
        { id: "5", name: "Michael Wilson", rollNo: "CS205", status: "present" },
    ]);

    const navItems = [
        { label: "Dashboard", icon: Presentation, href: "/faculty/dashboard" },
        { label: "Attendance", icon: Users, href: "/faculty/attendance" },
        { label: "Materials", icon: BookOpen, href: "/faculty/materials" },
        { label: "Assessments", icon: BarChart3, href: "/faculty/assessments" },
        { label: "Notifications", icon: Bell, href: "/faculty/notifications" },
    ];

    const updateStatus = (id: string, status: Student["status"]) => {
        setStudents(students.map(s => s.id === id ? { ...s, status } : s));
    };

    return (
        <DashboardLayout role="faculty" navItems={navItems}>
            <div className="card" style={{ marginBottom: "2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                    <div>
                        <h2 style={{ fontSize: "1.25rem", fontWeight: "700" }}>Mark Attendance</h2>
                        <p style={{ color: "var(--text-soft)", fontSize: "0.875rem" }}>Subject: Computer Networks | Section A</p>
                    </div>
                    <div style={{ display: "flex", gap: "1rem" }}>
                        <button className="btn-soft">Download List</button>
                        <button className="btn-primary">Submit Attendance</button>
                    </div>
                </div>

                <div style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 0.5rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 2fr", padding: "1rem", color: "var(--text-soft)", fontSize: "0.875rem", fontWeight: "600" }}>
                        <div>ROLL NO</div>
                        <div>STUDENT NAME</div>
                        <div style={{ textAlign: "right" }}>ATTENDANCE STATUS</div>
                    </div>

                    <AnimatePresence>
                        {students.map((student) => (
                            <motion.div
                                key={student.id}
                                layout
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr 2fr",
                                    padding: "1rem",
                                    background: "var(--bg-soft)",
                                    borderRadius: "var(--radius-sm)",
                                    alignItems: "center",
                                    marginBottom: "0.5rem"
                                }}
                            >
                                <div style={{ fontWeight: "700" }}>{student.rollNo}</div>
                                <div style={{ fontWeight: "500" }}>{student.name}</div>
                                <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
                                    <button
                                        onClick={() => updateStatus(student.id, "present")}
                                        style={{
                                            padding: "0.5rem 1rem",
                                            borderRadius: "var(--radius-sm)",
                                            background: student.status === "present" ? "#10b981" : "transparent",
                                            color: student.status === "present" ? "white" : "var(--text-soft)",
                                            border: "1px solid var(--border)",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.25rem",
                                            fontSize: "0.75rem",
                                            fontWeight: "600"
                                        }}
                                    >
                                        <Check size={14} /> Present
                                    </button>
                                    <button
                                        onClick={() => updateStatus(student.id, "late")}
                                        style={{
                                            padding: "0.5rem 1rem",
                                            borderRadius: "var(--radius-sm)",
                                            background: student.status === "late" ? "#f59e0b" : "transparent",
                                            color: student.status === "late" ? "white" : "var(--text-soft)",
                                            border: "1px solid var(--border)",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.25rem",
                                            fontSize: "0.75rem",
                                            fontWeight: "600"
                                        }}
                                    >
                                        <Minus size={14} /> Late
                                    </button>
                                    <button
                                        onClick={() => updateStatus(student.id, "absent")}
                                        style={{
                                            padding: "0.5rem 1rem",
                                            borderRadius: "var(--radius-sm)",
                                            background: student.status === "absent" ? "#ef4444" : "transparent",
                                            color: student.status === "absent" ? "white" : "var(--text-soft)",
                                            border: "1px solid var(--border)",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.25rem",
                                            fontSize: "0.75rem",
                                            fontWeight: "600"
                                        }}
                                    >
                                        <X size={14} /> Absent
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </DashboardLayout>
    );
}

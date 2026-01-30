"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
    Presentation,
    Users,
    BookOpen,
    BarChart3,
    Bell,
    Upload,
    File,
    MoreVertical,
    ExternalLink,
    Trash2
} from "lucide-react";
import { motion } from "framer-motion";

export default function FacultyMaterials() {
    const navItems = [
        { label: "Dashboard", icon: Presentation, href: "/faculty/dashboard" },
        { label: "Attendance", icon: Users, href: "/faculty/attendance" },
        { label: "Materials", icon: BookOpen, href: "/faculty/materials" },
        { label: "Assessments", icon: BarChart3, href: "/faculty/assessments" },
        { label: "Notifications", icon: Bell, href: "/faculty/notifications" },
    ];

    const materials = [
        { id: 1, name: "Lecture 05: Network Layer Protocols.pdf", type: "PDF", size: "2.4 MB", date: "Jan 28, 2026" },
        { id: 2, name: "Assignment 1: Database Normalization.docx", type: "DOCX", size: "450 KB", date: "Jan 25, 2026" },
        { id: 3, name: "Lab Manual: Web sockets and RTC.pdf", type: "PDF", size: "5.1 MB", date: "Jan 20, 2026" },
    ];

    return (
        <DashboardLayout role="faculty" navItems={navItems}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "700" }}>Learning Materials</h2>
                <button className="btn-primary" style={{ gap: "0.5rem" }}>
                    <Upload size={18} /> Upload New Material
                </button>
            </div>

            <div className="card">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 100px 150px 100px", padding: "1rem", color: "var(--text-soft)", fontSize: "0.875rem", fontWeight: "600", borderBottom: "1px solid var(--border)" }}>
                    <div>FILE NAME</div>
                    <div>TYPE</div>
                    <div>UPLOADED ON</div>
                    <div style={{ textAlign: "right" }}>ACTIONS</div>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    {materials.map((file, i) => (
                        <motion.div
                            key={file.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 100px 150px 100px",
                                padding: "1.25rem 1rem",
                                alignItems: "center",
                                borderBottom: i === materials.length - 1 ? "none" : "1px solid var(--border)",
                                transition: "background 0.2s ease"
                            }}
                            className="file-row"
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                <div style={{
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "var(--radius-sm)",
                                    background: "var(--bg-soft)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "var(--primary)"
                                }}>
                                    <File size={18} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: "600", fontSize: "0.9375rem" }}>{file.name}</div>
                                    <div style={{ fontSize: "0.75rem", color: "var(--text-soft)" }}>{file.size}</div>
                                </div>
                            </div>
                            <div style={{ fontSize: "0.875rem", fontWeight: "600", color: "var(--text-soft)" }}>{file.type}</div>
                            <div style={{ fontSize: "0.875rem", color: "var(--text-soft)" }}>{file.date}</div>
                            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
                                <button className="btn-soft" style={{ padding: "0.5rem" }}><ExternalLink size={16} /></button>
                                <button className="btn-soft" style={{ padding: "0.5rem", color: "#ef4444" }}><Trash2 size={16} /></button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Course Stats for Materials */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginTop: "2rem" }}>
                <div className="card" style={{ background: "var(--bg-card)" }}>
                    <h4 style={{ color: "var(--text-soft)", fontSize: "0.75rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Student Access</h4>
                    <div style={{ fontSize: "1.5rem", fontWeight: "700" }}>94% <span style={{ fontSize: "0.875rem", color: "#10b981", fontWeight: "500" }}>+2%</span></div>
                </div>
                <div className="card">
                    <h4 style={{ color: "var(--text-soft)", fontSize: "0.75rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Storage Used</h4>
                    <div style={{ fontSize: "1.5rem", fontWeight: "700" }}>1.2 GB / 5GB</div>
                </div>
                <div className="card">
                    <h4 style={{ color: "var(--text-soft)", fontSize: "0.75rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Total Downloads</h4>
                    <div style={{ fontSize: "1.5rem", fontWeight: "700" }}>1,240</div>
                </div>
            </div>
        </DashboardLayout>
    );
}

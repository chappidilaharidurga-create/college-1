"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
    Users,
    BarChart3,
    BookOpen,
    Settings,
    Bell,
    Search,
    Plus,
    MoreVertical,
    Mail,
    Shield,
    UserCheck,
    UserX
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface UserRecord {
    id: string;
    name: string;
    email: string;
    role: "Student" | "Faculty" | "Admin";
    department: string;
    status: "Active" | "Inactive";
}

export default function AdminUsers() {
    const [users, setUsers] = useState<UserRecord[]>([
        { id: "1", name: "Dr. Robert Smith", email: "robert.smith@college.edu", role: "Faculty", department: "Computer Science", status: "Active" },
        { id: "2", name: "Alice Johnson", email: "alice.j@student.edu", role: "Student", department: "Information Tech", status: "Active" },
        { id: "3", name: "Admin Carol", email: "carol.admin@college.edu", role: "Admin", department: "Administration", status: "Active" },
        { id: "4", name: "Mark Wilson", email: "mark.w@student.edu", role: "Student", department: "Mechanical Eng", status: "Inactive" },
        { id: "5", name: "Prof. Sarah White", email: "sarah.white@college.edu", role: "Faculty", department: "Mathematics", status: "Active" },
    ]);

    const [searchQuery, setSearchQuery] = useState("");

    const navItems = [
        { label: "Analytics", icon: BarChart3, href: "/admin/analytics" },
        { label: "Users", icon: Users, href: "/admin/users" },
        { label: "Departments", icon: BookOpen, href: "/admin/departments" },
        { label: "System Config", icon: Settings, href: "/admin/config" },
        { label: "Notifications", icon: Bell, href: "/admin/notifications" },
    ];

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleStatus = (id: string) => {
        setUsers(users.map(u => u.id === id ? { ...u, status: u.status === "Active" ? "Inactive" : "Active" } : u));
    };

    return (
        <DashboardLayout role="admin" navItems={navItems}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <div>
                    <h2 style={{ fontSize: "1.25rem", fontWeight: "700" }}>User Management</h2>
                    <p style={{ color: "var(--text-soft)", fontSize: "0.875rem" }}>Total Users: {users.length}</p>
                </div>
                <button className="btn-primary" style={{ gap: "0.5rem" }}>
                    <Plus size={18} /> Add New User
                </button>
            </div>

            <div className="card" style={{ padding: "0" }}>
                {/* Toolbar */}
                <div style={{ padding: "1.25rem", borderBottom: "1px solid var(--border)", display: "flex", gap: "1rem" }}>
                    <div style={{ position: "relative", flex: 1 }}>
                        <Search size={18} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "var(--text-soft)" }} />
                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "0.625rem 0.625rem 0.625rem 2.5rem",
                                borderRadius: "var(--radius-sm)",
                                border: "1px solid var(--border)",
                                background: "var(--bg-soft)",
                                color: "var(--text-main)",
                                fontSize: "0.875rem"
                            }}
                        />
                    </div>
                    <button className="btn-soft" style={{ gap: "0.5rem" }}>
                        <Shield size={18} /> Permissions
                    </button>
                </div>

                {/* User Table */}
                <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                            <tr style={{ textAlign: "left", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-soft)", borderBottom: "1px solid var(--border)" }}>
                                <th style={{ padding: "1rem 1.25rem" }}>User</th>
                                <th style={{ padding: "1rem 1.25rem" }}>Role</th>
                                <th style={{ padding: "1rem 1.25rem" }}>Department</th>
                                <th style={{ padding: "1rem 1.25rem" }}>Status</th>
                                <th style={{ padding: "1rem 1.25rem", textAlign: "right" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user, i) => (
                                <motion.tr
                                    key={user.id}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    style={{ borderBottom: i === filteredUsers.length - 1 ? "none" : "1px solid var(--border)", transition: "background 0.2s ease" }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = "var(--bg-soft)"}
                                    onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                                >
                                    <td style={{ padding: "1.25rem" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                            <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--primary-glow)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "0.75rem" }}>
                                                {user.name.split(" ").map(n => n[0]).join("")}
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: "600", fontSize: "0.9375rem" }}>{user.name}</div>
                                                <div style={{ fontSize: "0.75rem", color: "var(--text-soft)", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                                                    <Mail size={12} /> {user.email}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ padding: "1.25rem" }}>
                                        <span style={{
                                            fontSize: "0.75rem",
                                            fontWeight: "700",
                                            padding: "0.25rem 0.5rem",
                                            borderRadius: "4px",
                                            background: user.role === "Admin" ? "#8b5cf61a" : user.role === "Faculty" ? "#10b9811a" : "#3b82f61a",
                                            color: user.role === "Admin" ? "#8b5cf6" : user.role === "Faculty" ? "#10b981" : "#3b82f6"
                                        }}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td style={{ padding: "1.25rem", fontSize: "0.875rem", color: "var(--text-soft)" }}>{user.department}</td>
                                    <td style={{ padding: "1.25rem" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", fontWeight: "500", color: user.status === "Active" ? "#10b981" : "#ef4444" }}>
                                            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: user.status === "Active" ? "#10b981" : "#ef4444" }}></div>
                                            {user.status}
                                        </div>
                                    </td>
                                    <td style={{ padding: "1.25rem", textAlign: "right" }}>
                                        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
                                            <button
                                                onClick={() => toggleStatus(user.id)}
                                                className="btn-soft"
                                                style={{ padding: "0.4rem", color: user.status === "Active" ? "#ef4444" : "#10b981" }}
                                                title={user.status === "Active" ? "Deactivate" : "Activate"}
                                            >
                                                {user.status === "Active" ? <UserX size={16} /> : <UserCheck size={16} />}
                                            </button>
                                            <button className="btn-soft" style={{ padding: "0.4rem" }}>
                                                <MoreVertical size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                    {filteredUsers.length === 0 && (
                        <div style={{ padding: "4rem", textAlign: "center", color: "var(--text-soft)" }}>
                            <Users size={48} style={{ opacity: 0.2, marginBottom: "1rem" }} />
                            <p>No users found matching your search.</p>
                        </div>
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
}

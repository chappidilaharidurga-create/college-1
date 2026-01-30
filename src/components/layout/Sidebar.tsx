"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    ChevronLeft,
    ChevronRight,
    LayoutDashboard,
    GraduationCap,
    Presentation,
    BookOpen,
    Calendar,
    BarChart3,
    Bell,
    Settings,
    LogOut,
    Users
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
    label: string;
    icon: any;
    href: string;
}

interface SidebarProps {
    role: "student" | "faculty" | "admin";
    navItems: NavItem[];
}

export function Sidebar({ role, navItems }: SidebarProps) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const pathname = usePathname();

    return (
        <motion.aside
            initial={false}
            animate={{ width: isCollapsed ? "80px" : "280px" }}
            className="glass"
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                position: "sticky",
                top: 0,
                zIndex: 50,
                transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                borderRight: "1px solid var(--border)",
                background: "var(--bg-card)"
            }}
            data-theme={role}
        >
            {/* Brand Header */}
            <div style={{
                padding: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: isCollapsed ? "center" : "space-between",
                borderBottom: "1px solid var(--border)"
            }}>
                {!isCollapsed && (
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--primary)" }}
                    >
                        CMS.EDU
                    </motion.h2>
                )}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="btn-soft"
                    style={{ width: "32px", height: "32px", padding: 0 }}
                >
                    {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                </button>
            </div>

            {/* Nav Items */}
            <nav style={{ flex: 1, padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
                            <motion.div
                                whileHover={{ x: 5 }}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                    padding: "0.75rem",
                                    borderRadius: "var(--radius-sm)",
                                    background: isActive ? "var(--primary-glow)" : "transparent",
                                    color: isActive ? "var(--primary)" : "var(--text-soft)",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease"
                                }}
                            >
                                <item.icon size={20} />
                                {!isCollapsed && (
                                    <span style={{ fontWeight: isActive ? "600" : "500", fontSize: "0.9375rem" }}>
                                        {item.label}
                                    </span>
                                )}
                            </motion.div>
                        </Link>
                    );
                })}
            </nav>

            {/* User Footer */}
            <div style={{
                padding: "1rem",
                borderTop: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                gap: "1rem"
            }}>
                <div style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "var(--primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    flexShrink: 0
                }}>
                    {role[0].toUpperCase()}
                </div>
                {!isCollapsed && (
                    <div style={{ flex: 1, overflow: "hidden" }}>
                        <p style={{ fontSize: "0.875rem", fontWeight: "600", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {role.charAt(0).toUpperCase() + role.slice(1)} User
                        </p>
                        <p style={{ fontSize: "0.75rem", color: "var(--text-soft)" }}>Online</p>
                    </div>
                )}
                {!isCollapsed && (
                    <button className="btn-soft" style={{ padding: "0.5rem" }}>
                        <LogOut size={16} />
                    </button>
                )}
            </div>
        </motion.aside>
    );
}

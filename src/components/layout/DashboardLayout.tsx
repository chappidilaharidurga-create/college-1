"use client";

import { Sidebar } from "./Sidebar";
import { ReactNode } from "react";

interface DashboardLayoutProps {
    children: ReactNode;
    role: "student" | "faculty" | "admin";
    navItems: { label: string; icon: any; href: string }[];
}

export function DashboardLayout({ children, role, navItems }: DashboardLayoutProps) {
    return (
        <div style={{ display: "flex", minHeight: "100vh", background: "var(--bg-soft)" }} data-theme={role}>
            <Sidebar role={role} navItems={navItems} />
            <main style={{ flex: 1, padding: "2rem", overflowY: "auto" }}>
                {/* Header/Topbar can go here if needed */}
                <header style={{
                    marginBottom: "2rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <div>
                        <h1 style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                            {role.charAt(0).toUpperCase() + role.slice(1)} Dashboard
                        </h1>
                        <p style={{ color: "var(--text-soft)", fontSize: "0.875rem" }}>
                            Welcome back to your workspace.
                        </p>
                    </div>
                    <div style={{ display: "flex", gap: "1rem" }}>
                        <div className="card" style={{ padding: "0.5rem 1rem", fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" }}></span>
                            System Status: Optimal
                        </div>
                    </div>
                </header>

                <div className="animate-in">
                    {children}
                </div>
            </main>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import { GraduationCap, Presentation, LayoutDashboard } from "lucide-react";
import { RoleCard } from "@/components/auth/RoleCard";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const roles = [
    {
      title: "Student Portal",
      description: "Access your attendance, course materials, grades, and academic schedule in one place.",
      icon: GraduationCap,
      theme: "student" as const,
      path: "/student/dashboard",
    },
    {
      title: "Faculty Portal",
      description: "Manage student attendance, upload resources, and track laboratory performance.",
      icon: Presentation,
      theme: "faculty" as const,
      path: "/faculty/attendance",
    },
    {
      title: "Admin Dashboard",
      description: "Oversee system-wide operations, manage users, and generate comprehensive reports.",
      icon: LayoutDashboard,
      theme: "admin" as const,
      path: "/admin/analytics",
    },
  ];

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      background: "radial-gradient(circle at top right, var(--primary-glow) 0%, transparent 40%), radial-gradient(circle at bottom left, var(--primary-glow) 0%, transparent 40%)"
    }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "4rem" }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
          CMS <span style={{ color: "var(--primary)" }}>Portal</span>
        </h1>
        <p style={{ color: "var(--text-soft)", fontSize: "1.125rem", maxWidth: "600px" }}>
          Select your role to access the College Management System. Experience a modular and integrated approach to academic excellence.
        </p>
      </motion.div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
        width: "100%",
        maxWidth: "1100px"
      }}>
        {roles.map((role, index) => (
          <motion.div
            key={role.theme}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <RoleCard
              {...role}
              onClick={() => router.push(role.path)}
            />
          </motion.div>
        ))}
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ marginTop: "6rem", color: "var(--text-soft)", fontSize: "0.875rem" }}
      >
        © {new Date().getFullYear()} College Management System. All rights reserved.
      </motion.footer>
    </main>
  );
}

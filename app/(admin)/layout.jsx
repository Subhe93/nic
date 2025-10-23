"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../globals.css";
import AdminNavbar from "../components/AdminNavbar/navbar";
export default function AdminLayout({ children }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

 

  return (
    <html lang="en">
      <body>
        <>
          {isAuthenticated && <AdminNavbar />}
          <div>{children}</div>
        </>
      </body>
    </html>
  );
}

import { useEffect, useState } from "react";
import {
  User, BarChart2, Search, SearchCheck, Zap, Briefcase,
  Users, UsersRound, Home, CalendarCheck, FileBarChart, HelpCircle, Menu
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

// Navigasyon elemanları
const navItems = [
  { to: "/my-data", label: "My Data", icon: User },
  { to: "/diagramm", label: "Diagramm", icon: BarChart2 },
  { to: "/staffing", label: "Staffing Selection", icon: Search },
  { to: "/skill-cv", label: "Skill & CV Search", icon: SearchCheck },
  { to: "/my-skills", label: "My Skills", icon: Zap },
  { to: "/project", label: "Project Management", icon: Briefcase },
  { to: "/personel", label: "Personel Data", icon: Users },
  { to: "/client", label: "Client Data", icon: UsersRound },
  { to: "/positions", label: "Open Positions", icon: Home },
  { to: "/vacation", label: "Vacation Approval", icon: CalendarCheck },
  { to: "/reports", label: "Reports", icon: FileBarChart },
  { to: "/help", label: "Help", icon: HelpCircle },
];

// Kullanıcı bilgisi
const user = {
  name: "Helga Ramona",
  email: "ramona@gmail.com",
  profilePic: "https://i.pravatar.cc/40",
};

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(() => {
    const saved = localStorage.getItem("sidebar-collapsed");
    return saved ? JSON.parse(saved) : false;
  });

  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("sidebar-collapsed", JSON.stringify(collapsed));
  }, [collapsed]);

  return (
    <aside
      className={cn(
        "bg-background border-r min-h-screen p-4 transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Menüyü daraltma/açma butonu */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="text-muted-foreground mb-6"
      >
        <Menu />
      </button>

      {/* Navigasyon */}
      <nav className="flex-1 space-y-2">
        {navItems.map(({ to, label, icon: Icon }) => {
          const isActive = location.pathname === to;
          return (
            <Link key={to} to={to}>
              <div
                className={cn(
                  "flex items-center gap-3 p-2 rounded-md transition-all",
                  isActive
                    ? "bg-muted text-foreground font-semibold shadow"
                    : "hover:bg-muted"
                )}
              >
                <Icon className="w-5 h-5" />
                {!collapsed && <span>{label}</span>}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Kullanıcı bilgisi */}
      {!collapsed && (
        <div className="mt-auto bg-muted p-3 rounded-md text-sm flex gap-3 items-center">
          <img
            src={user.profilePic}
            className="rounded-full w-10 h-10"
            alt="profile"
          />
          <div>
            <p className="font-semibold text-foreground">{user.name}</p>
            <p className="text-xs text-green-500">Online</p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
        </div>
      )}
    </aside>
  );
}

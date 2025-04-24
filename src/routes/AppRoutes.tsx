// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom"
import StaffingSelection from "@/features/staffing/StaffingSelection"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/staffing" element={<StaffingSelection />} />
      {/* Diğer rotalar */}
    </Routes>
  )
}

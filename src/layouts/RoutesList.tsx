import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RTLLayout from "./RTLLayout";
import AuthLayout from "./AuthLayout";
import AdminLayout from "./AdminLayout";

function RoutesList() {
    return (
        <BrowserRouter>
            {/* The rest of your app goes here */}
            <Routes>
                <Route path="auth/*" element={<AuthLayout />} />
                <Route path="admin/*" element={<AdminLayout />} />
                <Route path="rtl/*" element={<RTLLayout />} />
                <Route path="/" element={<Navigate to="/auth/login" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesList;
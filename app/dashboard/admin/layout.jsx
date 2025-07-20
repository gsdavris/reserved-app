'use client';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default function AdminLayout({ children }) {
	return <DashboardLayout userRole='admin'>{children}</DashboardLayout>;
}

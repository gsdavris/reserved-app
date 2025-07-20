'use client';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default function PartnerLayout({ children }) {
	return <DashboardLayout userRole='partner'>{children}</DashboardLayout>;
}

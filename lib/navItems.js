import { LayoutDashboard, Image, Users, LogOut, Map } from 'lucide-react';

export const navItemsByRole = {
    partner: [
        { name: 'Overview', icon: LayoutDashboard, href: '/dashboard/partner' },
        { name: 'Experiences', icon: Map, href: '/dashboard/partner/experiences' },
        { name: 'Media Library', icon: Image, href: '/dashboard/media' },
        { name: 'Logout', icon: LogOut, href: '/logout' },
    ],
    admin: [
        { name: 'Admin Panel', icon: LayoutDashboard, href: '/dashboard/admin' },
        { name: 'Partners', icon: Users, href: '/dashboard/admin/partners' },
        { name: 'Experiences', icon: Map, href: '/dashboard/admin/experiences' },
        { name: 'Media Library', icon: Image, href: '/dashboard/media' },
        { name: 'Logout', icon: LogOut, href: '/logout' },
    ],
};

'use client'
import dynamic from 'next/dynamic';
import withRouterCheck from '../../utils/withRouterCheck';

const DynamicNavbar = dynamic(() => import('./Navbar'), { ssr: false });
const NavbarWithRouterCheck = withRouterCheck(DynamicNavbar);

export default NavbarWithRouterCheck;
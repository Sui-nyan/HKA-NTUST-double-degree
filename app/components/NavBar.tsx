"use client";

import Link from "next/link";
import {useState} from "react";
import {AppBar, Button, Container, Menu, MenuItem, Toolbar, Typography} from "@mui/material";

import {RouteItem, routes} from "@/lib/routes";

export default function NavBar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [activeMenu, setActiveMenu] = useState<RouteItem[] | null>(null);

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>, items: RouteItem[]) => {
        setAnchorEl(event.currentTarget);
        setActiveMenu(items);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
        setActiveMenu(null);
    };

    return (
        <nav className="absolute top-0 left-0 w-full z-10 bg-slate-800 sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        HKA-NTUST Double Degree
                    </Typography>

                    {routes.map((route) => {
                        const hasChildren = Array.isArray(route.children) && route.children.length > 0;

                        if (!hasChildren) {
                            return (
                                <Button key={route.href} color="inherit" component={Link} href={route.href}>
                                    {route.label}
                                </Button>
                            );
                        }

                        return (
                            <div key={route.href}>
                                <Button
                                    color="inherit"
                                    onClick={(event) => handleOpenMenu(event, route.children ?? [])}
                                >
                                    {route.label}
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl) && activeMenu === route.children}
                                    onClose={handleCloseMenu}
                                    keepMounted
                                >
                                    {route.children?.map((child) => (
                                        <MenuItem key={child.href} onClick={handleCloseMenu} component={Link} href={child.href}>
                                            {child.label}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </div>
                        );
                    })}
                </Toolbar>
            </Container>
        </nav>
    );
}

"use client";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

interface SideBarItemProps {
    title: string;
    href: string;
    icon: string;
}

export const SideBarItem = ({ title, href, icon }: SideBarItemProps ) => {
    const pathName = usePathname();
    const active = pathName === href;
    return (
        <Button variant={active ? "super" : "superOutline"} className="justify-start h-[52px]" asChild>
            <Link href={href}>
                <Image src={icon} alt={title} className="mr-5" height={20} width={20} />
                {title}
            </Link>
        </Button>
    )
}
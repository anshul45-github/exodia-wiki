import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SideBarItem } from "./sidebar-item";
import { Button } from "./ui/button";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps ) => {
    return (
        <div className={cn("h-full lg:w-[256px] lg:fixed flex left-0 top-0 px-4 border-r-2 flex-col", className)}>
            <Link href="/">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src={"/adventurer_action1.png"} alt="Adventurer" width={40} height={40} />
                    <h1 className="text-2xl font-extrabold text-blue-600 tracking-wide">Exodia Wiki</h1>
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SideBarItem title="About" href="/" icon="/home.svg" />
                <SideBarItem title="Past Editions" href="/past" icon="/past.svg" />
                <SideBarItem title="Sponsors & Partners" href="/sponsor" icon="/sponsor.svg" />
                <SideBarItem title="FAQ" href="/faq" icon="/faq.svg" />
            </div>
            <div className="p-4">
                <Link href="https://exodia-iit-mandiii.vercel.app/" target="_blank">
                    <Button variant={"sidebarLink"} className="w-full">Visit Exodia Main Website</Button>
                </Link>
            </div>
        </div>
    )
}
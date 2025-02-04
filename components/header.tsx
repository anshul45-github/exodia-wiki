import Image from "next/image"
import Link from "next/link"

export const Header = () => {
    return (
        <header className="h-20 w-full border-b-2 border-slate-200 px-4">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src={"/adventurer_action1.png"} alt="Adventurer" width={40} height={40} />
                    <h1 className="text-2xl font-extrabold text-blue-600 tracking-wide">Exodia Wiki</h1>
                </div>
                <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
                    <Link href="https://exodia-iit-mandiii.vercel.app" className="text-lg font-semibold text-blue-600 hover:underline" target="_blank">
                        Visit the main site
                    </Link>
                </div>
            </div>
        </header>
    )
}
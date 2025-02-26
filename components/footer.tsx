import { Button } from "./ui/button"

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size={"lg"} variant={"ghost"} className="w-full">
                    &copy;
                    Exodia'25
                </Button>
            </div>
        </footer>
    )
}
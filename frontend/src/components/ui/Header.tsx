import Link from "next/link";
import CapeIcon from "../icons/CapeIcon";
import GroupIcon from "../icons/GroupIcon";
import LogoIcon from "../icons/LogoIcon";
import MojangIcon from "../icons/MojangIcon";


export default function Header() {


    return (
        <header className="h-20 flex items-center justify-center border-b border-foreground">
            <div className="w-2/3 flex justify-between">
                <Link href="/" 
                    className="flex items-center"
                >
                    <LogoIcon className="stroke-white size-16 mr-1 hover:stroke-highlight" />
                    <h1 className="text-4xl tracking-widest font-mojangles-bold pointer-events-none">
                        CapeView
                    </h1>
                </Link>

                <nav className="w-1/3 flex justify-between text-xl">
                    <Link href="/players"
                        className="group flex items-center tracking-wider"
                    >
                        <MojangIcon className="fill-white size-5 mr-1 group-hover:fill-highlight" />
                        <span className="group-hover:text-highlight">Players</span>
                    </Link>

                    <Link href="/capes"
                        className="group flex items-center tracking-wider"
                    >
                        <CapeIcon className="fill-white size-5 mr-1 group-hover:fill-highlight" />
                        <span className="group-hover:text-highlight">Capes</span>
                    </Link>
                    <Link href="/groups"
                        className="group flex items-center tracking-wider"
                    >
                        <GroupIcon className="fill-white stroke-white size-6 mr-1 group-hover:fill-highlight" />
                        <span className="group-hover:text-highlight">Groups</span>
                    </Link>
                </nav>
            </div>
        </header>
    )
}
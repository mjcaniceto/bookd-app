import { Link } from "react-router-dom";
import { Aperture } from "lucide-react";

export default function Navbar() {
    function scrollToTop() {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    return (
        <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur-sm">
            <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black">
                        <button onClick={scrollToTop} className="flex items-center justify-center w-full h-full">
                            <Aperture size={15} className="text-white" strokeWidth={1.5} />
                        </button>
                    </div>
                    <span className="text-sm font-light tracking-wide text-black"> Bookd </span>
                </div>
                <div className="flex items-center gap-5">
                    <Link
                    to="/bookd"
                    className="text-xs font-light uppercase tracking-[0.14em] text-black border border-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition"
                    >
                    Try Bookd
                    </Link>
                    {/* <Link
                    to="/admin"
                    className="text-xs font-light uppercase tracking-[0.14em] text-gray-400 hover:text-black transition"
                    >
                    Admin
                    </Link> */}
                </div>
            </div>
        </header>
    );
}
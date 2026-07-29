import { PORTFOLIO_DATA } from "../../constants";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full py-8 text-center border-t border-white/5 bg-[#0B0B0B]/80 backdrop-blur-md relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-gray-400 font-medium text-sm sm:text-base tracking-wide">
                    Designed & Developed by{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">
                        {PORTFOLIO_DATA.name}
                    </span>
                </p>
                <p className="text-gray-600 mt-2 text-xs">
                    &copy; {year} All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

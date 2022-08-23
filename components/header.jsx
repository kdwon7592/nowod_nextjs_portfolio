import Link from "next/link";
import { useContext } from "react";
import { LanguageContext } from "./contexts/languageName";
import ThemeToggle from "./themeToggle";
import { menu } from "../portfolio";
import LanguageToggle from "./languageToggle";

export default function Header() {
    const [{ languageName }] = useContext(LanguageContext);
    const menuContent = languageName === 'en' ? menu.en : menu.kr;

    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg> */}
                            <span className="ml-3 text-xl">Nowod K Portfolio</span>
                        </a>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/">
                            <a className="mr-5 hover:text-gray-900">{menuContent.home}</a>
                        </Link>
                        <Link href="/projects">
                            <a className="mr-5 hover:text-gray-900">{menuContent.projects}</a>
                        </Link>
                        <a className="mr-5 hover:text-gray-900">{menuContent.skills}</a>
                        <a className="mr-5 hover:text-gray-900">{menuContent.contact}</a>
                        <ThemeToggle />
                        <LanguageToggle />
                    </nav>
                </div>
            </header>
        </>
    );
}
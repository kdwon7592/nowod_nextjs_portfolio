import Link from "next/link";
import { useContext } from "react";
import { about } from "../../portfolio";
import { LanguageContext } from "../contexts/language";


export default function Hero() {
    const [{ languageName }] = useContext(LanguageContext);
    const aboutContent = languageName === 'en' ? about.en : about.kr;

    return (
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {aboutContent.name}
            </h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {aboutContent.intro}
            </h1>
            <p className="title-font sm:text-2xl text-xl mb-8 leading-relaxed">
                {aboutContent.role}
            </p>
            <p className="mb-8 leading-relaxed">
                {aboutContent.description}
            </p>
            <div className="flex flex-row justify-center mb-10">
                <div className="flex justify-center mb-10">
                    <Link href="https://velog.io/@nowod_it">
                        <a className="btn-hero" target="blank">
                            {languageName === 'en' ? 'My Blog' : '나의 블로그'}
                        </a>
                    </Link>
                </div>
                <div className="flex justify-center ml-3  mb-10">
                    <Link href="/projects">
                        <a className="btn-hero">
                            {languageName === 'en' ? 'Projects' : '프로젝트'}
                        </a>
                    </Link>
                </div>
            </div>
            <p className="mb-8 text-xs leading-relaxed">
                {aboutContent.description2}
            </p>
        </div>
    )
}
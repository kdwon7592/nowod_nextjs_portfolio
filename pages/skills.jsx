import { useContext } from "react";
import Lottie from "react-lottie-player";
import { LanguageContext } from "../components/contexts/languageName";
import Layout from "../components/layout";
import SkillItem from "../components/skills/skill-item";
import language_json from '/public/animation_languages2.json'

export default function Skills() {
    const [{ languageName }] = useContext(LanguageContext);


    return (
        <Layout>
            <section className="container px-6 mx-auto min-h-screen mb-10 flex flex-col justify-center items-center">
                <div className="lg:max-w-xs lg:w-full md:w-1/2 w-5/6">
                    <Lottie
                        loop
                        animationData={language_json}
                        play
                    />
                </div>
                <div className="flex flex-row">
                    <h3 className="text-3xl font-vold a,:text-4xl pt-1">
                        {languageName === 'en' ? 'My Skills' : '나의 기술'}
                    </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <nav className="shadow-lg py-2 flex w-full ">
                    <div className="w-full mt-0 shadow-lg bg-white dark:bg-slate-700 left-0 top-full rounded-b-lg">
                        <div className="px-6 lg:px-8 py-5">
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <SkillItem />
                            </div>
                        </div>
                    </div>
                </nav>
            </section >
        </Layout >
    );
}
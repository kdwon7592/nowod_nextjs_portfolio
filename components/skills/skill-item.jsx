import Image from "next/image";
import React, { useContext } from "react";
import { mySkill } from "../../portfolio";
import { LanguageContext } from "../contexts/language";

export default function SkillItem() {
    const [{ languageName }] = useContext(LanguageContext);
    const skill_Header = Object.keys(mySkill); // good, can, readable, tools
    console.log(skill_Header)
    return (
        <>
            {
                skill_Header.map(header => (
                    <ul className="list-none" key={Math.random()}>
                        {
                            Object.keys(mySkill[header]).map(tech => (
                                <li className="group" key={Math.random()}>
                                    <div className="flex items-center rounded-xl mb-2">
                                        <button className="items-center flex py-3 px-4 text-sm font-normal">
                                            <Image width={35} height={35}
                                                src={mySkill[header][tech].imgSrc}
                                                alt="" />
                                            <span className="ml-3 dark:text-white font-bold">{mySkill[header][tech].name}</span>
                                        </button>
                                        <div className="absolute opacity-0 sm:w-10/12 lg:w-auto px-5 py-1 whitespace-normal hover:opacity-100 transition duration-700 ease-in-out bg-gray-300 dark:bg-slate-200 rounded-xl z-10">
                                            <div className="text-sm font-bold text-black leading-relaxed">[{mySkill[header][tech].name}]</div>
                                            <div className="text-sm text-slate-700 leading-relaxed">: {mySkill[header][tech].description1}</div>
                                            {mySkill[header][tech].description2 === '' ? '' :
                                                <div className="text-sm text-slate-700  leading-relaxed">: {mySkill[header][tech].description2}</div>}
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                ))
            }
        </>
    )
}

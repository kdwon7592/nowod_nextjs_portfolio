import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import Particles from "../components/common/particles"
import { LanguageContext } from "../components/contexts/language"
import Layout from "../components/layout"

export default function Contact() {
    const [{ languageName }] = useContext(LanguageContext);

    return (
        <>
            <Layout>
                <section className="body-font relative">
                    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap gap-5">
                        <div className="lg:w-1/3 sm:w-2/5 sm:text-xs bg-slate-100 dark:bg-slate-700 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 sm:mr-10 p-10 ">
                            <Image src="/nowod_k_image.jpg" alt="..."
                                className="shadow rounded-full max-w-full h-auto align-middle border-none"
                                width="83%"
                                height="100%"
                                layout="responsive"
                                objectFit="fill"
                                quality={100}
                            />
                            <div className="relative mb-4 flex flex-row items-center mt-5 pb-4 border-b-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                                <h3 className="ml-2">{languageName === 'en' ? 'Name : Dowon Kim' : '이름 : 김도원'}</h3>
                            </div>
                            <div className="relative mb-4 flex flex-row items-center mt-2 pb-4 border-b-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                                </svg>
                                <h3 className="ml-2">{languageName === 'en' ? 'Birth : 94.01.01' : '생일 : 1994.01.01'}</h3>
                            </div>
                            <div className="relative mb-4 flex flex-col mt-2 pb-4 border-b-2">
                                <div className="flex flex-row">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                    </svg>
                                    <h3 className="ml-2">{languageName === 'en' ? 'How to Contact' : '연락 방법'}</h3>
                                </div>
                                <p className="ml-2 mt-2">{languageName === 'en' ? 'Please leave a message at any time via email or LinkedIn.' : '메일이나, LinkedIn으로 언제든지 메시지 남겨주세요.'}</p>
                            </div>
                            <Link href="https://drive.google.com/file/d/1yg-XA6-PcOYsEo738N12OQ1ZYFpQgvmT/view?usp=sharing">
                                <a className="btn-hero" target="blank">
                                    {languageName === 'en' ? 'My resume' : '나의 이력서'}
                                </a>
                            </Link>
                        </div>
                        <div className="lg:w-2/3 sm:w-3/5 w-full sm:text-xs h-screen bg-slate-100 dark:bg-slate-700 rounded-lg overflow-hidden flex items-end justify-start relative">
                            <Particles srcData="react-pngrepo-com.png" />
                            <div className="w-full bg-slate-200 dark:bg-slate-600 relative flex flex-wrap py-6 rounded shadow-md mb-10 mx-5">
                                <div className="lg:w-1/2 px-6">
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">{languageName === 'en' ? 'ADDRESS' : '주소'}</h2>
                                    <p className="mt-1">{languageName === 'en' ? 'Bundang-gu, Seongnam-si, Gyeonggi-do' : '경기도 성남시 분당구'}</p>
                                </div>
                                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                    <a className="text-indigo-500 dark:text-indigo-300 leading-relaxed">kdwon7592@gmail.com</a>
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-1">Linked In</h2>
                                    <Link href="https://www.linkedin.com/in/%EB%8F%84%EC%9B%90-%EA%B9%80-b45158170/">
                                        <a target="_balnk" className="text-indigo-500 dark:text-indigo-300 leading-relaxed">
                                            click
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
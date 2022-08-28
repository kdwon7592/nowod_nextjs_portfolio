import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="body-font">
                <div>
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
                            <Link href="/">
                                <a rel="noopener noreferrer" className="text-gray-600 ml-1">Nowod K Portfolio</a>
                            </Link>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <Link href="https://www.linkedin.com/in/%EB%8F%84%EC%9B%90-%EA%B9%80-b45158170/">
                                <a target="_balnk" className="ml-3 text-gray-500">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                </a>
                            </Link>
                        </span>
                    </div>
                </div>
            </footer>

        </>
    );
}
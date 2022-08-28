import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [loaded, setLoaded] = useState(false);

    // 로딩되지 않은 상태에서 svg 찾지 않도록 수정
    useEffect(() => {
        setLoaded(true);
    }, [setLoaded]);

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <>
            <button onClick={toggleTheme}
                className="inline-flex items-center
                         bg-gray-100 
                         dark:bg-gray-500
                         border-0 py-1 px-3 focus:outline-none 
                         rounded text-base
                         hover:bg-gray-50 
                         hover:text-orange-500
                         dark:hover:bg-slate-600
                         dark:hover:text-yellow-300">
                {
                    loaded && theme === 'dark' ?
                        // 다크모드
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                        :
                        // 라이트 모드
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                }
            </button>
        </>
    )
}
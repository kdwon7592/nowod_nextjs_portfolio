import { useState, useEffect, useContext } from 'react';
import { LanguageContext } from './contexts/languageName';

export default function LanguageToggle() {
    const [{ languageName, toggleLanguage }] = useContext(LanguageContext);
    const [loaded, setLoaded] = useState(false);

    // 로딩되지 않은 상태에서 svg 찾지 않도록 수정
    useEffect(() => {
        setLoaded(true);
    }, [setLoaded]);

    return (
        <>
            <button onClick={toggleLanguage}
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
                    loaded && languageName === 'en' ? 'en' : 'kr'
                }
            </button>
        </>
    )
}
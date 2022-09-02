import { useState, useEffect, useContext } from 'react';
import { LanguageContext } from './contexts/language';

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
                className="inline-flex items-center bg mr-2                        
                         border-0 px-2 py-1 focus:outline-none 
                         rounded text-base                         
                         hover:text-yellow-300">
                {
                    loaded && languageName === 'en' ? 'EN' : 'KR'
                }
            </button>
        </>
    )
}
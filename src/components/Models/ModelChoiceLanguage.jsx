import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../../redux/slides/languageSlice';

export const ModelChoiceLanguage = ({isOpenMoDel,setIsOpenModel}) => {
    const { t,i18n } = useTranslation();
    const currentLanguage = useSelector((state) => state.language.language);
    const dispatch = useDispatch();
    const choiceLanguage =(e) =>{
        dispatch(changeLanguage(e))
        setIsOpenModel(false)
    }
    useEffect(() => {
        if (currentLanguage) {
            i18n.changeLanguage(currentLanguage);
        }
    }, [currentLanguage, i18n]);

    return (
        <div className={`${isOpenMoDel?"flex":"hidden"} fixed  items-center justify-center bg-[#2d2f31cc] w-full h-screen top-0 left-0 z-40`}>
            <div className='bg-white p-8 w-[536px]'>
                <div className='flex justify-between items-center mb-6'>
                    <h1 className='text-[19px] font-bold'>{t('Chọn một ngôn ngữ')}</h1>
                    <button onClick={()=>setIsOpenModel(false)}>
                        <svg className="w-5 h-5 text-first" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                        </svg>
                    </button>
                </div>
                <div className='grid text-base grid-cols-3'>
                    <div className='pl-4 h-10 flex items-center'><button onClick={() => choiceLanguage('en')} className='hover:text-eighth'>English</button></div>
                    <div className='pl-4 h-10 flex items-center'><button onClick={() => choiceLanguage('vi')} className='hover:text-eighth'>Tiếng Việt</button></div>
                    <div className='pl-4 h-10 flex items-center'><button onClick={() => choiceLanguage('ja')} className='hover:text-eighth'>日本語</button></div>
                    <div className='pl-4 h-10 flex items-center'><button onClick={() => choiceLanguage('ko')} className='hover:text-eighth'>한국어</button></div>
                    <div className='pl-4 h-10 flex items-center'><button onClick={() => choiceLanguage('zh')} className='hover:text-eighth'>中文(简体)</button></div>
                </div>
            </div>
        </div>
    );
}

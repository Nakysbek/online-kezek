import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import s from "./LanguagePage.module.css"
import {NavLink, useNavigate} from "react-router-dom";


export const LanguagePage = () => {
    const navigate = useNavigate()
    const [language, setLanguage] = useState("")
    const {i18n} = useTranslation();
    const {t} = useTranslation();
    const goBack = () => navigate(-1)

    return (
        <div className={s.languageWrapper}>
            <div className={s.navbar}>
                <button className={s.bat} onClick={goBack}>
                    {t("BACK_TO_RESTAURANTS")}
                </button>
            </div>

            <div className={s.navbar}>
                <div className={s.navbar__items}>
                    <NavLink to="/admin">{t("ADMIN")}</NavLink>
                    <NavLink to="/restaurants">{t("RESTAURANTS")}</NavLink>
                </div>
            </div>

            <div className={s.navbar}>
                    <button
                        className={language === "kz" ? s.page__current : s.page}
                        onClick={() => {
                            i18n.changeLanguage("kz");
                            setLanguage("kz")
                        }}>KZ
                    </button>
                    <button className={language === "en" ? s.page__current : s.page}
                            onClick={() => {
                                i18n.changeLanguage("en");
                                setLanguage("en")
                            }}>EN
                    </button>
                    <button className={language === "ru" ? s.page__current : s.page}
                            onClick={() => {
                                i18n.changeLanguage("ru");
                                setLanguage("ru")
                            }}>RU
                    </button>
            </div>
        </div>
    );
};


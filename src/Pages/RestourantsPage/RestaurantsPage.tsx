import React, {useEffect, useState, useTransition} from 'react';
import s from "./RestaurantsPage.module.css";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

type RestaurantType = {
    id: number
    title: string
    img: string
    url: string
}


export const RestaurantsPage = () => {
    const {t} = useTranslation();
    const navigate = useNavigate()
    const [restaurants, serRestaurants] = useState<RestaurantType[]>([])

    useEffect(() => {
        fetch('https://online-kezek-test-production-5624.up.railway.app/api/restaurants/')
            .then(res => res.json())
            .then((data: any) => {
                serRestaurants(data)
            })
    }, [])

    return (
        <div className={s.wrapper}>
            {
                restaurants.map(r => {
                    return <div className={s.item} key={r.id}>
                        <div className={s.title}>
                            <h2>{r.title}</h2>
                            <p>{r.url}</p>
                        </div>
                        <div className={s.image}>
                            <img src={r.img} alt={r.title}/>
                            <button onClick={() => {
                                navigate(`/restaurants/${r.id}`)
                            }}>
                                {t("GO_TO_RESTAURANT")}
                            </button>
                        </div>
                    </div>
                })
            }
        </div>
    );
};





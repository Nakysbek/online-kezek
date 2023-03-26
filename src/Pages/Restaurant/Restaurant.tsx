import React, {useEffect, useState} from 'react';
import {Table} from "../../components/Table/Table";
import {Slider} from "../../components/Slider/Slider";
import {useNavigate, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

export interface OrderType {
    id: number
    key: string
    is_ready: boolean
}

export type SlidesType = {
    url: string
    title: string
}

export const Restaurant = () => {
    const {t} = useTranslation();
    const params = useParams()
    const [orders, setOrders] = useState<OrderType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const slides = [
        {
            url: "https://restolife.kz/upload/information_system_6/3/8/1/item_3812/information_items_property_2966.jpg",
            title: "BurgerKing",
        },
        {
            url: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/mcdonalds-2.jpg?quality=82&strip=1",
            title: "McDonald",
        },
        {
            url: "https://img.championat.com/news/big/w/q/pochemu-sushi-vredny-dlja-figury_1590677088981164064.jpg",
            title: "SamuraiSushi",
        },
    ]

    useEffect(() => {
        setLoading(true)
        const intervalId = setInterval(() => {
            fetch(`https://online-kezek-test-production-5624.up.railway.app/api/restaurants/${params.id}/orders/`)
                .then(res => res.json())
                .then((data: any) => {
                    setOrders(data.orders)
                    setLoading(false)
                })
        }, 3000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const gettingReadyOrders = orders.filter(order => !order.is_ready);
    const ReadyOrders = orders.filter(order => order.is_ready);

    const onItemClicked = (id: number, is_ready: boolean) => {
        fetch(`https://online-kezek-test-production-5624.up.railway.app/api/orders/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                is_ready
            }),
        })
            .then(res => res.json())
            .then((data: any) => {
            })
    }


    return (
        <div className="App">

            <Table
                data-translate="getting_ready"
                orders={gettingReadyOrders}
                title={t("GETTING_READY")}
                status={"not_ready"}
                isLoading={loading}
                onClick={onItemClicked}
            />
            <Table
                orders={ReadyOrders}
                title={t("READY")}
                status={"ready"}
                isLoading={loading}
                onClick={onItemClicked}
            />
            <Slider
                slides={slides}
            />
        </div>
    )
};


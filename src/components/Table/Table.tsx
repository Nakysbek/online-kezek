import React from "react";
import s from './Table.module.css';
import Lottie from "lottie-react";
import loading from "../../assets/animation/loading.json";
import notFound from "../../assets/animation/notFound.json";
import {OrderType} from "../../Pages/Restaurant/Restaurant";

type TablePropsType = {
    title: string
    status: "ready" | "not_ready"
    orders: OrderType[]
    isLoading: boolean
    onClick: (id: number, is_ready: boolean) => void
}

const tableStyles = {
    ready: {
        border: "1px green solid"
    },
    not_ready: {
        border: "1px orangered solid"
    }
}

const titleStyles = {
    ready: {
        backgroundColor: "green"
    },
    not_ready: {
        backgroundColor: "orangered"
    }
}

export const Table = (props: TablePropsType) => {

    const orders = props.orders.length ? (
        props.orders.map((o, index) => {
            return (
                <div className={s.item} key={index}>
                    <button style={tableStyles[props.status]} onClick={() => props.onClick(o.id, !o.is_ready)}>
                        {o.key}
                    </button>
                </div>
            )
        })
    ) : (
        <div>
            <Lottie animationData={notFound}/>
        </div>
    )

    return (
        <div className={s.table}>
            <div className={s.orders} style={titleStyles[props.status]}>
                {props.title}
            </div>
            <div className={props.isLoading || !props.orders.length ? s.flex : s.grid} style={tableStyles[props.status]}>
                {
                    props.isLoading ? <Lottie animationData={loading}/> : orders
                }
            </div>
        </div>
    );
};
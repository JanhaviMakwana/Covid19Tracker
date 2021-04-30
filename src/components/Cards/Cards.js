import React from 'react';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from "classnames";


const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }, country }) => {
    if (!confirmed) {
        return "Loading...";
    }

    const active = confirmed.value - recovered.value - deaths.value;
    let cardDetails = [
        {
            style: styles.infected,
            text: "Infected",
            value: confirmed.value,
            bottomText: "Number of infect cases of COVID-19"
        },
        {
            style: styles.recovered,
            text: "Recoverd",
            value: recovered.value,
            bottomText: "Number of recoveries from COVID-19"
        },
        {
            style: styles.deaths,
            text: "Deaths",
            value: deaths.value,
            bottomText: "Number of deaths caused by COVID-19"
        },
        {
            style: styles.active,
            text: "Active",
            value: active,
            bottomText: "Number of active cases of COVID-19"
        }
    ];

    return (
        <div className="container py-3">
            <div className="row">

                {cardDetails.map((detail, index) => (
                    <div className="col " >
                        <div className={cx(styles.Card, detail.style)}>
                            <div className="card-body" >
                                <div className="card-title"><p className="text-secondary h5">{detail.text}</p></div>
                                <p className="card-text h4">
                                    <CountUp
                                        start={0}
                                        end={detail.value}
                                        duration={2}
                                        separator=","
                                    />
                                </p>
                                <p className="text-secondary h6">{new Date(lastUpdate).toDateString()}</p>
                                <p>{detail.bottomText}</p>
                            </div>
                        </div>
                        <span></span>
                    </div>))
                }
            </div>
        </div>
    );
};

export default Cards;
import React from "react"
import { FaCheck } from 'react-icons/fa'
import './services.css'

function Services () {
    const servicesItems = [
        {
            title: 'UI/UX Design',
            list: [
                '1 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                '1 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                '1 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                '1 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                '1 Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            ]
        },
        {
            title: 'Web Development',
            list: [
                '2 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                '2 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                '2 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                '2 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                '2 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                '2 Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            ]
        },
        {
            title: 'Content Creation',
            list: [
                '3 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                '3 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                '3 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                '3 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                '3 Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            ]
        },
    ]
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                {servicesItems.map((item, index) => (
                    <article className="service" key={index}>
                        <div className="service__head">
                            <h3>{item.title}</h3>
                        </div>

                        <ul className="service__list">
                            {item.list.map((item2, index2) => (
                                <li key={index2}>
                                    <FaCheck className="service__list-icon" />
                                    <p>{item2}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Services
import React from "react"
import { IMG1, IMG2, IMG3, IMG4, IMG5, IMG6 } from './import.js'

import './portfolio.css'

function Portfolio () {
    const portfolioList = [
        {
            image: IMG1,
            title: 'This is a portfolio item title 1',
            items: [
                {
                    name: 'Github 1',
                    link: 'https://github.com'
                },
                {
                    name: 'Live Demo 1',
                    link: 'https://github.com'
                }
            ]
        },
        {
            image: IMG2,
            title: 'This is a portfolio item title 2',
            items: [
                {
                    name: 'Github 2',
                    link: 'https://github.com'
                },
                {
                    name: 'Live Demo 2',
                    link: 'https://github.com'
                }
            ]
        },
        {
            image: IMG3,
            title: 'This is a portfolio item title 3',
            items: [
                {
                    name: 'Github 3',
                    link: 'https://github.com'
                },
                {
                    name: 'Live Demo 3',
                    link: 'https://github.com'
                }
            ]
        },
        {
            image: IMG4,
            title: 'This is a portfolio item title 4',
            items: [
                {
                    name: 'Github 4',
                    link: 'https://github.com'
                },
                {
                    name: 'Live Demo 4',
                    link: 'https://github.com'
                }
            ]
        },
        {
            image: IMG5,
            title: 'This is a portfolio item title 5',
            items: [
                {
                    name: 'Github 5',
                    link: 'https://github.com'
                },
                {
                    name: 'Live Demo 5',
                    link: 'https://github.com'
                }
            ]
        },
        {
            image: IMG6,
            title: 'This is a portfolio item title 6',
            items: [
                {
                    name: 'Github 6',
                    link: 'https://github.com'
                },
                {
                    name: 'Live Demo 6',
                    link: 'https://github.com'
                }
            ]
        },
    ]

    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {portfolioList.map((item, index) => (
                    <article className="portfolio__item" key={index}>
                        <div className="porfolio__item-image">
                            <img src={item.image} alt={`portfolio image_${index}`} />
                        </div>
                        <h3>{item.title}</h3>
                        <div className="portfolio__item-cta">
                            {item.items.map((item2, index2) => (
                                <a href={item2.link} className={`btn ${item2.name.includes('Live Demo') && 'btn-primary'}`} target="_blank" key={index2}>{item2.name}</a>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Portfolio
import React from "react"
import { BsFillPatchCheckFill } from 'react-icons/bs'
import './experience.css'

function Experience () {
    const exp_frontend = [
        {
            skill: 'HTML',
            level: 'Experienced'
        },
        {
            skill: 'CSS',
            level: 'Intermediate'
        },
        {
            skill: 'JavaScript',
            level: 'Experienced'
        },
        {
            skill: 'Bootstrap',
            level: 'Experienced'
        },
        {
            skill: 'Tailwind',
            level: 'Experienced'
        },
        {
            skill: 'React',
            level: 'Experienced'
        }
    ]

    const exp_backend = [
        {
            skill: 'NodeJS',
            level: 'Intermediate'
        },
        {
            skill: 'MongoDB',
            level: 'Intermediate'
        },
        {
            skill: 'PHP',
            level: 'Basic'
        },
        {
            skill: 'MySQL',
            level: 'Intermediate'
        },
        {
            skill: 'Python',
            level: 'Intermediate'
        }
    ]

    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        {exp_frontend.map((item, index) => (
                            <article key={index} className="experience__details">
                                <BsFillPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>{item.skill}</h4>
                                    <small className="text-light">{item.level}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        {exp_backend.map((item, index) => (
                            <article key={index} className="experience__details">
                                <BsFillPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>{item.skill}</h4>
                                    <small className="text-light">{item.level}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
import React from 'react'
import { Article } from '../../components'
import { blog01, blog02,blog03, blog04, blog05 } from './import'
import './blog.css'

function Blog () {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
            </div>

            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container__groupA">
                    <Article
                        date="Sep 26, 2021"
                        image={blog01}
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                </div>
                <div className="gpt3__blog-container__groupB">
                    <Article
                        date="Sep 26, 2021"
                        image={blog02}
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                    <Article
                        date="Sep 26, 2021"
                        image={blog03}
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                    <Article
                        date="Sep 26, 2021"
                        image={blog04}
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                    <Article
                        date="Sep 26, 2021"
                        image={blog05}
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                </div>
            </div>
        </div>
    )
}

export default Blog
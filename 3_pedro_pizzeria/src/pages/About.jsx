import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About () {
    return (
        <div className="about">
            <div className="aboutTop" style={{backgroundImage: `url(${MultiplePizzas})`}}></div>
            <div className="aboutBottom">
                <h1>ABOUT US</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate soluta sint totam animi quasi quaerat culpa, doloribus similique itaque! Blanditiis, officiis provident. Sint possimus quia asperiores, similique ea id officiis voluptate nihil labore molestiae odit quaerat, eos ad a consequuntur ullam at magnam, ipsum fuga aut rerum aliquam error deleniti? Officiis minus maiores et aspernatur magnam ullam labore, odio dicta molestiae fugiat adipisci inventore ea eveniet eius natus quam, consequuntur quod? Laudantium incidunt nesciunt amet atque sunt, sequi et iusto ipsam, totam ducimus inventore doloribus nulla molestias eos! Libero, provident. Assumenda quaerat quos placeat dolore voluptas tenetur consequatur doloremque nihil.</p>
            </div>
        </div>
    )
}

export default About
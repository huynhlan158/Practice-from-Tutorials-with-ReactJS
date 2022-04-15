import { SidebarData } from './SidebarData'
import '../App.css'

function Sidebar () {
    return (
        <div className="sidebar">
            <ul className="sidebarList">
                {SidebarData.map((val, key) => (
                    <li 
                        key={key}
                        className='row'
                        id={window.location.pathname == val.link ? 'active' : ''}
                        onClick={() => {window.location.pathname = val.link}}
                    >
                        <div className="icon">{val.icon}</div>
                        <div className="title">{val.title}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar
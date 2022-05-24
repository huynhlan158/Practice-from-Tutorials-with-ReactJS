import { NavLink, useLocation } from 'react-router-dom'

const links = [
    {url: '/search', text: '🔎 All'},
    {url: '/news', text: '📰 News'},
    {url: '/image', text: '📷 Image'},
    {url: '/video', text: '📺 Video'}
]

function Links () {
    const location = useLocation()
    
    return (
        <div className="flex sm:justify-around justify-between items-center mt-4">
            {links.map(({ url, text}) => (
                <NavLink key={text} to={url} className={location.pathname === url ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 p-2" : 'p-2'}>
                    {text}
                </NavLink>
            ))}
        </div>
    )
}

export default Links
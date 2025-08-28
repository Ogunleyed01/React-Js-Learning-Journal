import { Link } from "react-router-dom"

function Nav( {search, setSearch} ) {
    return (
        <nav className="Nav">
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="searcn">Search Post</label>
                <input type="text" placeholder="Search Posts" id="search" value={search}  onChange={(e) => setSearch(e.target.value)} />
                <ul>
                    <li><Link to='/' > Home </Link></li>
                    <li><Link to='/post' > Post </Link></li>
                    <li><Link to='/about' > About </Link></li>
                </ul>
            </form>
        </nav>
    )
}

export default Nav
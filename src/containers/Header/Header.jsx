import { Link, useHistory } from 'react-router-dom'

import './Header.scss'

import { useState, useEffect } from 'react'
import axios from 'axios'






    

const Header = ({ sidebarState, setSidebarState, history }) => {

    const [ratedInfo, setratedInfo] = useState({
        isFetched: false,
        data: {},
        error: null
    })


    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        if (searchValue.length > 0) {

        } else {

        }

    }, [searchValue])

    return (
        <>
        <div className="header">
        <div className="container">
        <Link to='/' className="header__logo ">
        KinoPro
        </Link>
        <div className="header__links">
        <Link to='/All' className="movies__link links">All</Link>
        <Link to='/tvshows' className="tv-shows__link links">Tv Shows</Link>
        <Link to='/Popular' className="top-rated__link links">Popular</Link>
        <Link to='/Movies' className="up-coming__link links">Movies</Link>
        </div>
        
        
        <div className="container__item">
		<form className="form">
			<input type="search" className="searchInput" placeholder="Search" onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />
			<button type="submit" className="btn">Search</button>
		</form>
	</div>
        
        </div>
        </div>
        </>
        )
    }
    export default Header
import React from 'react'
import ImageSlider from '../components/helpers/ImageSlider';
import { Menu } from './Menu';
import './Styles/search-input.css'
export const Header = () => {

    const slides = [
        { url: "http://www.deculture.es/wp-content/uploads/2013/08/final-fantasy-vii-polygonal-figures.jpg", title: "beach" },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbAYzXzgJw03EDmptNgHHTnwAaqiC8ldtn_A&usqp=CAU", title: "boat" },
    ];
    const containerStyles = {
        width: "auto",
        height: "230px",

    };

    return (

        <div>
            <div><h1>Treno.shin</h1></div>
            <Menu/>
            <div style={containerStyles} className='slider'>

                <ImageSlider slides={slides} />
                <div className='search-bar'>
                    <form>
                        <label for="search">Search</label>
                        <input id="search" type="search" pattern=".*\S.*" required />
                        <span className="caret"></span>
                    </form>
                </div>

            </div>

        </div>
    )
}

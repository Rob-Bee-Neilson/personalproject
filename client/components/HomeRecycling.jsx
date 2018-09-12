import React from 'react'
import itemDb from '../../data/items'
import { Link } from 'react-router-dom'

const HomeRecycling = props => {
   
    return (

        < React.Fragment >
            <div className="homeCol">
                <button>
                    Home Recycling
                </button>
                <div className='HomeRecycling-info hidden'>
                <p>asdfkjhkajsdhfkjashdfkjhasdkfhaskdjfhakjsdhf</p>
                <ul>
                    <li> Material: {itemDb[0].material}</li>
                    <li> Technically recyclable: {itemDb[0].recyclableTechnically}</li>
                    <li> Actually recyclable: {itemDb[0].recyclableActually}</li>
                    <li> Technically compostable: {itemDb[0].compostableTechnically}</li>
                    <li> Actually compostable: {itemDb[0].compostableActually}</li>
                    <li> Good for landfill: {itemDb[0].landfill}</li>
                </ul>
                <ul>
                    <li> Material: {itemDb[1].material}</li>
                    <li> Technically recyclable: {itemDb[1].recyclableTechnically}</li>
                    <li> Actually recyclable: {itemDb[1].recyclableActually}</li>
                    <li> Technically compostable: {itemDb[1].compostableTechnically}</li>
                    <li> Actually compostable: {itemDb[1].compostableActually}</li>
                    <li> Good for landfill: {itemDb[1].landfill}</li>
                </ul>
                </div>
                {/*<a href="/">Home</a>*/}
            </div>
        </React.Fragment >
    )
}

function toggleHomeRecycling () {
    var homeRecyclingInfo = document.querySelector('.homeRecycling-info')
    homeRecyclingInfo.classList.toggle('hidden')
}
export default HomeRecycling
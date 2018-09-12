import React from 'react'
import itemDb from '../../data/items'
import { Link } from 'react-router-dom'

const CoffeeCups = props => {
    // let location = Number(props.match.params.id) -1;
    // let itemDb = items[location];


    return (

        < React.Fragment >
            <div className="homeCol">
                <button onClick={toggleCoffee}>
                    Coffee Cups
                </button>
                <div className='coffee-info hidden'>
                <p>Coffee cups are a huge waste issue, especially in Wellington.<br></br>You need to check both the lid and the cup to make sure they end up in the correct place.<br></br>Recyclable plastic cups/lids can go in the recycling.<br></br>PLA is compostable but requires a lot of time/heat to do so. PLA will not compost well in your home compost and Capital Compost (Southern Landfill) does not accept PLA as they cannot compost it fast enough in their system, <strong>they send them on to landfill</strong>.<br></br>Many types of cups/lids cannot be recycled or composted at all and must go to landfill.</p>
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

function toggleCoffee () {
    var coffeeInfo = document.querySelector('.coffee-info')
    coffeeInfo.classList.toggle('hidden')
}
export default CoffeeCups
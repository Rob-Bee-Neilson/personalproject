import React from 'react'
import itemDb from '../../data/items'
import { Link } from 'react-router-dom'

const CoffeeCups = props => {
    // let location = Number(props.match.params.id) -1;
    // let itemDb = items[location];


    return (

        < React.Fragment >
            <div className="homeCol">
                <h1>{itemDb[0].material}</h1>
                <p>description</p>
                <ul>
                    <li> Technically recyclable: {itemDb[0].recyclableTechnically}</li>
                    <li> Actually recyclable: {itemDb[0].recyclableActually}</li>
                    <li> Technically compostable: {itemDb[0].compostableTechnically}</li>
                    <li> Actually compostable: {itemDb[0].compostableActually}</li>
                    <li> Good for landfill: {itemDb[0].landfill}</li>
                </ul>
                <a href="/">Home</a>
            </div>
        </React.Fragment >
    )
}

export default CoffeeCups

// const CoffeeCups = props => {
//     let location = Number(props.match.params.id) -1;
//     let itemDb = items[location];
//         return (
//             <React.Fragment>
//                 <div className="homeCol">
//                     <h1>{itemDb.material}</h1>
//                     <p>{itemDb.description}</p>
//                     <img src={itemDb.photo}/>
//                         <ul>
//                             <li key={itemDb.id}> Technically recyclable: {itemDb.recyclableTechnically}</li>
//                             <li key={itemDb.id}> Actually recyclable: {itemDb.recyclableActually}</li>
//                             <li key={itemDb.id}> Technically compostable: {itemDb.compostableTechnically}</li>
//                             <li key={itemDb.id}> Actually compostable: {itemDb.compostableActually}</li>
//                             <li key={itemDb.id}> Good for landfill: {itemDb.landfill}</li>
//                         </ul>
//                     <a href="/">Home</a>
//                 </div>
//             </React.Fragment>
//         )
// }

// export default CoffeeCups
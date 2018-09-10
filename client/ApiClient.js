import request from 'superagent'



export function getCoffee() {
 return request.get('/CoffeeCups')
}
import { useState } from 'react'
import {Checkbox} from './components/forms/checkbox'
import {Input} from './components/forms/input'

const PRODUCTS = [  
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
]

function App() {

  return (
    <div className='container my-3'>
    <Searchbar></Searchbar>
    <ProductTable products={PRODUCTS}></ProductTable>
    </div>
  )
  
  function Searchbar() {
    return <div className="mb-3">
      <Input value="" placeholder="Entrer votre recherche ici" onChange={() => null}></Input>
      <Checkbox checked="" id="stocked" onChange={() => null} label="N'afficher que les produits en stock"></Checkbox>
    </div>
  }

  function ProductTable ({products}){
    return <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>
    </table>
  }
}

export default App

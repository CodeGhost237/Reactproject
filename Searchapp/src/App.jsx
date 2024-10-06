import { useState } from 'react'
import {Checkbox} from './components/forms/checkbox'
import {Input} from './components/forms/input'
import { ProductCategoryRow } from './components/products/ProductCategoryRow'
import { ProductRow } from './components/products/productRow'

const PRODUCTS = [  
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
]

function Searchbar({showStockedOnly, onStockedOnlyChange, onSearchChange, search}) {
  return <div className="mb-3">
    <Input 
    value={search}
    placeholder="Entrer votre recherche ici" 
    onChange={onSearchChange}
    />

    <Checkbox 
    checked={showStockedOnly} 
    id="stocked" 
    onChange={onStockedOnlyChange} 
    label="N'afficher que les produits en stock" 
    />
    <input type="range" name="" id="" className='form-range' max={10} min={0} />

  </div>
}

function ProductTable ({products}){
  const rows = []

  let lastCategory = null

for (let product of products){  
  if(product.category !== lastCategory){
    rows.push(<ProductCategoryRow key={product.category} name={product.category} />)
  }

  lastCategory = product.category
  rows.push(<ProductRow product={product} key={product.name} />)
}

  return <table className='table'>
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prix</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
}

function App() {

  const [showStockedOnly, setshowStockedOnly] = useState(false)
  const [search, setSearch] = useState("")

  const visibleproducts = PRODUCTS.filter((product) =>{
    if(showStockedOnly && !product.stocked){
      return false
    }

    if(search && !product.name.toLowerCase().includes(search.toLowerCase())){
      return false
    }
  
    return true
  })

  return (
    <div className='container my-3'>
    <Searchbar showStockedOnly={showStockedOnly} onStockedOnlyChange={setshowStockedOnly} search={search} onSearchChange={setSearch} />
    <ProductTable products={visibleproducts}></ProductTable>
    </div>
  )
}

export default App

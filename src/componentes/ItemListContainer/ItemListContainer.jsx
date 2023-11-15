import { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import {getProducts} from "../../asyncMock"
import { useParams } from 'react-router-dom'
import "./ItemListContainer.css"


export const ItemListContainer = () => {
  const { category } = useParams();
  const [products , setProducts] = useState([]);

  const [isLoading , setIsLoading] = useState(true);

 
   useEffect(() => {
    setIsLoading(true);
    getProducts()
    
    .then((res => {
      
      if(category){
        let productsFilter = res.filter(product => product.category === category);
        setProducts(productsFilter);
        setIsLoading(false)
      }
      else{
        setProducts(res)
      }
    }, [category]))
 })


  

  return (
    <div className='main'>
      { isLoading ? <h2>cargando...</h2> : <ItemList products={products} />}
     </div>
    
  )
}

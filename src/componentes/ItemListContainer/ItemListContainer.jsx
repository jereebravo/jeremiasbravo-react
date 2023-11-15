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
    getProducts()
       .then((res) =>{
        if(category){
          let productFilter = res.filter(product => product.category === category);
          setProducts(productFilter);
        }
        else{
          setProducts(res);
        }
       })
       .catch((error) => console.log(error));

   },[category])
      


  

  return (
    <div className='main'>
      {  <ItemList products={products} />}
     </div>
    
  )
}

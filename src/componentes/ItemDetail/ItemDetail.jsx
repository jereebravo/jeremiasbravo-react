import {ButtonCount} from '../buttons/ButtonCount'
import * as images from '../../assets/img/index'
import "./ItemDetail.css"






export const ItemDetail = ({  name , price , description , stock , image}) => {
 
    return(
        <div>
            <div className='detalles'>
            <div >
                <img className='cartDetail' src={images.cart} alt="" />
            </div>
            <div><img className='imageDetail' src={image} alt="" /></div>
            <div className='detailItem'>
                <p className='titulo'>{name}</p>
                <p className='description'>{description}</p> 
                <p className='text'>{stock}</p>   
                <p className='text'>{"$"}{price}</p>

            </div>
            <div> <ButtonCount /> </div>

        </div>


            </div>
        
    )
}
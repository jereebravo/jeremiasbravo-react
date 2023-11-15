import {ButtonCount} from '../buttons/ButtonCount'
import * as images from '../../assets/img/index'





export const ItemDetail = ({  name , price , description , stock , image}) => {
 
    return(
        <div className="card">
            <div className='cartDetail'>{images.cart}</div>
            <div className='imageDetail'><img src={image} alt="" /></div>
            <div className='detailItem'>
                <p>{name}</p>
                <p>{description}</p> 
                <p>{stock}</p>   
                <p>{price}</p>

            </div>
            <div> <ButtonCount /> </div>

        </div>

    )
}
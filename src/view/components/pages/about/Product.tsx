import React from 'react'
import {useParams} from 'react-router-dom';
import './Product.scss';
import {Link} from 'react-router-dom';

const products = [
{id:1,name:'LipStick', src:"https://img.ltwebstatic.com/images3_pi/2021/07/29/162754972698938a194119ab9b1e24dd32db63c8e8_thumbnail_900x.webp"},
 {id:2,name:'dress1', src:"https://img.ltwebstatic.com/images3_pi/2021/11/24/1637724882760d67b1f7a3a229b8c496d0fb4e20be_thumbnail_900x.webp"},
 {id:3,name:'dress2', src:"https://img.ltwebstatic.com/images3_pi/2021/12/18/163975729192872d057ff6c59f50179bf32b0bf89a.webp"}];

const Product = () => {
  const {productId} = useParams();
 
  function getProductName(id:string|undefined,products:Array<any>):string {
    var product =  products.find(product=> product.id == id)
    if(product){
      return (product.name)
    } else {
      return ''
    }
  }

  function getProductSRC(id:string|undefined,products:Array<any>):string {
    var product =  products.find(product=> product.id == id)
    if(product){
      return (product.src)
    } else {
      return ''
    }
  }

  
  

  return (
    <div>
            <Link to='/'>Home</Link>
        
      <h1>Name: {getProductName(productId,products)} </h1>
      <h1> {productId}$</h1>
     <img src={getProductSRC(productId,products)}/>

     
    </div>
  )
}

export default Product
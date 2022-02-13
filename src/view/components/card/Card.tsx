import {useState} from 'react'
import './Card.scss';

interface CardProp{
    info:{
    price: string;
    dis:string ;
    src:string
    }
}
function Card(prop: CardProp){
    const [counter, setCounter]=useState(0)
    const[color, setColor] =useState('lightblue')
    const[x, setX]= useState(0);
    const[y, setY]= useState(0)
    const[position, setPosition]= useState({x:0, y:0})
    const {price,dis,src} = prop.info;

    function handeMouseOver(ev:any){
        console.log(ev.pageX, ev.pageY)
        setPosition({x: ev.pageX,y:ev.pageY })
    }

   
    function handleCounter(event:any){
        setCounter(counter+1)
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const newColor = "#" + randomColor;
        setColor(newColor);
    }
    return(
        <div className="card" onMouseOver={handeMouseOver}>
            <div>{dis}</div>
            <img src={src} alt={dis}/>
            <div> The price is {price} </div>
            
            <button style={{backgroundColor: color}} onClick={handleCounter}> add to Bag </button>
            <div style={{backgroundColor:color }}>{counter}</div>

      

        </div>
        
    )
}
export default Card;
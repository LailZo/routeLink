import logo from './logo.svg';
import './App.scss';
import Card from './view/components/card/Card'
import Bar from './view/components/bar/Bar'
import school from './images/school.jpg'
import Random from './view/components/random/Random'

const students: Array<Place>=[ 
 {price: "20$", dis:"Cuccoo Minimalist Chunky Heeled Stretc", src:"https://img.ltwebstatic.com/images3_pi/2021/12/31/164092004917f637642c606e1e552ab9e4e8fdd11d_thumbnail_900x.webp"},
 {price: "20$", dis:"Cuccoo Minimalist Chunky Heeled Stretc", src:"https://img.ltwebstatic.com/images3_pi/2021/08/17/16291729807b2e2c0641a53520b1963680e4099f03_thumbnail_900x.webp"},
{price: "20$", dis:"Cuccoo Minimalist Chunky Heeled Stretc", src:"https://img.ltwebstatic.com/images3_pi/2021/07/09/1625805970dc089fe3ffaf0d243dfe932b5c34df45_thumbnail_900x.webp"},
 {price: "20$", dis:"Cuccoo Minimalist Chunky Heeled Stretc", src:"https://img.ltwebstatic.com/images3_pi/2022/02/09/16443781530b039bb41ddeff6e308d4d531dfe3b30_thumbnail_900x.webp"}]
interface Place{
  price: string,
  dis:string,
  src:string
}

function App() {
  return (
    <div className="App">
      <Bar/>
      <Random/>
      <header className="App-header">
        {students.map((student, index)=>{
          const {price,dis,src} = student;
          return <Card info={{price,dis,src}} key={index}/>
        })}
 
      </header>

  
    </div>
  );
}

export default App;

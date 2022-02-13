import { Link } from "react-router-dom";
import "./About.scss"; 
function About(){
    return(
        <div style={{ 
            backgroundImage: `url("https://img.ltwebstatic.com/images3_pi/2021/05/17/1621236297ddab92339db116bee0177c0af67b06a3_thumbnail_900x.webp")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
          
            <h1>About Us </h1>
        
            <h2>What is the history of SHEIN?
Shein (styled as SHEIN; pronounced /ʃiː. ɪn/) is a Chinese online fast fashion retailer. It was founded in 2008 by Chris Xu in Nanjing, China. The company is known for its affordably priced apparel.
...
Shein (company)
Founded	2008
Founder(s)	Chris Xu
Key people	Quist Huang
Industry	Ecommerce
Revenue	CN¥63.5 billion (US$10 billion)(2020) </h2>
 
        </div>
        
    )
}

export default About;
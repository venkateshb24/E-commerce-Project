import {Link} from 'react-router-dom'
import banner from "./assets/banner.jpg";


function Home(){
    return(
        <div style={{padding:"20px"}}>
            <h1>Welcome to our Store</h1>

            <Link to="/products" >
                <img 
                    src={banner}
                    alt="store banner" 
                    style={{width:"100%",cursor:"pointer"}}
                />
            </Link>
            <p>Click the image to explore products</p>
        </div>
    )
}

export default Home
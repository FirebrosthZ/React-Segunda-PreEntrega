import brand from "../../img/Electrodomestics World.jpg";
import { Link } from "react-router-dom"

const Brand = () => {
    return(
        <Link to="/">
            <img src={brand} alt="Tienda HardWorld" title="Tienda HardWorld"></img>
        </Link>
    )
}

export default Brand;
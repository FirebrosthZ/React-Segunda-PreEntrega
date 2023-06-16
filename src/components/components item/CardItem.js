import Image from "./Image";
import '../../styles/cardItem.css'
import Description from "./Description";
import Buttondetalles from "./ButtonDetalles";
import ButtonAddCart from "./ButtonAddCart";

const CardItem = (props) => {
    return(
        <div className="cardItems">
            <Image 
            imagen={props.imagen}
            />
            <Description 
            title= {props.title}
            cantidad = {props.cantidad}
            precio = {props.precio}
            />
            <div className="buttons">
                <Buttondetalles />
                <ButtonAddCart />
            </div>
        </div>
    )
}

export default CardItem;
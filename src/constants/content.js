import { Dimensions } from "react-native"

export const products = [
    {
        id: "461274",
        title: "X-Bacon",
        description: "Hamburguer de bacon com quantidade absurda de cheddar e molho especial",
        image: "https://d25dk4h1q4vl9b.cloudfront.net/media/images/menu-content/BR/picanha/PicanhaClubhouse2carnes.png"
    },
    {
        id: "135214",
        title: "X-Picanha",
        description: "Hamburguer duplo de picanha com pão brioche especial",
        image: "https://d25dk4h1q4vl9b.cloudfront.net/media/images/menu-content/BR/picanha/PicanhaCheeseSalada.png"
    }
]

const {width, height} = Dimensions.get("window");

export {width as WIDTH, height as HEIGHT}

import {
    Dimensions,
} from "react-native";



let key=0;
const { height, width } = Dimensions.get('window')
export const data = [
    {
        imageUri:require('../../assets/im1.jpg'),
        width:width,
        name:"The Cozy Place",
        type:"PRIVATE ROOM - 2 BEDS",
        price:82,
        rating:4,
        key:++key
    },
    {
        imageUri:require('../../assets/im1.jpg'),
        width:width,
        name:"The Cozy Place",
        type:"PRIVATE ROOM - 2 BEDS",
        price:82,
        rating:4,
        key:++key
    },
    {
        imageUri:require('../../assets/im1.jpg'),
        width:width,
        name:"The Cozy Place",
        type:"PRIVATE ROOM - 2 BEDS",
        price:82,
        rating:4,
        key:++key
    }
]
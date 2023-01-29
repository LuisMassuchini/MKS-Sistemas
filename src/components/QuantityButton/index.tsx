import { Flex, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { IProducts } from "../../api/interface/product"
import { addPurchase, setPurchase, showPurchase } from "../../store/productStore"

export const QuantityButton = (prop: {prop: IProducts}) => {
    let list: IProducts[] = useSelector(showPurchase).value.data;

    const [listFind, setListFind] = useState<IProducts[]>([])
   
    const [quantity, setQuant] = useState(listFind.length)
    const dispatch = useDispatch()


    useEffect(() => { 
        
        setListFind(list.filter(product => product === prop.prop))
    }, [list])

    useEffect(() => { 
        
        setQuant(listFind.length)
    }, [listFind])
    
    const removeItems = () => {
        let newProduct =  list.map(index => index)
        var idx = newProduct.findIndex(p => p === prop.prop);

        newProduct.splice(idx, 1)
        dispatch(setPurchase(newProduct.sort((a,b) => a.id - b.id)))
       }
      
      
useEffect(() => { 
    if(quantity < 0) {
        setQuant(0)
    }

}, [quantity])

console.log(list)

    return (
        <Flex className="cartCardButton" textStyle="cartCardButton">
            <Flex  w= '100%' justifyContent='center' cursor="pointer" onClick={()=> {setQuant(quantity - 1); removeItems()}}>-</Flex>
            <Flex w= '100%' borderX='1px solid #BFBFBF' justifyContent='center' ><Text>{quantity}</Text></Flex>
            <Flex w= '100%' justifyContent='center' cursor="pointer" onClick={()=> {setQuant(quantity + 1); dispatch(addPurchase(prop.prop))}}>+</Flex>
        </Flex>
    )
}
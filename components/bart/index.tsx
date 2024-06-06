import { View, Image,  } from 'react-native'
import { styles } from './styles'

type Props = {
  posY: number,
}


export function Bart({ posY }: Props) {
  return (
    <View style={[styles.container, {bottom: posY}]}>

       
       <Image source={require('./bart.png')} style={[styles.container, {bottom: posY}]}/>
      
    </View>
  )
}
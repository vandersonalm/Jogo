import { View, Image,  } from 'react-native'
import { styles } from './styles'

type Props = {
  posY: number,
}


export function Lisa({ posY }: Props) {
  return (
    <View style={[styles.container, {bottom: posY}]}>

       <Image source={require('./lisasimpson.png')} style={[styles.container, {bottom: posY}]}/>
      
    </View>
  )
}
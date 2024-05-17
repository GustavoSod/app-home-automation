import React from 'react'
import { Text, View, Image} from 'react-native'
import InputForm from '../../components/inputForm'
import ButtonInit from '../../components/buttonInit'
import { useNavigation } from '@react-navigation/native'
import { InitialStackTypes } from '../../routes/initialStack'

export default function SingIn() {
  const navigation = useNavigation<InitialStackTypes>();

  const handleValidateSingIn = () => {
    navigation.navigate('Home');
  };

  return (
    <View className='flex h-full justify-center items-center'>
        <View className='flex h-5/6 b w-10/12 justify-evenly'>
            <View className='flex-row items-end justify-between'>
                <Text className='text-black font-semibold text-3xl'>Hello{'\n'}Welcome!</Text>
                <Image source={require('../../../assets/images/controlo-remoto.png')}  style={{width: 110, height: 110}}/>
            </View>
            <View>
            <InputForm placeholderText="Phone Number or Email" autoCapitalize="none" autoCorrect={false} keyboardType="default" />
            <InputForm placeholderText="Name" autoCapitalize="none" autoCorrect={false} keyboardType="default" />
            </View>
            <View>
                <ButtonInit textButton='Sing in' hasBackground={true} onPress={handleValidateSingIn}/>
            </View>
            <View>
                <Text className='text-stone-500 text-base'>or Sing in with</Text>
                <View>
                    
                </View>
                <View className='flex-row mt-3'>
                    <Image source={require('../../../assets/images/google.png')}  style={{width: 30, height: 30}}/>
                    <Image className='ml-3' source={require('../../../assets/images/facebook.png')}  style={{width: 30, height: 30}}/>
                    <Image className='ml-3' source={require('../../../assets/images/twitter.png')}  style={{width: 30, height: 30}}/>
                </View>
            </View>
        </View>
    </View>
  )
}
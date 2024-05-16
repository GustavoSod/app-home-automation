import React from 'react'
import { View, Text, useColorScheme, Image} from 'react-native';
import ButtonInit from '../../components/buttonInit';
import { useNavigation } from '@react-navigation/native';
import { InitialStackTypes } from '../../routes/initialStack';

export default function Initial() {

  const navigation = useNavigation<InitialStackTypes>();
  const isDarkMode = useColorScheme() === 'dark';

  const handleSignInPress = () => {
    navigation.navigate('SingIn');
  };

  return (
    <View className='flex justify-center items-center h-full'>
      <View className='flex justify-evenly items-center w-4/6 h-4/5'>
        <Image source={require('../../../assets/images/casa.png')}  style={{width: 140, height: 140}}/>
        <View>
          <Text className="text-2xl text-cyan-500 font-medium mb-5 text-center">Automate Your Home</Text>
          <Text className='mb-10 text-sm text-gray-600 text-center'>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Dignissimos illum similique tempore odit!</Text>
        </View>
          <View className='w-full'>
            <ButtonInit textButton = 'Sing up' hasBackground={true}/>
            <ButtonInit textButton = 'Sing in' hasBackground={false} onPress={handleSignInPress}/>
          </View>
      </View>
    </View>
  )
}
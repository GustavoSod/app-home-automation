import React from 'react'
import { Text, View, Image, TouchableOpacity} from 'react-native'

export default function EnergyMonth({kwh , description} : {kwh: string, description: string}) {
  return (
    <View className='w-full, justify-center items-center' style={{marginStart: 30, marginEnd: 30}}>
        <View className='bg-white w-full h-20 rounded-2xl flex flex-row items-center justify-around mb-5 shadow-sm'>
            <View className='flex-row items-center'>
                <View className=' bg-cyan-500 rounded-full p-2 items-center justify-center'>
                    <Image source={require('../../../assets/images/renewable-energy.png')}  style={{width: 30, height: 30}}/>
                </View>
                <View className='ml-3'>
                    <Text className='font-bold text-base'>{kwh}</Text>
                    <Text className='text-xs text-gray-500'>{description}</Text>
                </View>
            </View>
            <TouchableOpacity className='bg-gray-800 w-11 h-11 rounded-xl items-center justify-center'>
                <Text className='text-white font-semibold text-xl'>&gt;</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}


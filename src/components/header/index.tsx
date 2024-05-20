import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';

type HeaderType = {
  type?: 'device' | 'user';
};

export default function Header({ type }: HeaderType) {
  return (
    <View className='w-full mb-7'>
      {type === 'device' ? (
        <View className='flex-row justify-between items-center' style={{ marginStart: 20, marginEnd: 20 }}>
          <View>
            <Text className='font-semibold text-xl'>Hello Device 👋</Text>
            <Text className='text-xs'>Manage your device settings</Text>
          </View>
          <TouchableOpacity className='bg-cyan-500 rounded-lg p-2'>
            <Text className='text-white font-semibold'>Add device +</Text>
          </TouchableOpacity>
        </View>
      ): type === 'user' ?(
        <View className='flex-row justify-between items-center' style={{ marginStart: 25, marginEnd: 25 }}>
          <TouchableOpacity>
            <Text className='text-gray-800 text-4xl font-semibold'>+</Text>
          </TouchableOpacity>
          <View>
            <Image source={{ uri: 'https://images.inc.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg' }} style={{width: 40, height: 40, borderRadius: 100}}/>
          </View>
        </View>
      ) : null}
    </View>
  );
}


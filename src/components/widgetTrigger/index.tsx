import React from 'react';
import { Text, View, Switch, Image} from 'react-native';

type WidgetItem = {
    value: string;
    local: string;
    metric: string;
    turned: boolean;
}

type WidgetProps = {
    items: WidgetItem[];
}

const WidgetTrigger: React.FC<WidgetProps> = ({ items }) => {
  return (
      <View className='flex flex-row justify-between flex-wrap items-start' style={{marginStart: 30, marginEnd: 30}}>
        {items.map((item, index) => (
          <View key={index} className='bg-white w-40 h-40 rounded-2xl flex items-start justify-evenly mb-5 shadow-sm'>
            <View className='flex flex-row items-center justify-around w-full'>
                <View className=' bg-gray-800 rounded-full items-center justify-center p-2'>
                    <Image source={require('../../../assets/images/thermometer.png')}  style={{width: 20, height: 20}}/>
                </View>
                <Text className='font-semibold text-2xl'>{item.value}</Text>
            </View>
            <View className='pl-3'>
                <Text className='text-xs text-gray-500'>{item.local}</Text>
                <Text className='font-semibold text-base'>{item.metric}</Text>
                <Switch value={item.turned} style={{ transform: [{ scaleX: .9 }, { scaleY: .8 }] }} trackColor={{false: '#767577', true: '#374151'}}/>
            </View>
          </View>
        ))}
      </View>
  );
}

export default WidgetTrigger;

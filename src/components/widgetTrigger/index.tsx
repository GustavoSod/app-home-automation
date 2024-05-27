import React from 'react';
import { Text, View, Switch, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
          <LinearGradient key={index} colors={item.turned ? ['#47c3ec', '#78d6f5', '#a2e4fa'] : ['#ffffff', '#f2f2f2']} className='w-40 h-40 rounded-2xl flex items-start justify-evenly mb-5 shadow-sm' style={{ backgroundColor: item.turned ? '#a2e4fa' : '#f2f2f2' }}>
            <View className='flex flex-row items-center justify-around w-full'>
                <View className=' bg-gray-800 rounded-full items-center justify-center p-2'>
                    <Image source={require('../../../assets/images/thermometer.png')}  style={{width: 20, height: 20}}/>
                </View>
                <Text className='font-bold text-2xl' style={{color: item.turned ? '#fff' : '#000'}}>{item.value}</Text>
            </View>
            <View className='pl-3'>
                <Text className='text-xs text-gray-500'>{item.local}</Text>
                <Text className='font-semibold text-base'>{item.metric}</Text>
                <Switch value={item.turned} style={{ transform: [{ scaleX: .9 }, { scaleY: .8 }] }} trackColor={{false: '#767577', true: '#374151'}}/>
            </View>
          </LinearGradient>
        ))}
      </View>
  );
}

export default WidgetTrigger;

import React from 'react';
import { Text, View, Switch, Image, Dimensions } from 'react-native';
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

const { width } = Dimensions.get('window');

const widgetsCount = (array: any[], size: number) => {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
}

const WidgetTrigger: React.FC<WidgetProps> = ({ items }) => {
  const chunkedItems = widgetsCount(items, 2);

  return (
    <View style={{marginStart: 20, marginEnd: 20}}>
      {chunkedItems.map((chunk, index) => (
        <View key={index} className='flex flex-row w-full justify-between mb-5'>
          {chunk.map((item, subIndex) => (
            <LinearGradient 
              key={subIndex} 
              colors={item.turned ? ['#47c3ec', '#78d6f5', '#a2e4fa'] : ['#fff', '#fff']} 
              className='rounded-2xl flex items-start justify-evenly shadow-sm' 
              style={{ backgroundColor: item.turned ? '#a2e4fa' : '#f2f2f2', width: '45%', height: width * 0.45 }}
            >
              <View className='flex flex-row items-center justify-around w-full'>
                <View className=' bg-gray-800 rounded-full items-center justify-center p-2'>
                  <Image source={require('../../../assets/images/thermometer.png')} style={{ width: 20, height: 20 }} />
                </View>
                <Text className='font-bold text-2xl' style={{ color: item.turned ? '#fff' : '#000' }}>{item.value}</Text>
              </View>
              <View className='pl-3'>
                <Text className='text-xs text-gray-500'>{item.local}</Text>
                <Text className='font-semibold text-base'>{item.metric}</Text>
                <Switch 
                  onChange={() => console.log('on')} 
                  value={item.turned} 
                  style={{ transform: [{ scaleX: .9 }, { scaleY: .8 }] }} 
                  trackColor={{ false: '#767577', true: '#374151' }} 
                />
              </View>
            </LinearGradient>
          ))}
          {chunk.length < 2 && <View style={{ width: '40%' }} />}
        </View>
      ))}
    </View>
  );
}

export default WidgetTrigger;
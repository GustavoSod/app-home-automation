import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import WidgetTrigger from '../../components/widgetTrigger';
import EnergyMonth from '../../components/energyMonth';
import Header from '../../components/header';

const Home = () => {
  const items = [
    { value: '90%', metric: 'Alexa Sound', local: 'Kitchen', turned: false },
    { value: '19º', metric: 'Air Conditioner', local: 'Working Space', turned: true },
    { value: '30º', metric: 'Temperature', local: 'Room Space', turned: true },
    { value: '63%', metric: 'Charger', local: 'Game Space', turned: false },
  ];

  return (
    <SafeAreaView>
      <Header type= 'user'/>
      <Header type= 'device'/>
      <EnergyMonth kwh = '63 kWh' description= "consumo dos ultimos 30 dias"/>
      <View>
        <View className='flex-row justify-between items-center mb-3' style={{marginStart: 20 , marginEnd: 20}}>
          <Text className='font-semibold text-xl'>Linked to you</Text>
          <Text className='text-gray-600 text-sm'>See all -&gt;</Text>
        </View>
        <WidgetTrigger items={items} />
      </View>
    </SafeAreaView>
  );
}

export default Home;
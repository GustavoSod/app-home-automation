import React from 'react';
import { SafeAreaView, View } from 'react-native';
import WidgetTrigger from '../../components/widgetTrigger';

const Home = () => {
  const items = [
    { value: '90%', metric: 'Alexa Sound', local: 'Kitchen', turned: false },
    { value: '90%', metric: 'Air Conditioner', local: 'Working Space', turned: true },
  ];

  return (
    <SafeAreaView>
      <WidgetTrigger items={items} />
    </SafeAreaView>
  );
}

export default Home;

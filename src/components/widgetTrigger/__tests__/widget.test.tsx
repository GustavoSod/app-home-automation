import 'react-native';
import React from 'react';
import WidgetTrigger from '..';
import {it} from '@jest/globals';
import {fireEvent, render} from '@testing-library/react-native'

const items = [
    {
      value: 'lala 22°C',
      local: 'lala Living Room',
      metric: 'lala Temperature',
      turned: true
    },
    {
      value: '55%',
      local: 'Basement',
      metric: 'Humidity',
      turned: false,
    },
  ];

  describe('widgetTrigger', () => {
    const handleSwitch = jest.fn();
    it('show all metrics', () => {
      const {getAllByText} = render(<WidgetTrigger items={items} handleSwitch={handleSwitch}/>);
      expect(getAllByText(/lala/i).length).toBe(3);
      items.forEach(item => {
        expect(getAllByText(item.value)).toBeTruthy();
        expect(getAllByText(item.local)).toBeTruthy();
        expect(getAllByText(item.metric)).toBeTruthy();
      });
    });

    it('turn metric when switch was pressed', () => {
      const { getAllByTestId } = render(<WidgetTrigger items={items} handleSwitch={handleSwitch} />);
      const switches = getAllByTestId('metric-switch');
  
      // Existem dois switches, um para cada item
      expect(switches.length).toBe(2);
  
      // Simulando a mudança de valor do primeiro switch
      fireEvent(switches[0], 'valueChange', true);
      expect(handleSwitch).toHaveBeenCalledTimes(1);
  
      // Simulando a mudança de valor do segundo switch
      fireEvent(switches[1], 'valueChange', true);
      expect(handleSwitch).toHaveBeenCalledTimes(2);
    });
  })
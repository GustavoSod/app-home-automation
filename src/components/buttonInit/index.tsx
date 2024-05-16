import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface ButtonInitProps {
  textButton: string;
  hasBackground: boolean;
  onPress?: () => void;
}

export default function ButtonInit({ textButton, hasBackground, onPress }: ButtonInitProps) {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 8,
        padding: 14,
        width: '100%',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: hasBackground ? '#00bcd4' : '#fff',
      }}
      onPress={onPress} // Adicionando o onPress ao TouchableOpacity
    >
      <Text style={{ color: hasBackground ? '#fff' : '#00bcd4', fontWeight: 'bold', fontSize: 16 }}>{textButton}</Text>
    </TouchableOpacity>
  );
}

import React from 'react'
import { TextInput, TextInputProps } from 'react-native'

type InputFormProps = {
    placeholderText?: string;
    secureTextEntry?: boolean;
    autoCapitalize?: "none" | "sentences" | "words" | "characters";
    autoCorrect?: boolean;
    keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
    onChangeText?: (text: string) => void;
};  

export default function InputForm(props: InputFormProps) {
  const { placeholderText, secureTextEntry, autoCapitalize, autoCorrect, keyboardType, onChangeText } = props;
  
  return (
    <TextInput 
      className='border-b p-3 mb-4 border-stone-500 w-11/12 text-base'
      placeholder={placeholderText} 
      secureTextEntry={secureTextEntry} 
      placeholderTextColor={'gray'}
      autoCapitalize={autoCapitalize} 
      autoCorrect={autoCorrect} 
      keyboardType={keyboardType} 
      onChangeText={onChangeText} 
    />
  )
}

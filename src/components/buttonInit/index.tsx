import { Text, TouchableOpacity } from 'react-native'

export default function ButtonInit({textButton, hasBackground} : {textButton: string, hasBackground: boolean}) {
  return (
    <TouchableOpacity className='rounded-xl p-3.5 w-full mb-3 justify-center, items-center' style={[ hasBackground ? { backgroundColor: '#00bcd4' } : { backgroundColor: '#fff' }]}>
      <Text style={[ hasBackground ? { color: '#fff' } : { color: '#00bcd4' }]} className='text-white font-bold text-base'>{textButton}</Text>
    </TouchableOpacity>
  )
}
import { TouchableOpacity,Text, View, Image  } from 'react-native'
import React from 'react'
import tw from 'twrnc'; // Importa twrnc

const CustomButton = () => {
  return (
    <TouchableOpacity style={tw`bg-orange-600 rounded-xl min-h-[62px] justify-center items-center`}>
      <Text className="text-xl">CustomButton</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
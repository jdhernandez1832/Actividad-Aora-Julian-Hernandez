import { TouchableOpacity, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc'; 

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity 
      onPress={handlePress}
      activeOpacity={0.7}
      style={tw`bg-[#ffa101] rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''} `}
      disabled={isLoading}
    >
      <Text style={tw`font-semibold text-lg text-black ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton;

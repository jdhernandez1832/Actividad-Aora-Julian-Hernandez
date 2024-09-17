import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import tw from 'twrnc'; // Importa twrnc para utilizar Tailwind en React Native

import { icons } from "../constants";

const  SearchInput= ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
      <View style={tw`w-full h-16 px-4 bg-[#1f1b2e] rounded-2xl border-2 border-[#444] flex flex-row items-center space-x-4`}>
        <TextInput
          style={tw`text-base mt-0.5 text-white flex-1 font-pregular`}
          value={value}
          placeholder="Search for a video topic"
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        <TouchableOpacity>
            <Image 
                source={icons.search}
                style={tw`w-5 h-5`}
                resizeMode="contain"
            />
        </TouchableOpacity>
      </View>
  );
};

export default SearchInput;

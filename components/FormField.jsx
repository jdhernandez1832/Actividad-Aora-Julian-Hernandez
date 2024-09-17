import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import tw from 'twrnc'; // Importa twrnc para utilizar Tailwind en React Native

import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={tw`space-y-2 ${otherStyles}`}>
      <Text style={tw`text-base text-gray-100 font-pmedium`}>{title}</Text>

      <View style={tw`w-full h-16 px-4 bg-[#1f1b2e] rounded-2xl border-2 border-[#444] flex flex-row items-center`}>
        <TextInput
          style={tw`flex-1 text-white font-psemibold text-base`}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              style={tw`w-6 h-6`}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

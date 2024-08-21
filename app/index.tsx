import { Text, View, Image } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import tw from 'twrnc'; // Importa twrnc
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import  CustomButton  from '../components/CustomButton';

import {images} from '../constants';

export default function App() {
  return (
    <SafeAreaView style={tw`bg-black h-full`}>
        <ScrollView contentContainerStyle={{height: '100%'}}>
            <View style={tw`w-full justify-center items-center h-full px-4`}>
              <Image
                source={images.logo}
                style={tw`w-[130px] h-[84px]`}
                resizeMode='contain'
              />
              <Image
                source={images.cards}
                style={tw`max-w-[380px] w-full h-[300px]`}
                resizeMode='contain'
              />

              <View style={tw`relative mt-5`}>
                <Text style={tw`text-3xl text-white font-bold text-center`}>
                  Discover Endless Possibilitis with {' '}
                  <Text style={tw`text-orange-500`}>Aora</Text>
                </Text>

                <Image
                  source={images.path}
                  style={tw`w-[136px] h-[15px] absolute  -bottom-2 -right-8`}
                  resizeMode='contain'
                />
              </View>
              <Text style={tw`text-center text-sm font-pregular text-gray-100 mt-7`}>
                Where creativity meets innovation: embark on a journey of limitless exploration with Aora
              </Text> 

              <CustomButton/>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}


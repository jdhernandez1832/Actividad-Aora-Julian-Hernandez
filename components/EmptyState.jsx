import { View, Text, Image } from 'react-native'
import {router} from 'expo-router';
import tw from 'twrnc';

import { images } from '../constants';
import CustomButton from "./CustomButton";

const EmptyState = ({title, subtitle}) => {
  return (
    <View style={tw`justify-center items-center px-4`}>
      <Image source={images.empty} 
      style={tw`2-[270px] h-[215px]`}
      resizeMode='contain'
      />
        <Text style={tw`font-pmedimium text-sm text-gray-100`}>
            {title}
        </Text>
        <Text style={tw`text-xl font-psemibold text-white mt-2`}> 
            {subtitle}
        </Text>

        <CustomButton
            title="Create video"
            handlePress={()=> router.push('/create')}
            containerStyles="w-full my-5"
        />
    </View>
  )
}

export default EmptyState
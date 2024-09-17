import { View, Text, ScrollView, Image, Alert } from 'react-native'; // Asegúrate de importar Image
import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

import { images } from '../../constants'; // Asegúrate de que esta ruta sea correcta
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router';

import { getCurrentUser, signIn } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignIn = () => {
  const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);

    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLogged(true);

      Alert.alert("Success", "User signed in successfully");
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={tw`bg-[#171324] h-full`}>
      <ScrollView>
        <View style={tw`w-full justify-center min-h-[83vh] px-4 my-6`}>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={tw`w-[115px] h-[35px]`}
          />
          <Text style={tw `text-2xl text-white text-semibold mt-10 font-psemibold`}>Log in to Aora</Text>
          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e)=> setForm({...form, 
              email: e })}
              otherStyles="mt-7"
              keyboardType="email-address"
          />
          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e)=> setForm({...form, 
              password: e })}
              otherStyles="mt-7"
              keyboardType="email-address"
          />

          <CustomButton 
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading ={isSubmitting}
          />
          <View style={tw`justify-center pt-5 flex-row gap-2`}>
              <Text style={tw`text-lg text-gray-100 font-pregular`}> 
                Don't have an account?
              </Text>
              <Link href="/sign-up" style={tw`text-lg font-psemibold text-[#ffa101] `}>Sing up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

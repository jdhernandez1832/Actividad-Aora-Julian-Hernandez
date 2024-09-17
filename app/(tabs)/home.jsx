import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';

import { images } from '../../constants';
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import EmptyState from '../../components/EmptyState';

import { getAllPosts} from "../../lib/appwrite";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const fetchData= async()=> {
      setIsLoading(true);

      try {
        const response = await getAllPosts();
        setData(response);
      } catch (error) {
          Alert.alert('Error', error.message)
      }finally{
        setIsLoading(false);
      }
    }
    fetchData();
  },[]);
  console.log(data);
  const [refreshing, setRefreshin] = useState(false)

  const onRefresh= async () =>{
      setRefreshin(true);
  
      setRefreshin(false);
    }

  return (
    <SafeAreaView style={tw`bg-[#171324] h-full`}>
      <FlatList 
        data={[{id: 1}, {id: 2}]}
        keyExtractor={(item)=> item.$id}
        renderItem={({item})=>(
          <Text style={tw`text-3xl text-white`}>{item.id}</Text>
        )}
        ListHeaderComponent={()=>(
            <View style={tw`my-6 px-4 space-y-6`}>
              <View style={tw`justify-between items-start flex-row mb-6`}>
                <View>
                  <Text style={tw`font-pmedimium text-sm text-gray-100`}>
                    Welcome Back
                  </Text>
                  <Text style={tw`text-2xl font-psemibold text-white`}> 
                      JSMastery
                  </Text>
                </View>
                <View style={tw`mt-1.5`} >
                  <Image 
                    source={images.logoSmall}
                    style={tw`w-9 h-10`}
                    resizeMode='contain'
                  />
                </View>
              </View>

              <SearchInput />

              <View style={tw`w-full flex-1 pt-5 pb-8`}>
                  <Text style={tw`text-gray-100 text-lg font-pregular mb-3`}> 
                    Latest Videos
                  </Text>

                  <Trending posts={[{id:1}, {id:2}] ?? []}/>
              </View>
            </View>
        )}
        ListEmptyComponent={()=>(
          <EmptyState 
            title="No Videos Found"
            subtitle="Be the first one to upload a video"
          />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
  )
}

export default Home
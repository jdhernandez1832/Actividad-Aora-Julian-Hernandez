import { View, Text, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const Trending = ({ posts }) => {
  return (
    <FlatList 
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item })=>(
            <Text style={tw`text-3xl text-white`}>{item.id}</Text>
        )}
        horizontal
    />
  )
}

export default Trending
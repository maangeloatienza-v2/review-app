import React, { useState } from 'react';
import { globalStyles } from './../styles/global';

import Card from './../shared/card';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native'; 

export default function Home({navigation}) {
  const [reviews, setReviews] = useState([
    {
      title : 'Zelda',
      rating : 2,
      body : 'haven\'t tried it myself',
      key : '1'
    },
    {
      title : 'Pokemon',
      rating : 5,
      body : 'Sample text',
      key : '2'
    },
    {
      title : 'NBA 2k',
      rating : 4,
      body : 'Sample text',
      key : '3'
    }
  ]);


  return (
    <View style={globalStyles.container}>
      <FlatList
        data= {reviews}
        renderItem={({item})=>(
          <TouchableOpacity>
            <Card>
              <Text 
                style = {styles.text}
                onPress={()=>{
                  navigation.navigate('ReviewDetails', item)
                }}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text : {
    padding :10,
    fontFamily : 'notable-regular',
  }
});
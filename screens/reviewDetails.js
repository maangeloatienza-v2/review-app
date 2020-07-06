import React from 'react';
import {globalStyles} from './../styles/global';
import Card from './../shared/card';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native'; 

export default function ReviewDetails({route,navigation}) {

  const onPressHandler = () => {
    navigation.goBack();
  }

  const {key,title,body,rating} = route.params;

  return (
    <View style = {globalStyles.container}>
      <Card>
        <Text style = {globalStyles.font}>
          {title}
        </Text>
        <Text>
          {body}
        </Text>
        <Text>
          Rating {rating}
        </Text>
      </Card>
      <View>
        <Button title="Go back to Home"
          onPress={onPressHandler}
        />
      </View>  
    </View>
  )
}

const styles = StyleSheet.create({

});
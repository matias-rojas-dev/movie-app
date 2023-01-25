import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../navigation/NavigationScreen';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}
// en route viene toda la data
export const DetailScreen = ({route}: Props) => {
  const {title} = route.params;

  return (
    <View>
      <Text> {title} </Text>
    </View>
  );
};

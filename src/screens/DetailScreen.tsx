import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import {RootStackParams} from '../navigation/NavigationScreen';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const {height: ScreenHeigth} = Dimensions.get('screen');

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}
// en route viene toda la data
export const DetailScreen = ({route}: Props) => {
  const {title, original_title, poster_path} = route.params;
  const uri = `https://image.tmdb.org/t/p/w500/${poster_path} `;

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{uri}} style={styles.posterImage} />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}> {original_title} </Text>
        <Text style={styles.title}> {title} </Text>
      </View>

      <View style={styles.marginContainer}>
        <Icon name="star-outline" color="gray" size={20} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: ScreenHeigth * 0.6,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,

    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBorder: {
    flex: 1,

    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

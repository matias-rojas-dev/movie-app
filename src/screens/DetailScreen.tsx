import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {RootStackParams} from '../navigation/NavigationScreen';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {useMovieDetails} from '../hooks/useMovieDetails';
import {MovieDetails} from '../components/MovieDetails';

const {height: ScreenHeigth} = Dimensions.get('screen');

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}
// en route viene toda la data
export const DetailScreen = ({route, navigation}: Props) => {
  const {title, original_title, poster_path, id} = route.params;

  const uri = `https://image.tmdb.org/t/p/w500/${poster_path} `;

  const {isLoading, cast, movieFull} = useMovieDetails(id);
  useMovieDetails(id);

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

      {isLoading ? (
        <ActivityIndicator color="gray" style={{marginTop: 20}} />
      ) : (
        <MovieDetails movieFull={movieFull!} cast={cast} />
      )}

      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon color="white" name="arrow-back-outline" size={40} />
        </TouchableOpacity>
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
    marginHorizontal: 15,
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
  backButton: {
    position: 'absolute',
    // ios
    zIndex: 999,
    //android
    top: 20,
    left: 20,
  },
});

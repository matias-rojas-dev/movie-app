import React from 'react';
import {ActivityIndicator, Dimensions, View, ScrollView} from 'react-native';
import {MoviePoster} from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import {useMovies} from '../hooks/useMovies';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HorizontalSlider} from '../components/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {nowPlayingMovies, isLoading, popularMovies} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <View style={{height: 440}}>
          <Carousel
            data={nowPlayingMovies}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>

        {/* populars movies */}
        <HorizontalSlider title="En cine" movies={nowPlayingMovies} />
        <HorizontalSlider title="Populares" movies={popularMovies} />
        {/* <HorizontalSlider title="Populares" movies={popularMovies} /> */}
        {/* <HorizontalSlider title="Populares" movies={popularMovies} /> */}
      </View>
    </ScrollView>
  );
};

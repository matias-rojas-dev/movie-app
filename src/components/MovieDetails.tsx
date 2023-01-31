import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';
import {MovieFull} from '../interfaces/movieInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import {CastItem} from './CastItem';
import {FlatList} from 'react-native-gesture-handler';
interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  const {release_date, vote_average, genres, overview, budget} = movieFull;

  return (
    <>
      {/* Detalles */}
      <View style={styles.detailsContainer}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="gray" size={16} />
          <Text style={{marginRight: 10}}> {vote_average} </Text>
        </View>
        <View style={{flex: 1}}>
          <Text>{genres.map(gen => gen.name).join(', ')}</Text>
        </View>

        {/* Resume */}
      </View>
      <Text style={styles.sectionDetails}>Historia</Text>
      <Text style={styles.infoImage}>{overview}</Text>

      {/* Resume */}
      <Text style={styles.sectionDetails}>Presupuesto</Text>
      <Text style={styles.infoImage}>
        USD {currencyFormatter.format(budget, {code: 'USD'})}
      </Text>
      {/* Credits */}
      <Text style={styles.sectionDetails}>Reparto</Text>
      <View>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginBottom: 40}}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionDetails: {
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
  infoImage: {marginHorizontal: 20, fontSize: 16},
});

import React from 'react';
import {Cast} from '../interfaces/creditsInterface';
import {Text, View, Image, StyleSheet} from 'react-native';

interface Props {
  actor: Cast;
}

export const CastItem = ({actor}: Props) => {
  const {name, character, profile_path} = actor;

  const uri = `https://image.tmdb.org/t/p/w500/${profile_path} `;

  return (
    <View style={styles.container}>
      {profile_path && (
        <Image
          source={{uri}}
          style={{width: 50, height: 50, borderRadius: 10}}
        />
      )}
      <View style={styles.actorInfo}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{name}</Text>
        <Text style={{fontSize: 16, opacity: 0.7}}>{character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginLeft: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 2,
    marginVertical: 10,
    paddingRight: 10,
  },
  actorInfo: {
    marginLeft: 5,
  },
});

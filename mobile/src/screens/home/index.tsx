import React from 'react';
import { FlatList, Image, View } from 'react-native';

import logoImage from '../../assets/logo-nlw-esports.png'
import { GameCard } from '../../components/gameCard';
import { Heading } from '../../components/heading';
import { GAMES } from '../../utils/games';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo} />

      <Heading title='Encontre seu duo!' subtitle='Selecione o game que deseja jogar...'/>
    
      <FlatList
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GameCard data={item}/>
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    
    </View>
  );
}
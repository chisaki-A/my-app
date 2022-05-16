import React from 'react';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';

import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen(props){
  const { navigation } = props;
  return(
    <View style={styles.container}>
      <View style={styles.memoheader}>
        <Text style={styles.memotitle}>買い物リスト</Text>
        <Text style={styles.memodate}>2020年12月24日 10:00</Text>
      </View>
      <ScrollView style={styles.memobody}>
        <Text style={styles.memotext}>
          買い物リスト
          ① (━する) 心覚えに書きとめること。また、その書きとめたもの。手控え。覚え書き。〔舶来語便覧（1912）〕
          ② 用件などを簡単に書きとめておくための用紙、手帳。
        </Text>
      </ScrollView>
    <CircleButton
      style={{ top: 60, bottom: 'auto' }}
      name="edit-2"
      onPress={() => { navigation.navigate('MemoEdit'); }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffffff',
  },
  memoheader: {
    backgroundColor: '#1A9DBD',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memotitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memodate: {
    color: '#ffffff',
    lineHeight: 16,
  },
  memobody: {
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  memotext: {
    fontSize: 16,
    lineHeight: 24,
  },
});

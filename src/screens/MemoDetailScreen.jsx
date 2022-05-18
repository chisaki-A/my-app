import React, { useEffect, useState } from 'react';
import { shape, string } from 'prop-types';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import { dateToString } from '../utils';
// import { useEffect } from 'react/cjs/react.production.min';


export default function MemoDetailScreen(props){
  const { navigation, route } = props;
  const { id } = route.params;
  console.log(id);
  const [memo, setMemo] = useState(null);

  useEffect(() => {
    const { currentUser } = firebase.auth();
    let unsbscribe = () => {};
    if (currentUser){
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      unsbscribe = ref.onSnapshot((doc) => {
        console.log(doc.id, doc.data());
        const data = doc.data();
        setMemo({
          id: doc.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(),
        });
      });
    }
    return unsbscribe;
  }, []);

  return(
    <View style={styles.container}>
      <View style={styles.memoheader}>
        <Text style={styles.memotitle} numberOfLines={1}>{memo && memo.bodyText}</Text>
        <Text style={styles.memodate}>{memo && dateToString(memo.updatedAt)}</Text>
      </View>
      <ScrollView style={styles.memobody}>
        <Text style={styles.memotext}>
          {memo && memo.bodyText}
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

MemoDetailScreen.propTypes = {
  route: shape({
    params: shape({ id: string }),
  }).isRequired,
};

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

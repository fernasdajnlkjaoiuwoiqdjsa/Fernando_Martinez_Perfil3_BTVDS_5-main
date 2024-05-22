import React from 'react';
import { Button, View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

export default function Pantalla1({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Integrante</Text>
      <View style={styles.buttonContainer}>
        <Button
         style={styles.botonC}
          title="Menu"
          onPress={() => navigation.navigate('Pantalla2')}
        />
      </View>
      <Card containerStyle={styles.card}>
        <Card.Title>Fernando Alonso Martinez Rosales</Card.Title>
        <Text style={styles.Codigo}>20220133</Text>
        <Card.Divider />
        <Image
          style={styles.image}
          source={require('../img/fercho.jpg')}
        />
      </Card>
      

      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 15,
  },
  card: {
    width: '90%',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 450,
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 20,
    width: '90%',
    alignItems: 'center',
  },
  botonC: {
    width: '100%',
    backgroundColor: '#3B9000',
  },
  Codigo: {
    textAlign: 'center',
  },
});

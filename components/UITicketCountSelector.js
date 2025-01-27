import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const UITicketSelectorCount = ({ ticketCount, onIncrement, onDecrement }) => {

  return (
    <View style={styles.billetSelectorContainer}>
      <Text style={styles.billetSelectorContainerTitle}>Régular - Entrée toute la soirée</Text>
      <View style={styles.billetSelectorBottomContainer}>
        <View style={styles.billetSelectorButtonContainer}>
          <TouchableOpacity style={styles.billetSelectorButton} onPress={onDecrement}>
            <Text>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.billetSelectorButton} onPress={onIncrement}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.billetSelectorBilletCount}>{ticketCount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  billetSelectorContainer: {
    flexDirection: 'column',
    padding: 15,
    marginBottom: 15,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#ccc',
  },
  billetSelectorContainerTitle: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'left'
  },
  billetSelectorBottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15
  },
  billetSelectorButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 5,
    gap: 10
  },
  billetSelectorBilletCount: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  billetSelectorButton: {
    borderRadius: 4,
    backgroundColor: '#cdcdcf',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});

export default UITicketSelectorCount;

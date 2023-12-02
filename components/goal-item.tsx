import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface GoalItemProps {
  item: { id: number; value: string };
  removeGoalHandler: (id: number) => void;
}

function GoalItem({ item, removeGoalHandler}: GoalItemProps) {
  return (
    <View style={styles.goal}>
      <Text> {item.value}</Text>
      <Button color="#f5576c" title=" X " onPress={() => removeGoalHandler(item.id)}  />
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goal: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#00f2fe',
    borderRadius: 7,
    marginBottom: 5,
    fontSize: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

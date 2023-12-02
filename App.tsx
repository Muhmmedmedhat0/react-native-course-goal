import { useState } from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import GoalItem from './components/goal-item';
import GoalinputModal from './components/goal-input-modal';

interface Goal {
  id: number;
  value: string;
}

export default function App() {
  const [enterdGoal, setEnteredGoal] = useState<string>('');
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);
  const [openModal, setOpneModal] = useState<boolean>(false);

  function goalInputHandler(goalTitle: string) {
    setEnteredGoal(goalTitle);
  }
  function addGoalHandler() {
    // clone the current courseGoals array and add the new goal to it
    setCourseGoals((prevGoals) => [...prevGoals, { id: Date.now(), value: enterdGoal }]);

    // Clear the input after adding the goal
    setEnteredGoal('');
    // close Modal
    setOpneModal(false);
  }

  function removeGoalHandler(id: number) {
    // remove the goal from the courseGoals array
    setCourseGoals((goals) => goals.filter((goal) => goal.id !== id));
  }

  return (
    <View style={styles.screen}>
      <Button
        color="#00f2fe"
        title="Add New Goal "
        onPress={() => setOpneModal(true)}
      />
      <GoalinputModal
        openModal={openModal}
        closeModal={()=> setOpneModal(false)}
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
        value={enterdGoal}
      />
      <FlatList
        data={courseGoals}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <GoalItem item={item} removeGoalHandler={removeGoalHandler} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'space-between',
    marginTop: 50,
    padding: 20,
    gap: 10,
  },
});

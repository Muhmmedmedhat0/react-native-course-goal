import React from 'react';
import { Button, TextInput, View, StyleSheet, Modal } from 'react-native';

interface GoalinputModalProps {
  value: string;
  goalInputHandler: (goalTitle: string) => void;
  addGoalHandler: () => void;
  openModal: boolean;
  closeModal: () => void;
}

function GoalinputModal({closeModal,
  openModal,
  value,
  addGoalHandler,
  goalInputHandler,
}: GoalinputModalProps) {
  return (
    <Modal visible={openModal} animationType="slide">
      <View style={styles.inputContainerr}>
        <TextInput
          style={styles.input}
          placeholder="course goal"
          onChangeText={goalInputHandler}
          value={value}
        />
        <View style={styles.buttonContainer}>
          <Button color="#f5576c" title="  close x " onPress={closeModal} />
          <Button color="#00f2fe" title="  Add +  " onPress={addGoalHandler} />
        </View>
      </View>
    </Modal>
  );
}

export default GoalinputModal;

const styles = StyleSheet.create({
  inputContainerr: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ebedee',
  },
  input: {
    borderColor: '#00f2fe',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    borderRadius: 7,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

import React, { useState } from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';

// Define the component with React.FC type
const App: React.FC = () => {
  // Define state with explicit type annotation
  const [message, setMessage] = useState<string>('Press Me!');

  return (
    <View style={styles.container}>
      {/* Pressable with onPressOut */}
      <Pressable
        style={styles.button}
        onPressOut={() => setMessage('Released!')} // Fired when the press is released
      >
        <Text style={styles.text}>{message}</Text>
      </Pressable>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});

export default App;

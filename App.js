import {
  SafeAreaView,
  Button,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";

function App() {
  const ui = (
    <SafeAreaView style={styles.main}>

      <StatusBar hidden={false} />

      <View style={styles.view1}>
        <Text>view1</Text>
        <Button title="Save"/>
      </View>
      <View style={styles.view2}>
        <Text>view2</Text>
      </View>
      <View style={styles.view3}>
        <Text>view3</Text>
      </View>
    </SafeAreaView>
  );

  return ui;
}

const styles = StyleSheet.create({
  main: {
    backgroudnColor: "red",
    flex: 1,
  },

  view1: {
    backgroundColor: "green",
    flex: 1,
  },

  view2: {
    backgroundColor: "blue",
    flex: 1,
  },

  view3: {
    backgroundColor: "yellow",
    flex: 1,
  },
});

export default App;

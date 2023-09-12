import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

// import Constants from 'expo-constants';

const App = () => {
  const styleTypes = ['default', 'dark-content', 'light-content'];
  const [visibleStatusBar, setVisibleStatusBar] = useState(false);
  const [styleStatusBar, setStyleStatusBar] = useState(styleTypes[0]);

  const changeVisibilityStatusBar = () => {
    setVisibleStatusBar(!visibleStatusBar);
  };

  const changeStyleStatusBar = () => {
    const styleId = styleTypes.indexOf(styleStatusBar) + 1;

    if (styleId === styleTypes.length) {
      return setStyleStatusBar(styleTypes[0]);
    }
    return setStyleStatusBar(styleTypes[styleId]);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        networkActivityIndicatorVisible={true}
        hidden={true}
        barStyle="light-content"
        backgroundColor="#6ca8f1"
      />
      <View>
        <Text>123</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 100,
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ECF0F1',
    padding: 8,
  },
  buttonContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
  },
});

export default App;

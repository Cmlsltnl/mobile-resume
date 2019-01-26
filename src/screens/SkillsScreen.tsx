import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Constants } from 'expo';

type Props = {
  
};

type State = {
  
};

export class SkillsScreen extends React.Component<Props, State> {
  

  render() {
    return (
      <View style={styles.safeAreaView}>
        <Text>Skills</Text>
      </View>
    );
  }
}

const statusBarHeight = (Platform.OS === 'ios' && Number(`${Platform.Version}`) >= 11
  ? 0
  : Constants.statusBarHeight
);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    marginTop: statusBarHeight,
  },
});
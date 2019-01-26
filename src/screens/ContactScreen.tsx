import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { colors } from '../values/colors';

type Props = {
  
};

type State = {
  
};

export class ContactScreen extends React.Component<Props, State> {
  static navigationOptions = ({ navigation: { navigate }}) => ({
    title: 'Contact Me',
    headerRight: (
      <MaterialIcons
        name="info-outline"
        size={24}
        style={styles.headerButton}
        onPress={() => navigate('AboutApp')}
      />
    ),
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>Contact</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerButton: {
    color: `${colors.primary}`,
    paddingHorizontal: 16,
  },
});

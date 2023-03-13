import * as React from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Splash1 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Image
            style={styles.stretch}
            source={require('../assets/splash1.png')}
          />
        </View>
        <View style={{width: '100%'}}>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('IPhone14Pro9')}
              style={styles.skipBtn}>
              <Text style={[styles.btnText, styles.skipBtnText]}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Splash2')}
              style={styles.button}>
              <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stretch: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    height: 50,
    width: '62%',
    backgroundColor: '#0064FF',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    marginVertical: 20,
    borderRadius: 6,
  },
  skipBtn: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 20,
    marginLeft: 10,
  },
  skipBtnText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  btnText: {
    fontSize: 14,
    color: '#fff',
  },
});

export default Splash1;

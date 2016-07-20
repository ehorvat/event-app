import { AsyncStorage } from 'react-native';
var storage = {

  async setCache(key, data) {
    await AsyncStorage.setItem(key, data, (data) => {});
  },

  async getCache(key) {
    let value = await AsyncStorage.getItem(key);
    return JSON.parse(value)
  },

  async getKeys() {
    let value = await AsyncStorage.getAllKeys()
    return value
  }

}

module.exports = storage;

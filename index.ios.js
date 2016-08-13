/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// 导入json 数据
var BadgeData = require('./BadgeData.json')
class first_app extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*返回6个包*/}
        {this.renderAllBadge()}
      </View>
    );
  }

  renderAllBadge(){
  // 定义组装所有组件
    var allBadge = [];

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('first_app', () => first_app);

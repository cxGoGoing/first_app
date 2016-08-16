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
  View,
  Image
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
    for(var i = 0;i<BadgeData.data.length;i++){
      var badge = BadgeData.data[i];
      // 直接装入数组
      allBadge.push(
          <View key={i} style={styles.outViewStyle}>
            <Image source = {{uri:badge.icon}} style={styles.imageStyle}/>
            <Text style={styles.mainTitleStyle}>
              {badge.title}
            </Text>
          </View>
      );
    }
    return allBadge;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  outViewStyle:{
    width:80,
    height:80

  },
  imageStyle:{
  },
  mainTitleStyle:{

  }
});

AppRegistry.registerComponent('first_app', () => first_app);

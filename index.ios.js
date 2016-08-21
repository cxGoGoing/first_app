/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView
} from 'react-native';
// 导入json 数据
var BadgeData = require('./BadgeData.json');
var Dimensions = require('Dimensions');


var first_app = React.createClass({
    getInitialState(){
      var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2})
      return{
        dataSource:ds.cloneWithRows(BadgeData)
      }
    },
    render(){
      return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        style={styles.container}
      />
      );
    },
    renderRow(rowData,sectionID,rowID,highlightRow){
      return (
        <View style={styles.cellStyle}>
          <Image
            source={{uri:rowData.icon}}
            style={styles.leftImageStyle}
          />
          <Text
            style={styles.rightLabelStyle}
          >
          {rowData.title}
          </Text>
        </View>);
    }

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop:25,
  },
  cellStyle:{
    backgroundColor:'white',
    borderBottomWidth:0.5,
    borderBottomColor:'green',
    flexDirection:'row',
    padding:10,

  },
  leftImageStyle:{
    width:60,
    height:60
  },
  rightLabelStyle:{

  }
});

AppRegistry.registerComponent('first_app', () => first_app);
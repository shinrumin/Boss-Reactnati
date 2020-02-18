
import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CateroryListItem from './componemts/Cateroryitems';

export default class Caterories extends React.Component{
  
  constructor(props){
  super(props);
  this.state = {
      Caterories: [
        { id: 1, name: "Mon ăn Việt"},
        { id: 2, name: "Mon ăn Nhật"},
        { id: 3, name: "Mon ăn Hàn"},
        { id: 4, name: "Mon ăn Âu"},
      ]
  };
}
  render(){
    const {Caterories} = this.state;
    return(
    
          <FlatList 
              data ={Caterories}
              renderItem= {({ item }) => <CateroryListItem Caterory={item} />}
              keyExtractor ={(item) => `${item.id}`}
              contentContainerStyle = {{paddingLeft: 18, paddingRight: 18}}
          />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16

  },
});

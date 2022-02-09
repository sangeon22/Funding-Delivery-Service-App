import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, AsyncStorage, FlatList } from 'react-native';
import Header from './MenuAddHeader';
import MenuItem from './MenuItem';
import TextModal from './TextModal';

class MenuAdd extends Component {

  componentDidMount() {
    AsyncStorage.getItem('@menu:state').then((state) => {
      this.setState(JSON.parse(state))
    })
  }

  state = {
    menus: [
      {
        title: "양념 소갈빗살",
        msg : '최고급 소갈빗살을 주문과 동시에 양념해서 나가는 즉석요리',
        price : 14000
      },
      {
        title: "양념 안창살",
        msg : '최고급 소갈빗살을 주문과 동시에 양념해서 나가는 즉석요리',
        price : 14000
      },
      {
        title: "양념 우대갈비",
        msg : '최고급 소갈빗살을 주문과 동시에 양념해서 나가는 즉석요리',
        price : 14000
      },
    ],
    showModal: false

  }

  save = () => {
    AsyncStorage.setItem('@menu:state', JSON.stringify(this.state))
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header show={() => { this.setState({ showModal: true }) }} />
        <FlatList
          data={this.state.menus}
          renderItem={({ item, index }) => {
            return (
              <MenuItem
                title={item.title}
                msg={item.msg}
                price={item.price}
                keyExtractor={(id, index) => { return id + '${index}' }}
                remove={() => {
                  this.setState({
                    menus: this.state.menus.filter((_, i) => i !== index)
                  }, this.save)
                }} />
            )
          }} />
        <TextModal isVisible={this.state.showModal}
          addtitle={(title) => {
            this.setState({
              menus: this.state.menus.concat({
                title: title,
              }),
            }, this.save)
          }}
          addMsg={(msg) => {
            this.setState({
              menus: this.state.menus.concat({
                msg: msg,
              }),
            }, this.save)
          }}
          addPrice={(price) => {
            this.setState({
              menus: this.state.menus.concat({
                price: price,
              }),
              showModal: false,
            }, this.save)
          }}
          hide={() => {
            this.setState({ showModal: false })
          }} />
      </SafeAreaView>
    );
  }
}

export default MenuAdd;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class AddEvent extends Component {
    state = {
        textInputValue: null
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container1}>
                    <TextInput
                        style={styles.i1}
                        placeholder="이벤트 및 공지사항을 작성하는 칸입니다!"
                        onChangeText={(value) => this.setState({ textInputValue: value })}
                    />
                </View>
                <View style={styles.container2}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.buttonStyle}
                        onPress={() => this.props.navigation.navigate('P17', { textInputValue: this.state.textInputValue })}>
                        <Text style={styles.buttonTextStyle}>이벤트/공지사항 등록하기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        textAlign: 'center',
    },
    container1: {
        flex: 4,
        backgroundColor: 'white',
        padding: 10,
        height: 200,
        justifyContent: 'center',
        textAlign: 'center',
    },
    container2: {
        flex: 0.5,
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'center',
        textAlign: 'center',
    },
    i1: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        flex: 1,
        borderRadius: 7,
        backgroundColor: 'lightgray',
        borderColor: 'lightgray',
    },
    buttonStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#A5FFE4',
        fontWeight: 'bold',

    },
    buttonTextStyle: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    },
})

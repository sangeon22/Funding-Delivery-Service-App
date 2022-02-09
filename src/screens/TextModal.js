import React from 'react'
import {View, TextInput, StyleSheet,} from 'react-native'
import Modal from 'react-native-modal'

const TextModal = ({
    isVisible,
    hide,
    addtitle,
    addMsg,
    addPrice
}) => {
    let content = ''
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={hide}
            avoidKeyboard
            style={styles.modal}
        >
            <View style={styles.container}>
                <TextInput
                    onChangeText={(text) => {
                        content = text
                    }}
                    onEndEditing={() => addtitle(content)}
                    placeholder="새로운 메뉴를 추가해주세요!">
                </TextInput>
            </View>
            <View style={styles.container}>
                <TextInput
                    onChangeText={(text) => {
                        content = text
                    }}
                    onEndEditing={() => addMsg(content)}
                    placeholder="새로운 메뉴의 설명을 추가해주세요!">
                </TextInput>
            </View>
            <View style={styles.container}>
                <TextInput
                    onChangeText={(text) => {
                        content = text
                    }}
                    onEndEditing={() => addPrice(content)}
                    placeholder="새로운 메뉴의 가격을 추가해주세요!">
                </TextInput>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 8,
    },
    container: {
        padding: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        marginVertical: 5
      },
})

export default TextModal
import React from 'react'
import { View, Text, StyleSheet,} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import DeleteButton from './DeleteButton'

const MenuItem = ({
    title,
    msg,
    price,
    remove
}) => {
    return (
        <Swipeable
                renderRightActions={() => <DeleteButton onPress={remove} />}>
            <View style={styles.container}>
                <View style={styles.menu}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.msg}>{msg}</Text>
                    <Text style={styles.price}>{price}</Text>
                </View>
            </View>
        </Swipeable>
        
    )
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: 100,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#30e3c2',
        borderRadius: 4,
        padding: "2%",
        marginHorizontal: '2%',
        marginBottom: "4%"
    },
    menu: {
        flexDirection: 'column',
    },
    title: {
        fontSize: 16,
        color: '#424242'
    },
    msg: {
        fontSize: 8,
        color: '#424242'
    },
    price: {
        fontSize: 14,
        color: '#424242'
    },
})

export default MenuItem
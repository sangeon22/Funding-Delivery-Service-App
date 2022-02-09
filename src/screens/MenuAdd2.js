import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Button } from 'react-native';


export default function MenuAdd2() {
    
    const noimage = 'https://cdn.icon-icons.com/icons2/1367/PNG/512/32officeicons-6_89731.png';
    const [photoValid, setphotoValid] = useState(false);

    const [name, setName] = useState("");
    const [nameValid, setNameValid] = useState(false);
    const nameChangeHandler = (text) => {
        if (text.trim().length === 0) {
            setNameValid(false);
        } else {
            setNameValid(true);
        }
        setName(text);
    };

    const [msg, setMsg] = useState("");
    const [msgValid, setMsgValid] = useState(false);
    const msgChangeHandler = (text) => {
        if (text.trim().length === 0) {
            setMsgValid(false);
        } else {
            setMsgValid(true);
        }
        setMsg(text);
    };

    const [price, setPrice] = useState("");
    const [priceValid, setPriceValid] = useState(false);
    const priceChangeHandler = (text) => {
        if (text.trim().length === 0) {
            setPriceValid(false);
        } else {
            setPriceValid(true);
        }
        setPrice(text);
    };

    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [image, setImage] = useState(null);
    useEffect(() => {
        (async () => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === 'granted');
        })();
    }, []);

    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,

        });
        console.log(result);
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    if (hasGalleryPermission === false) {
        return <Text>No access to Gallery</Text>;
    }


    return (
        <ScrollView style={styles.container}>
            <View style={styles.container0}>
                <View style={styles.i0}>
                    <Image source={
                        image == null
                            ? { uri: noimage }
                            : { uri: image }
                    }
                        style={{ flex: 3, marginTop: 15 }} resizeMode="contain" />

                    {!image && <Text style={styles.i5}>메뉴 사진을 업로드해주세요!</Text>}
                    <View style={styles.i6}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.buttonStyle2}
                            title="이미지 업로드 버튼"
                            onPress={() => pickImage()}>
                            <Text style={styles.buttonTextStyle}>메뉴 이미지 업로드 버튼</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.container2}>
                    <TextInput
                        style={styles.i2}
                        value={name}
                        placeholder="메뉴의 이름을 입력해주세요!"
                        //onChangeText={(text) => this.setState({ text })}
                        onChangeText={(text) => nameChangeHandler(text)}
                    />
                </View>

                <View style={styles.container4}>
                    <TextInput
                        style={styles.i2}
                        value={msg}
                        placeholder="메뉴에 대한 설명을 간단하게 입력해주세요!"
                        //onChangeText={(text) => this.setState({ text })}
                        onChangeText={(text) => msgChangeHandler(text)}
                    />
                </View>

                <View style={styles.container2}>
                    <TextInput
                        style={styles.i2}
                        value={price}
                        placeholder="메뉴의 가격을 입력해주세요!"
                        //onChangeText={(text) => this.setState({ text })}
                        onChangeText={(text) => priceChangeHandler(text)}
                    />
                </View>
                
                <View style={styles.container3}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.buttonStyle}
                        onPress={() => nameValid == true && image != null && msgValid == true && priceValid == true
                            ? alert('메뉴를 등록하시겠습니까?')
                            : (nameValid == false ? alert('메뉴 이름을 등록해주세요!') 
                                : (img == null ? alert('메뉴 사진을 업로드해주세요!')
                                    :(msgValid == false ? alert('메뉴의 간단한 설명을 등록해주세요!')
                                        :(priceValid == false ? alert('메뉴의 가격을 등록해주세요!')
                                            : alert('메뉴 등록이 완료되었습니다!')))))}>
                        <Text style={styles.buttonTextStyle}>메뉴 등록하기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    container0: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        textAlign: 'center',
    },
    container1: {
        flex: 1.3,
        backgroundColor: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 10,
        borderColor: 'lightgray',
        paddingBottom: 25,
        borderBottomWidth: 3

    },
    imgView: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 10

    },

    itemImg: {
        width: '95%',
        height: 270,
        resizeMode: 'cover',
        marginLeft: 10,
        borderColor: '#FAF082',
        borderWidth: 7,
        borderRadius: 2

    },
    container2: {
        flex: 2,
        backgroundColor: 'white',
        padding: 10,
        height: 80,
        justifyContent: 'center',
        textAlign: 'center',
    },
    container3: {
        flex: 0.5,
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'center',
        textAlign: 'center',
    },
    container4: {
        flex: 4,
        backgroundColor: 'white',
        padding: 10,
        height: 200,
        justifyContent: 'center',
        textAlign: 'center',
    },
    titleText: {
        padding: 8,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000'
    },
    i0: {
        flex: 2,
        height: 400,
        backgroundColor: 'white',
        borderColor: 'lightgray',
        borderWidth: 7,
        margin: 10,
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 2,
        marginTop: 20
    },
    i2: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        flex: 1,
        borderRadius: 7,
        backgroundColor: 'lightgray',
        borderColor: 'lightgray',
    },

    i3: {
        textAlign: 'center',
        fontSize: 12,
        color: 'gray',
        marginTop: 15,
    },
    i4: {
        flex: 1,
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    i5: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red',
        marginTop: 15,
    },
    i6: {
        flex: 1 / 2,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 15,
        marginBottom: 15
    },

    buttonStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#A5FFE4',
        fontWeight: 'bold',

    },
    buttonStyle2: {
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#ffe65a',
        width: '78 %'
    },

    buttonTextStyle: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 10
    },
    starImageStyle: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
    },
    title: {
        color: '#212121',
        fontSize: 32,
        fontWeight: '600',
        marginBottom: 5,
    }

});
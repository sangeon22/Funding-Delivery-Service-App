import React, { Component, useState } from 'react';
import { ScrollView, View, Text, ImageBackground, TouchableOpacity, Button, Image, StyleSheet, FlatList } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import CustomButton2 from './CustomButton2';
import CustomButton3 from './CustomButton3';
import CustomButton4 from './CustomButton4';
import CustomButton6 from './CustomButton6';
import Progress from './Progress';
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Chart from './Chart';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import Review from './Review';

export default function P12({ navigation, route }) {


  const [coment, setComent] = useState(route.params.title);
  const [name, setName] = useState(route.params.name);
  const [photo, setPhoto] = useState(route.params.photo);

  const [defaultRating, setDefaultRating] = useState(route.params.star);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const starImageFilled = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  const starImageCorner = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
  const noimage = 'https://cdn.icon-icons.com/icons2/1367/PNG/512/32officeicons-6_89731.png';
  const [photoValid, setphotoValid] = useState(false);

  if (defaultRating == null) {
    setDefaultRating({
      defaultRating: 1,
    });

  }




  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? { uri: starImageFilled }
                    : { uri: starImageCorner }
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  const [isLoading, setIsLoading] = useState(false);
  const [selectCatg, setSelectCatg] = useState(0);
  const [cart, setCart] = useState([]);
  const dataMenu =
    [
      { id: 1, name: '양념 소갈빗살', msg: '최고급 소갈빗살을 주문과 동시에 양념해서 나가는 즉석요리', price: 14000, img: require('./양념소갈빗살.jpg') },
      { id: 2, name: '양념 안창살', msg: '최고급 안창살을 주문과 동시에 양념해서 나가는 즉석요리', price: 16000, img: require('./양념안창살.jpg') },
      { id: 3, name: '양념 우대갈비', msg: '소갈비를 12~15cm 정형하여 500g 단위로 나가는 최고급 갈비', price: 19000, img: require('./양념우대갈비.jpg') },
      { id: 4, name: '된장찌개', msg: '주문 즉시 조리해서 따끈한 된장찌개', price: 6000, img: require('./된장찌개.jpg') },
      { id: 5, name: '삼겹살', msg: '삼겹살 입니다!', price: 7000, img: require('./삼겹살.jpg') }
    ];





  const componentDidMount = () => {
    setIsLoading({
      isLoading: false
    });
  }

  const renderItemReivew = ({ item }) => {
    let catg = selectCatg
    if (catg == 0) {
      return (
        <View style={styles.itemView}>
          <Image source={item.img} style={styles.itemImg}></Image>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemMsg}>{item.msg}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
            <TouchableOpacity onPress={() => onClickAddCart(item)} style={{ width: 100, backgroundColor: '#46D2D2', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 10, Padding: '2%' }}>
              <Text style={{ fontSize: 12, color: 'white', fontWeight: 'bold' }}>장바구니에 추가</Text>
              <Ionicons name="add-circle" size={16} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }


  const renderItemFood = ({ item }) => {
    let catg = selectCatg
    if (catg == 0) {
      return (
        <View style={styles.itemView}>
          <Image source={item.img} style={styles.itemImg}></Image>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemMsg}>{item.msg}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
            <TouchableOpacity onPress={() => onClickAddCart(item)} style={{ width: 100, backgroundColor: '#46D2D2', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 10, Padding: '2%' }}>
              <Text style={{ fontSize: 12, color: 'white', fontWeight: 'bold' }}>장바구니에 추가</Text>
              <Ionicons name="add-circle" size={16} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }

  const onClickAddCart = (data) => {
    const itemcart = [{
      food: data,
      quantity: 1,
      price: data.price
    }
    ];

    AsyncStorage.getItem('cart').then((dataCart) => {
      if (dataCart !== null) {
        setCart(JSON.parse(dataCart))
        cart.push(itemcart)
        AsyncStorage.setItem('cart', JSON.stringify(cart));
      }
      else {
        setCart([])
        cart.push(itemcart)
        AsyncStorage.setItem('cart', JSON.stringify(cart));
      }
      alert('장바구니에 추가되었습니다.')
    })
      .catch((err) => {
        alert(err)
      })
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.settingView}>
        <TouchableOpacity onPress={() => { navigation.navigate('ChannelList') }}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Entypo name="home" size={24} color="black" style={{ paddingLeft: '88%' }} />
        </TouchableOpacity>
      </View>

      <View style={styles.contentView}>
        <ImageBackground source={require('./공탄.jpg')} style={{ width: '100%', height: '100%', flex: 1, resizeMode: 'cover', justifyContent: "center" }}>
          <Text style={{ textAlign: 'center', fontSize: 40, fontWeight: 'bold', color: 'white', marginBottom: "5%" }}>공 탄</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: "3%" }}>
            <FontAwesome name="star" size={24} color="yellow" style={{ paddingLeft: 5 }} />
            <FontAwesome name="star" size={24} color="yellow" style={{ paddingLeft: 5 }} />
            <FontAwesome name="star" size={24} color="yellow" style={{ paddingLeft: 5 }} />
            <FontAwesome name="star" size={24} color="yellow" style={{ paddingLeft: 5 }} />
            <FontAwesome name="star-half-empty" size={24} color="yellow" style={{ paddingLeft: 5 }} />
          </View>
          <Text style={{ textAlign: 'center', fontSize: 15, color: 'white', marginBottom: "5%" }}>평가 145건 (4.5) | 방문자 47330명</Text>
          <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'flex-end', marginBottom: "5%", height: "8%" }}>
            <CustomButton2></CustomButton2>
            <CustomButton3
              onPress={() => { navigation.navigate('My') }}
            ></CustomButton3>
            <CustomButton4></CustomButton4>
          </View>
          <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'flex-end', height: "8%", marginBottom: "5%" }}>
            <TouchableOpacity style={[styles.fundButton, { backgroundColor: 'yellow' }]}
              onPress={() => { navigation.navigate('ChannelCreation') }}>
              <Text style={[styles.textTitle]}>펀딩 만들기</Text>
            </TouchableOpacity>
            <CustomButton6></CustomButton6>
          </View>
          <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'flex-end', height: "9%", width: "75%" }}>
            <Progress></Progress>
          </View>
          <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'flex-end', height: "10%", width: "74%" }}>
            <Text style={{ textAlign: 'center', fontSize: 15, color: 'yellow', fontWeight: 'bold', fontStyle: 'italic', marginRight: "32%" }}>32%</Text>
            <Text style={{ textAlign: 'center', fontSize: 12, color: 'white', marginBottom: "5%", marginRight: 22 }}>2021/05/31 16:00 마감 1/3</Text>
          </View>
        </ImageBackground>
      </View>



      <View style={styles.threeView}>
        <Text style={{ textAlign: 'center', fontSize: 15, color: 'skyblue', fontWeight: 'bold', marginBottom: "5%" }}>#안양맛집 #인덕원맛집 #평촌맛집 #가성비 #양념갈비 #안창살 #된장찌개</Text>
        <View style={{ flexDirection: 'row', height: 40, width: 300 }}>
          <Entypo name="location-pin" size={24} color="grey" />
          <Text style={{ textAlign: 'center', fontSize: 14, color: 'black', fontWeight: 'bold', marginBottom: "5%" }}>경기 안양시 동안구 인덕원로 30</Text>
        </View>
        <MapView
          style={{ flex: 1, width: "100%", height: 200, marginBottom: "5%" }}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.4020397,
            longitude: 126.9044065,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }} >
          <Marker coordinate={{ latitude: 37.4020397, longitude: 126.9044065 }} />
        </MapView>
        <View style={{ flexDirection: 'row', height: "3%", width: "75%" }}>
          <AntDesign name="clockcircle" size={17} color="grey" style={{ marginLeft: "1%" }} />
          <Text style={{ textAlign: 'center', fontSize: 14, color: 'black', fontWeight: 'bold', marginBottom: "5%", marginLeft: "2%" }}>평일(월요일 제외) 17:00 ~ 00:00 (마지막 주문 23:00)</Text>
        </View>
        <View style={{ flexDirection: 'row', height: "3%", width: "75%" }}>
          <FontAwesome name="phone" size={20} color="grey" style={{ marginLeft: "1%" }} />
          <Text style={{ textAlign: 'center', fontSize: 14, color: 'black', fontWeight: 'bold', marginBottom: "5%", marginLeft: "2%" }}>0507-1387-3880</Text>
        </View>
        <TouchableOpacity style={{ flexDirection: 'row', height: 40, width: 300 }}>
          <MaterialCommunityIcons name="wrench" size={20} color="grey" style={{ marginLeft: "1%" }} />
          <Text style={{ textAlign: 'center', fontSize: 14, color: 'black', fontWeight: 'bold', marginBottom: "5%", marginLeft: "2%" }}>오류 제보하기</Text>
        </TouchableOpacity>
        <Chart></Chart>

        <View style={styles.root}>
          <View style={{ flexDirection: 'row', height: "6%", width: "75%" }}>
            <MaterialIcons name="restaurant-menu" size={20} color="grey" />
            <Text style={{ textAlign: 'center', fontSize: 14, color: 'black', fontWeight: 'bold', marginBottom: "2.5%", marginLeft: "1%" }}>메뉴</Text>
            <TouchableOpacity style={{ marginLeft: "5%" }} onPress={() => { navigation.navigate('MenuAdd2') }}>
              <Ionicons name="add-circle" size={20} color="grey" />
            </TouchableOpacity>
            <Text style={{ textAlign: 'center', fontSize: 14, color: 'black', fontWeight: 'bold', marginBottom: "2.5%", marginLeft: "1%" }}>메뉴 추가</Text>
          </View>

          <FlatList
            data={dataMenu}
            renderItem={renderItemFood}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false} />
        </View>


      </View>

      <View style={styles.fourView}>
        <View style={styles.review}>

          <View style={styles.reviewtitle}>
            <Text style={{ textAlign: 'center', fontSize: 25, color: 'black', fontWeight: 'bold' }}>최근 리뷰</Text>
          </View>

          <View style={styles.reviewsorce}>
            <Text style={{ textAlign: 'left', fontSize: 20, color: 'black', fontWeight: 'bold' }}> 주문 가게: {name} </Text>
            <CustomRatingBar />
            <Text style={{ textAlign: 'left', fontSize: 13, color: 'black', fontWeight: 'bold' }}> 별점: {defaultRating}점 / 5점</Text>
            <Image source={{ uri: photo }} style={styles.reviewphoto}></Image>
            <Text></Text>
            <Text style={{ textAlign: 'left', fontSize: 15, color: 'black', fontWeight: 'bold' }}>코멘트: {coment} </Text>


          </View>
        </View>
      </View>

    </ScrollView>
  )


}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  settingView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#eee',
    borderBottomWidth: 5,
    paddingTop: "1.5%",
    flex: 1
  },
  contentView: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column",
    height: 435
  },
  threeView: {
    flex: 1
  },
  fourView: {
    flex: 1
  },
  fundButton: {
    width: "20%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: "2.5%"
  },
  textTitle: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  root: {
    flex: 1,
    padding: "4%"
  },
  itemView: {
    width: '100%',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 4,
    padding: "2%",
    marginBottom: "4%"
  },
  itemImg: {
    width: "35%",
    height: 100,
    resizeMode: 'cover',
    marginRight: "2%"
  },
  itemName: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  itemMsg: {
    fontSize: 9,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red'
  },
  review: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 4,
    padding: "2%",
    marginBottom: "4%",
  },

  reviewsorce: {
    width: '100%',
    height: 500,
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 4,
    padding: "2%",
    marginBottom: "4%"
  },

  reviewtitle: {
    width: '100%',
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#46D2D2',
    borderBottomWidth: 8,
    padding: "2%",
    marginBottom: "4%"
  },

  reviewphoto: {
    flex: 1,
    resizeMode: 'cover',
    borderColor: '#46D2D2',
    borderWidth: 3,
    borderRadius: 2,
    height: '100%'
  },

  customRatingBarStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 3
  },
  starImageStyle: {
    marginLeft: 4,
    width: 20,
    height: 20,
    resizeMode: 'cover',
  },
  itemImg2: {
    width: "100%",
    height: 500,
    resizeMode: 'contain',
  },
})

const style5 = StyleSheet.create({
  button: {
    width: "20%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black'
  },
  textTitle: {
    fontSize: 12,
    fontWeight: 'bold'
  }
});

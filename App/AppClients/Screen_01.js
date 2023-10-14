import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RatingBar} from "@aashu-dubey/react-native-rating-bar";



function Screen_01(){
    return(
        <View style={{flex: 1, width: '100%', padding: 10}}>
            <View style={{flex: 1, alignItems:'center'}}>
                <Image source={require('../Image/phoneTim.jpg')} style={{width: '320px', height: '320px'}}></Image>
            </View>
            <View style={{flex: 1}}>
                <View style={{flex: 1, alignItems:'center'}}>
                    <Text style={{fontSize: 15}}>Điện thoại VSmart Joy 3 - Hàng chính hãng</Text>
                </View>
                <View style={{flex: 1, flexDirection:'row'}}>
                    <View style={{flex: 1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <RatingBar
                            initialRating={2.5}
                            minRating={1}
                            direction="horizontal"
                            allowHalfRating
                            unratedColor="rgba(255, 193, 7, 0.2)"
                            itemCount={5}
                            itemPadding={0}
                            itemSize={30}
                            itemBuilder={() => <Icon name="star" color="#FFC107" size={20} />}
                            onRatingUpdate={value => console.log(value)}
                        />

                    </View>
                    <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                        <Text>(Xem 823 đánh giá)</Text>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection:'row', alignItems:'flex-end'}}>
                    <Text style={{flex: 1, fontSize:25, fontWeight:'bold' }}>1.790.000 đ</Text>
                    <Text style={{flex: 1, fontSize:20, color:'silver', textDecorationLine:'line-through'}}>1.790.000 đ</Text>
                </View>
                <View style={{flex: 1, flexDirection:'row', alignItems:'center'}}>
                    <Text style={{flex:1}}>Ở đâu rẻ hơn hoàn tiền</Text>
                    <Icon style={{flex:1}} name='question-circle-o' size={20}></Icon>
                </View>
                <View style={{flex: 2}}>
                    <Button title="4 MÀU - CHỌN MÀU"></Button>
                </View>
                <View style={{flex: 3, justifyContent:'flex-end'}}>
                    <Button color='red' title={<Text style={{fontSize:25}}>ĐẶT MUA</Text>}></Button>
                </View>
            </View>
        </View>
    )
}

export default Screen_01;
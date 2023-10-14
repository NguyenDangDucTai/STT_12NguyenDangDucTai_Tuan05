import {Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useState} from "react";

function Screen_02(){

    const [imagePhone, setImagePhone] = useState(require('../Image/phoneTim.jpg'))

    return(
        <View style={{flex:1, width:'100%', padding: 10}}>
            <View style={{flex:2, flexDirection:'row'}}>
                <View style={{flex:2}}>
                    <Image source={imagePhone} style={{width: 150, height:150}}></Image>
                </View>
                <View style={{flex:3}}>
                    <Text style={{fontSize:18}}>Điện thoại VSmart Joy 3 - Hàng chính hãng</Text>
                </View>
            </View>
            <View style={{flex:5, backgroundColor:'silver', justifyContent:'space-around'}}>
                <View style={{flex: 1, justifyContent:'center', marginHorizontal: 20}}><Text style={{fontSize:20}}>Chọn một màu bên dưới:</Text></View>
                <View style={{flex: 2, justifyContent: 'center', alignItems:'center'}}>
                    <TouchableOpacity style={{backgroundColor:'purple', width: 80, height: 80}} onPress={()=>{
                        setImagePhone(require('../Image/phoneTim.jpg'))
                    }}>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 2, justifyContent: 'center', alignItems:'center'}}>
                    <TouchableOpacity style={{backgroundColor:'white', width: 80, height: 80}}  onPress={()=>{
                        setImagePhone(require('../Image/phoneTrang.jpg'))
                    }}>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 2, justifyContent: 'center', alignItems:'center'}}>
                    <TouchableOpacity style={{backgroundColor:'black', width: 80, height: 80}} onPress={()=>{
                        setImagePhone(require('../Image/phoneDen.jpg'))
                    }}>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 2, justifyContent: 'center', alignItems:'center'}}>
                    <TouchableOpacity style={{backgroundColor:'blue', width: 80, height: 80}} onPress={()=>{
                        setImagePhone(require('../Image/phoneXanh.jpg'))
                    }}>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1, marginHorizontal: 10}}>
                    <Button title="XONG"></Button>
                </View>
            </View>
        </View>
    )
}

export default Screen_02
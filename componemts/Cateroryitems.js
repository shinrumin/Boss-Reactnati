import React from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert
}from 'react-native';
import Veena from '../assets/veena.png'


export default function CateroryItem(props){
    const { Caterory } = props; 
    return( 
        <TouchableOpacity activeOpacity= {0.5} 
        onPress={() => 
            {Alert.alert('Bạn tính làm gi tôi?',
                // [
                //     {Text: 'ko làm gi', onPress: ()=> console.log("hihi")},
                //     {
                //         Text: 'Cancel',
                //         onPress: ()=> console.log("sao vậy ta?"),
                //         styles: 'Cancel', 
                //     },
                //     {Text: "ok" ,onPress:()=> console.log("ok")},
                // ],
                // {cancelable: false},
        )}}>
        <View style={styles.container} >
            <Text style={styles.title}>{Caterory.name}</Text>
            <Image style={styles.categotyimage} source={Veena} ></Image>
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        padding: 16,
        shadowRadius: 4,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {width: 0,height: 0},
        marginBottom:16

    },
    title:{
        textTransform: "uppercase",
        marginBottom: 8,
        fontWeight: '700',
    },
    
    categotyimage:{
        width: 64,
        height: 64
 
    },
    
});
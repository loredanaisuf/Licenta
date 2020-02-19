import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button
} from 'react-native';

import MapView from 'react-native-maps';

export const Map = props => {
    const { navigate } = props.navigation

    const goToHomePage=() => {
        navigate('Home')
    }

    const [region, setRegion]=useState({
        latitude:0,
        longitude:0,
        latitudeDelta: 0.0922,
        longitudeDelta:0.0421,
    })


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setRegion({
                    latitude:position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.922,
                    longitudeDelta: 0.421,
                })
            },
            {enableHighAccuaracy: false, timeout:200000, maximumAge: 1000},
        );
    }, [])

    return (
        <View style={styles.container}>

            <MapView style={styles.map}
                region={region}>
                
                <MapView.Marker
                    title={"My position"}
                    coordinate={{latitude:region.latitude, longitude:region.longitude}}
                />            
            </MapView>

            <View>
                <TouchableOpacity style={styles.inputBox}>
                    <Text style={styles.bottonText} onPress={goToHomePage}>GoToHomePage</Text>    
                </TouchableOpacity> 
            </View>
    
        </View>


    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7f0000',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    map: {
        marginTop: 30,
        marginVertical:30,
        width: 330,
        height: 330
    },
    inputBox: {
        width: 300,
        height: 50,
        backgroundColor: '#b71c1c',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 6
      },
      bottonText:{
        paddingVertical: 14,
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign: 'center',
        justifyContent: 'center'
      },
});

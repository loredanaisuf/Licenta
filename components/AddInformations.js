import React, {useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  Button,

  TouchableOpacity
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export const AddInformations=props => {    

    constructor(props){
        super(props)
    }

    const {navigate} = props.navigation

    const goToHomePage=() => {
        navigate('Home')
    };


    return (
        <View style={styles.container}>

            <Text> Insert information</Text>
            <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Informatii"
                    placeholderTextColor="#ffffff"
            />
            

            <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Informatii"
                    placeholderTextColor="#ffffff"
            />

           
                <DateTimePicker
                    mode={date}
                    value={date}
                />

            <TouchableOpacity style={styles.inputBox}>
                 <Text style={styles.bottonText} onPress={goToHomePage}>GoToHomePage</Text>    
            </TouchableOpacity> 
        </View>
    );
}
export default AddInformations;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
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
    





import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  Button,
  TouchableOpacity
} from 'react-native';

export const Home=props => {

    const {navigate} = props.navigation

    const goToLoginPage =() =>{
      navigate('Login')
    }

    const goToMapView=() => {
      navigate('Map')
    }

    const goToAddInformations=()=>{
      navigate('AddInformations')
    }
     return (
        <View style={styles.container}>
          
            <Image style={{ width:200,height:120}}
            source={require('../images/Logo.png')}/>

            <Text style={styles.logoText}>~Main menu~</Text>

            <TouchableOpacity style={styles.inputBox}>
                <Text style={styles.bottonText} onPress={goToMapView}>ViewLocation</Text>    
            </TouchableOpacity>  

            <TouchableOpacity style={styles.inputBox}>
                <Text style={styles.bottonText} onPress={goToAddInformations}>AddInformations</Text>    
            </TouchableOpacity>  

            <TouchableOpacity style={styles.inputBox}>
                <Text style={styles.bottonText} onPress={goToLoginPage} >GoToLogin</Text>    
            </TouchableOpacity>  

        

        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7f0000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoText: {
        marginVertical:15,
        fontSize:18,
        color:'rgba(255,255,255,0.7)'
    },
    homeTextCont:{
      flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: 26
    },
    loginButton:{
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    },
    inputBox1: {
      width: 500,
      height: 90,
      backgroundColor: '#7f0000',
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
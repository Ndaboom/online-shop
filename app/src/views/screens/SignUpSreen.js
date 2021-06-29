import React from 'react';
import {View, Text, SafeAreaView, TextInput, Image, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';

function SignUpScreen({navigation}) {
    return (
    <SafeAreaView 
    style={{ paddingHorizontal:20,flex:1,backgroundColor:COLORS.white}}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection:'row', marginTop:50}}>
                <Text style={{fontWeight: 'bold', fontSize:27, color:COLORS.dark}}>MYONLINE</Text>
                <Text style={{fontWeight: 'bold', fontSize:27, color:COLORS.primary}}>SHOP</Text>
            </View>
            <View style={{marginTop:10}}>
                <Text style={{fontSize:22,fontWeight:"bold",color: COLORS.dark}}>Bienvenue,</Text>
                <Text style={{fontSize:19,fontWeight:"bold",color: COLORS.light}}>Connectez-vous pour continuer</Text>
            </View>
            <View style={{marginTop:20}}>
                <View style={STYLES.inputContainer}>
                    <Icon 
                    name="person-outline"
                    size={20}
                    color={COLORS.light}
                    style={STYLES.inputIcon}/>
                    <TextInput placeholder="Premier Nom" style={STYLES.input}>

                    </TextInput>
                </View>
                <View style={STYLES.inputContainer}>
                    <Icon 
                    name="person-outline"
                    size={20}
                    color={COLORS.light}
                    style={STYLES.inputIcon}/>
                    <TextInput placeholder="Deuxieme Nom" style={STYLES.input}>

                    </TextInput>
                </View>
                <View style={STYLES.inputContainer}>
                    <Icon 
                    name="person-outline"
                    size={20}
                    color={COLORS.light}
                    style={STYLES.inputIcon}/>
                    <TextInput placeholder="Numero de telephone" style={STYLES.input}>

                    </TextInput>
                </View>
                <View style={STYLES.inputContainer}>
                    <Icon 
                    name="person-outline"
                    size={20}
                    color={COLORS.light}
                    style={STYLES.inputIcon}/>
                    <TextInput placeholder="RCCM" style={STYLES.input}></TextInput>
                </View>
                <View style={STYLES.inputContainer}>
                    <Icon 
                    name="lock-outline"
                    size={20}
                    color={COLORS.light}
                    style={STYLES.inputIcon}/>
                    <TextInput 
                        placeholder="Mot de passe"
                        secureTextEntry
                        style={STYLES.input}>

                    </TextInput>
                </View>
                <View style={STYLES.inputContainer}>
                    <Icon 
                    name="lock-outline"
                    size={20}
                    color={COLORS.light}
                    style={STYLES.inputIcon}/>
                    <TextInput 
                        placeholder="Confirmez le mot passe"
                        secureTextEntry
                        style={STYLES.input}>

                    </TextInput>
                </View>
                <View style={STYLES.btnPrimary}>
                    <Text style={{ color:COLORS.white, fontWeight:"bold",fontSize:18}}> S'inscrire</Text>
                </View>
                <View style={{ 
                    marginVertical:20,
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center"}}>
                    <View style={STYLES.line}></View>
                        <Text style={{fontWeight:'bold',marginHorizontal:5}}>OU</Text>
                    <View style={STYLES.line}></View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <View style={STYLES.btnSecondary}>
                        <Text style={{fontWeight: 'bold'}}>S'incrire avec </Text>
                        <Image 
                        style={STYLES.btnImage}
                        source={require('../../assets/facebook.png')}/>
                    </View>
                    <View style={{width: 10}}/>
                    <View style={STYLES.btnSecondary}>
                        <Text style={{fontWeight: 'bold'}}>S'inscire avec </Text>
                        <Image 
                        style={STYLES.btnImage}
                        source={require('../../assets/google.png')}/>
                    </View>
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    marginTop: 40,
                    marginBottom: 20,
                }}>

            <Text style={{color: COLORS.light, fontWeight:'bold'}}>
            Vous avez deja un compte?
            </Text> 
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Text style={{color: COLORS.primary, fontWeight:'bold'}}> Se connecter</Text>
            </TouchableOpacity>

            </View>
        </ScrollView>
    </SafeAreaView>
    );
}

export default SignUpScreen;
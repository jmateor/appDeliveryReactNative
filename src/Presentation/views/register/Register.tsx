import React, { useEffect } from 'react'
import { Image, View, Text, TextInput, ToastAndroid, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { CustomTextInput } from '../../components/CustomTextInput';
import { RoundedButton } from '../../components/RoundedButton';
import useViewModel from './ViewModel';
import styles from './Styles';

export const RegisterScreen = () => {

  const { nombre, apellido, email, telefono, password, confirmPassword, errorMessage, onChange, register } = useViewModel();

  useEffect(() => {
    if (errorMessage != '') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage])

  return (
    // COLUMN
    <View style={styles.container}>
        <Image
          source={ require('../../../../assets/Camarones-portada.png') } 
          style={ styles.imageBackground }
          />

        <View style={ styles.logoContainer }>
          <Image 
              source={ require('../../../../assets/user_image.png') }
              style={ styles.logoImage }
          />

          <Text style={ styles.logoText }>SELECCIONA UNA IMAGEN</Text>
        </View>

        <View style={ styles.form }>

          <ScrollView>  

            <Text style={ styles.formText }>REGISTRARSE</Text>

            <CustomTextInput 
              placeholder='Nombres'
              keyboardType='default'
              image={ require('../../../../assets/user.png') }
              property='nombre'
              onChangeText={ onChange }
              value={ nombre }
              />


            <CustomTextInput 
              placeholder='Apellidos'
              keyboardType='default'
              image={ require('../../../../assets/my_user.png') }
              property='apellido'
              onChangeText={ onChange }
              value={ apellido }
              />
            
            <CustomTextInput 
              placeholder='Correo electronico'
              keyboardType='email-address'
              image={ require('../../../../assets/email.png') }
              property='email'
              onChangeText={ onChange }
              value={ email }
              />

            <CustomTextInput 
              placeholder='Telefono'
              keyboardType='numeric'
              image={ require('../../../../assets/phone.png') }
              property='telefono'
              onChangeText={ onChange }
              value={ telefono }
              />
            
            <CustomTextInput 
              placeholder='Contraseña'
              keyboardType='default'
              image={ require('../../../../assets/password.png') }
              property='password'
              onChangeText={ onChange }
              value={ password }
              secureTextEntry={ true }
              />
            
            <CustomTextInput 
              placeholder='Confirmar Contraseña'
              keyboardType='default'
              image={ require('../../../../assets/confirm_password.png') }
              property='confirmPassword'
              onChangeText={ onChange }
              value={ confirmPassword }
              secureTextEntry={ true }
              />

            <View style={{ marginTop: 30 }}>
                
                <RoundedButton text='CONFIRMAR' onPress={ () => register() } />

            </View>
          </ScrollView>
        </View>
        
    </View>
    );
}
    
// HOT RELOAD


    

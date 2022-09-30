import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import {colors, parameters, title} from '../../global/styles';
import Header from '../../components/header';
import * as AnimeTable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {SocialIcon, Button} from '@rneui/themed';

export default function SignInScreen({navigation}) {
  const [textInput2Fossued, setTextInput2Fossued] = useState(false);

  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  return (
    <View style={styles.container}>
      <Header title="MY ACCOUNT" type="arrow-back" navigation={navigation} />
      <View style={{marginLeft: 20, marginTop: 20}}>
        <Text style={title}>Sign-In</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Text style={styles.text1}>Please entre the email and passord</Text>
        <Text style={styles.text1}>register with your account</Text>
      </View>
      <View style={{marginTop: 20}}>
        <View>
          <TextInput
            style={styles.Textinput1}
            placeholder="Email"
            ref={textInput1}
            onFocus={() => setTextInput2Fossued(false)}
            onBlur={() => setTextInput2Fossued(true)}
          />
        </View>
        <View style={styles.Textinput2}>
          <AnimeTable.View
            animation={textInput2Fossued ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon name="lock" size={23} style={{}} />
          </AnimeTable.View>

          <TextInput
            style={{width: '80%'}}
            placeholder="Password"
            ref={textInput2}
            onFocus={() => {
              setTextInput2Fossued(false);
            }}
            onBlur={() => {
              setTextInput2Fossued(true);
            }}
          />

          <AnimeTable.View
            animation={textInput2Fossued ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon name="visibility-off" size={23} style={{marginRight: 10}} />
          </AnimeTable.View>
        </View>
      </View>
      <View style={{marginHorizontal: 20, marginTop: 25}}>
        <Button
          title="SIGN IN"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
          onPress={() => navigation.navigate('RootClientTabs')}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 25}}>
        <Text style={{...styles.text1, textDecorationLine: 'underline'}}>
          {' '}
          Forgot Password ?
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 10, marginBottom: 30}}>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: '#333333'}}>
          {' '}
          OR
        </Text>
      </View>
      <View style={{alignItems: 'center', marginHorizontal: 10, marginTop: 8}}>
        <SocialIcon
          title="Sign In With Facebook"
          type="facebook"
          button
          iconType="facebook"
          style={styles.Socialicon}
        />
      </View>
      <View style={{alignItems: 'center', marginHorizontal: 10, marginTop: 20}}>
        <SocialIcon
          title="Sign IN With Google"
          button
          type="google"
          style={styles.Socialicon}
        />
      </View>
      <View style={{marginLeft: 20}}>
        <Text style={{...styles.text1}}>New on XpressFood</Text>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <Button
          title="Create an account"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    fontSize: 16,
    color: colors.grey3,
  },

  Textinput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },

  Textinput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },
  Socialicon: {
    borderRadius: 12,
    height: 50,
    width: 350,
    bottom: 20,
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 40,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: '#ff8c52',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
  },
});

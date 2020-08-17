import React, {useState} from 'react';
import {StyleSheet, Image} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import AppText from '../components/AppText';
import ErrorMessage from '../components/forms/ErrorMessage';

import {AppForm, AppFormField, SubmitButton} from '../components/forms/index';

// import AppFormField from '../components/forms/AppFormField';  above import statement import as whole set
// import SubmitButton from '../components/forms/SubmitButton';
// import AppForm from '../components/forms/AppForm';

//define outside donot want this function redifine everytime function get re-render
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

export default function LoginScreen() {
  //const [email, setEmail] = useState();         //when uses Formik, no longer use this
  //const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/login-icon.jpeg')}
      />

      {/* <Formik       // Replace with AppForm component
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        {(
          {handleChange, handleSubmit, errors, setFieldTouched, touched} //return jsx expression
        ) => (
          <>
            {/* <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"    //find in documentation
                        onBlur={()=> setFieldTouched('email')}      //to avoid display all errrs at once. errors are display one by one
                        //onChangeText={text => setEmail(text)}
                        onChangeText={handleChange('email')}
                        placeholder="Email"
                        textContentType="emailAddress"
                    />
                    <ErrorMessage error={errors.email} visible={touched.email}/>
                    {/* <AppText style={{ color: 'red'}}>{errors.email}</AppText> */}
      {/* <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        //onChangeText={text => setPassword(text)}
                        onBlur={()=> setFieldTouched('password')}
                        onChangeText={handleChange('password')}
                        placeholder="Password"
                        secureTextEntry={true}
                        textContentType="password"
                    />
                    <ErrorMessage error={errors.password} visible={touched.password}/>
                     <AppText style={{ color: 'red'}}>{errors.password}</AppText> */}

      {/* <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address" //find in documentation
              name="email"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              keyboardType="email-address" //find in documentation
              name="password"
              placeholder="Password"
              secureTextEntry={true}
              textContentType="password"
            /> */}

      {/* <AppButton title="Login" color="primary" op={handleSubmit}/> */}
      {/* <SubmitButton title="Login" color="primary" />
          </>
        )}
      </Formik> */}

      <AppForm
        initialValues={{email: '', password: ''}}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address" //find in documentation
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          keyboardType="email-address" //find in documentation
          name="password"
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
        />
        <SubmitButton title="Login" color="primary" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center', //only center this item
    marginTop: 50,
    marginBottom: 20,
  },
});

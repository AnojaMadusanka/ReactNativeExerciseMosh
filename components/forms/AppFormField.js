import React from 'react';
import { useFormikContext } from 'formik'; 
import { StyleSheet } from 'react-native';

import AppTextInput from '../../components/AppTextInput';
import ErrorMessage from './ErrorMessage';

export default function AppFormField({ name, ...otherProps }) {

    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

    return(
        <>
            <AppTextInput
                //autoCapitalize="none"
                // autoCorrect={false}
                // icon="email"
                // keyboardType="email-address"    //find in documentation
                onBlur={()=> setFieldTouched(name)}      //to avoid display all errrs at once. errors are display one by one
                //onChangeText={text => setEmail(text)}
                onChangeText={handleChange(name)}
                {...otherProps}      //spread operator
                // placeholder="Email"
                // textContentType="emailAddress"
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
            {/* <AppText style={{ color: 'red'}}>{errors.email}</AppText> */}
        </>
    );
}

const styles = StyleSheet.create({
    
})
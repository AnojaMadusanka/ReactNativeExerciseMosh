import React from 'react';
import { StyleSheet } from 'react-native';
import AppButton from '../AppButton';
import { useFormikContext } from 'formik';

export default function SubmitButton({ title, color }) {

    const { handleSubmit } = useFormikContext();

    return(
        <AppButton
            title={title}
            op={handleSubmit}
            color={color}
        />
    );
}

const styles = StyleSheet.create({
    
})
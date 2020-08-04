import React, { useState } from 'react';
import { Switch } from 'react-native';

export default function App() {
    const [isNew, setIsNew] = useState(false);

    return (
            <Switch value={isNew} onValueChange={newValue => setIsNew(newValue)}/>
    );

}
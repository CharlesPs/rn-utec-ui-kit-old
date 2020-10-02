
import React, { useState } from 'react'
import { SafeAreaView, Text } from 'react-native'

import Picker from './src/Components/Picker/Picker'

const App = () => {

    const [ picker, setPicker ] = useState('py')

    return (
        <SafeAreaView>
            <Picker
                items={[
                    { label: 'Javascript', value: 'js' },
                    { label: 'Python', value: 'py' },
                    { label: 'C++', value: 'cpp' },
                ]}
                value={picker}
                onChange={(value) => setPicker(value)}
            />
            <Text>Your selection is: {picker}</Text>
        </SafeAreaView>
    )
}

export default App

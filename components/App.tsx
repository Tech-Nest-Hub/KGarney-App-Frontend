import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AppBar = () => {
    return (
        <>
        <SafeAreaView>
            <View className='flex flex-row'>

            <View className='bg-red-500/5  justify-center items-center p-4'>
                <Text className='text-lg font-semibold'>AppBar</Text>
            </View>
            <View>
                <Text className=''>List</Text>
            </View>
            </View>
        </SafeAreaView>
        </>
    )
}

export default AppBar;



// React h1 p body div section syttles header footer
// view text
// view = div
// text = p h1 h2 h3
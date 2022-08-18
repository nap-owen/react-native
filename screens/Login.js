import { View, Text, SafeAreaView, TextInput, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LockClosedIcon, UserIcon } from 'react-native-heroicons/outline';

export default function Login() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

  return (
    <SafeAreaView className="h-full w-full bg-blue-500 items-center justify-center">
        {/* Login */}
        <Text style={{display: 'flex', flexDirection: 'column', width: '90%',height: '100%', gap: '10px', alignItems: 'center', justifyContent: 'center'}}>
            <Image
                source={require('../assets/OWEN.png') }
                className='h-20 w-20'
            />
            <View className="w-full flex-row border-neutral-500 border bg-white h-10 items-center rounded-md px-4">
                <TextInput 
                    placeholder="Username"
                    keyboardType='default'
                    className='w-full h-full'
                />
                <UserIcon size={20} color='#0D99E6'/>
            </View>
            <View className="w-full flex-row border-neutral-500 border bg-white h-10 items-center rounded-md px-4">
                <TextInput 
                    placeholder="Password"
                    keyboardType='default'
                    className='w-full h-full outline-none'
                />
                <LockClosedIcon size={20} color='#0D99E6'/>
            </View>
        </Text>
    </SafeAreaView>
  )
}
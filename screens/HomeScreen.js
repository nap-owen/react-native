import { View, Text, SafeAreaView, Image, StyleSheet, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native"
import {
    UserIcon,
    ChevronDownIcon,
    SearchIcon,
    AdjustmentsIcon,
} from "react-native-heroicons/outline"

export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

  return (
    <SafeAreaView className="bg-white pt-5 pb-2">
        {/* Header */}
        <View className="flex-row px-3 pb-3 items-center gap-2">
            <Image
                source={{
                    uri: 'https://links.papareact.com/wru'
                }}
                // style={styles.img}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            <View className="flex-1">
                <Text className="fon-bold text-gray-400 text-xs">
                    Deliver Now!
                </Text>
                <Text style={styles.header_text_align} className="font-bold text-xl">
                    Current Location
                    <ChevronDownIcon size={20} color="#00CCBB" />
                </Text>
            </View>

            <UserIcon size={35} color="#00CCBB"/>
        </View>

        {/* Search */}
        <View className="flex-row w-full px-3 items-center space-x-2">
            <View className="flex-row flex-1 space-x-2 px-2 items-center h-10 bg-gray-200 justify-start rounded-sm">
                <SearchIcon color="gray" size={20} />
                <TextInput 
                    placeholder="Restaurants and cuisines"
                    keyboardType="default"
                    className="outline-0"
                />
            </View>

            <AdjustmentsIcon color="#00CCBB"/>
        </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    // border: '1px solid red',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    // paddingTop: '10px',
  },
  img: {
    height: 28,
    width: 28,
    backgroundColor: '#5153653D',
    padding: 16,
    borderRadius: '100%'
  },
  header_text: {
    flex: 1,
  },
  header_text_align: {
    display: 'flex',
    gap: 5,
    alignItems: 'center',
  }
});
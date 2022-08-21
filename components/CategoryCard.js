import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function CategoryCard({imgUrl, title}) {
  return (
    <TouchableOpacity className="relative mr-2">
        <Image 
            source={{
                uri: imgUrl,
            }}
            className="h-20 w-20 rounded"
        />
        <Text className='h-7 w-20 rounded bg-black absolute bottom-0 right-0 left-0 opacity-40'></Text>
        <Text className="absolute bottom-1 left-1 right-1 text-center text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}
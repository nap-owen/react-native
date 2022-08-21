import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

export default function Categories({data}) {
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
        {/* CategoryCard */}
        {/* Use .map when looping in React Native */}
        {data.map(data => {
            return <CategoryCard imgUrl={data.imgUrl} title={data.title} />
        })}
    </ScrollView>
  )
}
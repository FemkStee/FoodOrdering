import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@/assets/data/products';
import Colors from '@/src/constants/Colors';
import Button from '@/src/components/Button';

const sizes = ['S', 'M', 'L', 'XL'];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const defaultImage = 'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png';

  const [selectedSize, setSelectedSize] = useState('M')
  const product = products.find((product) => product.id.toString() === id);

  const addToCart = () => {
    console.warn(`Added to cart: ${product?.name}, size: ${selectedSize}`);
  }

  if (!product) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: 'Product not found' }} />
        <Text>Product not found</Text>
      </View>
    )
  }
   return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image source={{uri: product.image || defaultImage}} style={styles.image}/>
      <Text style={{fontSize: 20}}>Select size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => setSelectedSize(size)}
           style={[styles.size, {backgroundColor: selectedSize === size ? 'gainsboro' : 'white'}]}>
            <Text style={[styles.sizeText, {color: selectedSize === size ? 'black' : 'grey'}]}>{size}</Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>${product.price}</Text>
      <Button text="Add to cart" onPress={addToCart} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1
  },
  image : {
    width: '100%',
    aspectRatio: 1, // aspectRatio combination with width: '100%' makes the image square
    resizeMode: 'contain', // hole image will be shown
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
    marginTop: 'auto', // push the button to the bottom
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 1,
  },
  size: {
    backgroundColor: 'lightgrey',
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sizeText: {
    fontSize: 18,
    fontWeight: '500'
  }
});

export default ProductDetailsScreen
import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '@/src/constants/Colors';
import { Product } from '../types';

export const defaultImage = 'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png';

type ProductListItemProps = {
    product: Product;
}

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View style={styles.container}>
      {/* You have to use || operator to avoid null error */}
      <Image source={{uri: product.image || defaultImage}} style={styles.image}/>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },
  image : {
    width: '100%',
    aspectRatio: 1, // aspectRatio combination with width: '100%' makes the image square
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  }
});
import { View, FlatList } from 'react-native';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';

export default function MenuScreen() {
  return (
      <FlatList
        data={products} // data is the array of products
        renderItem={({ item }) => <ProductListItem product={item} />} // renderItem is a function that returns a component
        numColumns={2} // only this will not work, you have to set the flex: 1 in the ProductListItem component
        contentContainerStyle={{gap: 10, padding: 10}} // gap: gap under each row , padding: padding around the list
        columnWrapperStyle={{ gap: 10 }} // gap between columns
      />
  );
}
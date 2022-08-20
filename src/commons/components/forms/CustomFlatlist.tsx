import React, { ReactNode } from "react";
import {
  FlatList,
  FlatListProps,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { PRIMARY } from "../../constants/Colors";

interface IFlatlist extends FlatListProps<any> {
  data: any[];
  ListHeaderComponent?: any;
  renderItem: any;
  onEndReached: any;
}

export default function CustomFlatlist(props: IFlatlist) {
  const { data, ListHeaderComponent, renderItem, onEndReached } = props;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        style={styles.container}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReached={onEndReached}
        ListHeaderComponent={ListHeaderComponent}
        nestedScrollEnabled={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY,
    color: "#000",
    width: "100%",
  },
});

import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { useCounterStore } from "../store/counterStore";
import shallow from "zustand/shallow";

export default function App() {
  const { count, name } = useCounterStore(
    (store) => ({
      count: store.count,
      name: store.name,
    }),
    shallow
  );

  const increment = useCounterStore((store) => store.increment);

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-semibold text-2xl">{name}</Text>
      <Text className="font-semibold text-xl">Contador: {count}</Text>
      <TouchableOpacity className="mt-5" onPress={() => increment(1)}>
        <View className="py-3 px-3  rounded-full border border-blue-600 bg-blue-500 ">
          <Text className="text-white ">Increment</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

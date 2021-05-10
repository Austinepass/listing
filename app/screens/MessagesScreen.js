import React, { useState } from "react";
import { FlatList, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const initialMsg = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/jacket.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMsg);
  const [refreshing, setRefreshing] = useState(false)

  function handleDelete(message) {
    const newMsg = messages.filter((m) => m.id !== message.id);
    setMessages(newMsg);
  }
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("Message", item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => setMessages([
          {
            id: 2,
            title: "T2",
            description: "D2",
            image: require("../assets/jacket.jpg"),
          },
        ])}
      />
    </Screen>
  );
}

export default MessagesScreen;

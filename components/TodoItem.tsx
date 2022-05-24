import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Todos } from "../@Types/Todos";
import { MaterialIcons } from "@expo/vector-icons";

interface TodoItemProps {
  item: Todos;
  deleteHandler: Function;
}

const TodoItem = (props: TodoItemProps) => {
  const { item, deleteHandler } = props;

  return (
    <TouchableOpacity onPress={() => deleteHandler(item.key)}>
      <View style={styles.item}>
        <Text> {item.text} </Text>
        <MaterialIcons name="delete" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    borderColor: "#eee",
    borderWidth: 2,
    borderStyle: "dashed",
    padding: 16,
    textAlign: "center",
    marginTop: 10,
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {},
});

export default TodoItem;

import {
  FlatList,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useState } from "react";
import { Todos } from "./@Types/Todos";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

const App = () => {
  const [todos, setTodos] = useState<Todos[]>([
    { text: "buy coffee", key: 1 },
    { text: "create an app", key: 2 },
    { text: "play on the switch", key: 3 },
  ]);

  const deleteHandler = (key: number) => {
    setTodos(() => todos.filter((e) => e.key !== key));
  };

  const AddTodoHandle = (text: string) => {
    setTodos(() => [...todos, { text: text, key: todos.length }]);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Header />
          <AddTodo AddFunction={AddTodoHandle} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => {
                return <TodoItem item={item} deleteHandler={deleteHandler} />;
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
  },
  list: {
    width: "80%",
    marginLeft: "10%",
    flex: 1,
  },
});

export default App;

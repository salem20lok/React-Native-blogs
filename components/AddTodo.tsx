import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";

interface AddTodoProps {
  AddFunction: Function;
}

const AddTodo = (props: AddTodoProps) => {
  const { AddFunction } = props;

  const [todoText, setTodoText] = useState<string>("");

  return (
    <View>
      <TextInput
        style={styles.inputText}
        placeholder="Add Todo ..."
        value={todoText}
        onChangeText={(e) => setTodoText(e)}
      />
      <View style={styles.btn}>
        <Button
          color="coral"
          title={"Add Todo"}
          onPress={() => {
            if (todoText.length > 3) {
              AddFunction(todoText);
              setTodoText("");
            } else {
              Alert.alert("Ops !", "Todos must be over 3 chars long", [
                {
                  text: "okay",
                  onPress: () => {
                    console.log("closed alert");
                  },
                },
              ]);
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputText: {
    padding: 20,
    width: "80%",
    marginLeft: "10%",
    borderBottomWidth: 2,
    borderColor: "#eee",
    color: "#000",
  },
  btn: {
    width: "50%",
    marginLeft: "25%",
    marginBottom: 15,
    marginTop: 15,
    // backgroundColor: "coral",
    borderRadius: 50,
  },
});

export default AddTodo;

import { Stack } from "expo-router";

export default function MenuStack() {
  // Stack is a component that will render the children of the route that matches the current path
  return (
    <Stack>
      <Stack.Screen name="index" options={ {title: 'Menu'}}/>
    </Stack>
  )
}
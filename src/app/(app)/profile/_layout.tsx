// app/(app)/profile/_layout.tsx
import {Stack} from "expo-router";

export default function ProfileLayout() {
  return <Stack screenOptions={{headerShown: false}} />;
}

// --------Bottom Modal------------
// import { Stack } from "expo-router";

// export default function ProfileLayout() {
//   return (
//     <Stack screenOptions={{headerShown: false}}>
//       <Stack.Screen name="index" />
//       <Stack.Screen
//         name="settings"
//         options={{
//           presentation: "formSheet", // Native partial bottom sheet
//           sheetAllowedDetents: [0.5, 0.85, 1], // Lets it stop at 50%, 85%, or 100% of the screen
//           sheetGrabberVisible: true, // Shows the native iOS pill at the top
//         }}
//       />
//     </Stack>
//   );
// }

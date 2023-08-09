import { registerRootComponent } from "expo";
import RootStackNavigator from "./navigation/RootStackNavigator";

export default function App() {
  return <RootStackNavigator />;
}

registerRootComponent(App);

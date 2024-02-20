import { Image } from "react-native";

export function getImage(url: string, style: any) {
  if (url === "sweater") {
    return (
      <Image source={require("@/assets/images/sweater.jpg")} resizeMode="contain" style={style} />
    );
  } else if (url === "speaker") {
    return (
      <Image source={require("@/assets/images/speaker.jpeg")} resizeMode="contain" style={style} />
    );
  }
  if (url === "kinder") {
    return (
      <Image source={require("@/assets/images/kinder.jpg")} resizeMode="contain" style={style} />
    );
  }
}

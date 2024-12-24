import { View, Text, Image, ImageBackground, ScrollView, Button, Pressable } from 'react-native'
const logoImg = require("./assets/adaptive-icon.png");

export default function App(){
  return(

   <View style = {{ flex: 1, backgroundColor: "plum", padding: 60}}>
    <ScrollView>
     
      <Pressable onPress = {() => console.log("Image pressed")}>
        <Image source = {logoImg} style = {{ width: 300, height: 300}} />
      </Pressable>

      <Pressable>
        <Text>
          The sun dipped below the horizon, casting a warm orange glow across the sky.  

          Birds chirped softly as the evening breeze rustled through the trees.  

          A gentle stream flowed nearby, reflecting the fading light like scattered jewels.  

          In the distance, laughter echoed from a group of children playing near the meadow.  

          The world seemed at peace, wrapped in the quiet embrace of twilight.  
        </Text>
      </Pressable>


      <Image source = {logoImg} style = {{ width: 300, height: 300}} />

      <Button 
        title = "Press" onPress = {( () => console.log("Button Pressed"))}
        color = "lightyellow"
        disabled
      />

    </ScrollView>
     

  </View>

  );
}

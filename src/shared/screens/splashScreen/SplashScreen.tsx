import { RootNavigationProps } from "@/services/navigations/types";
import { palette } from "@/shared/theme/palette";
import SrfValue from "@/shared/utils/functions/SrfValue";
import LottieView from "lottie-react-native";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Image, StatusBar, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }: RootNavigationProps<"SplashScreen">) => {
  const animationColor = new Animated.Value(0);
  const animationRef = useRef(null);



  useEffect(() => {
    StatusBar.setHidden(true);
    animationRef?.current?.play(0, 120)
  }, []);

  const background_color = animationColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["#ffffff", "#2f50c1"],
  });

  return (
    <>
      <StatusBar backgroundColor={palette.primaryColor} />
      <Animated.View
        style={[
          styles.animation_container,
          { backgroundColor: background_color },
        ]}>
        <LottieView
          ref={animationRef}
          style={{flex:1,height:"100%",
            width:"100%"}}
          source={require('../../assets/animation/splashscreen.json')}
          loop={false}
          onAnimationFinish={()=>{
            StatusBar.setHidden(false);
            navigation.replace("LoginScreen");
          }}
        />
      </Animated.View>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  animatedImage: {
    height: SrfValue(30),
    width: SrfValue(30),
  },
  animation_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height:"100%",
    width:"100%"
  },
});

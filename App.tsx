import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { styles } from './styles';
import { Bart } from './components/bart';
import { Lisa } from './components/lisa';

let timer: number;

export default function App() {
  const [gravity, setGravity] = useState(0.98);
  const [upForce, setUpForce] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    const applyGravity = () => {
      let newUpForce = upForce - gravity;
      newUpForce = newUpForce < 0 ? 0 : newUpForce;
      setUpForce(newUpForce);

      let newSpeed = speed + (gravity - newUpForce / 2);
      setSpeed(newSpeed);

      let newPosY = posY - newSpeed;

      if (newPosY < 0) {
        newPosY = 0;
        setSpeed(0);
      }
      setPosY(newPosY);
    };

    clearTimeout(timer);
    timer = setTimeout(applyGravity, 30);
  }, [gravity, upForce, speed, posY]);

  const handleForceButton = () => {
    setUpForce(5);
  };

  const handleForceButtonSonic = () => {
    setUpForce(9);
  };

  const fundo = { uri: 'https://fotografias-neox.atresmedia.com/clipping/cmsimages02/2010/11/26/14F98B24-C2FD-4A9F-857F-82CC784461F7/58.jpg' };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.area}>
        <ImageBackground
          source={fundo}
          resizeMode="cover"
          style={styles.fundoImg}>
          <View>
            <Bart posY={posY} />
          </View>
          <View>
            <Lisa posY={posY} />
          </View>
        </ImageBackground>
      </View>

      <View style={styles.control}>
        <View>
          <Text style={styles.controlText}>UpForce: {upForce.toFixed(2)}</Text>
          <Text style={styles.controlText}>Speed: {speed.toFixed(2)}</Text>
          <Text style={styles.controlText}>PosY: {posY.toFixed(2)}</Text>
        </View>

        <TouchableOpacity
          style={styles.controlButton}
          onPress={handleForceButton}>
          <Text style={styles.controlText}>CLICK</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.controlButton}
          onPress={handleForceButtonSonic}>
          <Text style={styles.controlText}>CLICK</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


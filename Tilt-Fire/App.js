import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Text, TouchableWithoutFeedback } from "react-native";
import { Accelerometer } from 'expo-sensors';

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const PLAYER_WIDTH = 50;
const PLAYER_HEIGHT = 50;

const BULLET_WIDTH = 5;
const BULLET_HEIGHT = 20;

const BLOCK_WIDTH = 40;
const BLOCK_HEIGHT = 40;

export default function App() {
  const [playerX, setPlayerX] = useState((screenWidth - PLAYER_WIDTH) / 2);
  const [bullet, setBullet] = useState([]);
  const [blocks, setBlocks] = useState([]);


  // Player Accelerometer
  
useEffect(() => {
  Accelerometer.setUpdateInterval(100);

  let initialX = null;

  const subscription = Accelerometer.addListener(({ x }) => {
    if (initialX === null) initialX = x;

    const calibratedX = x - initialX;

    const leftLimit = -0.5;   
    const rightLimit = 0.5;   

    let tilt = Math.max(leftLimit, Math.min(calibratedX, rightLimit));

  
    const range = screenWidth - PLAYER_WIDTH;
    const move = ((tilt - leftLimit) / (rightLimit - leftLimit)) * range;

    setPlayerX(move);
  });

  return () => subscription.remove();
}, []);


  
  // BULLET MOVEMENT
  useEffect(() => {
    const interval = setInterval(() => {
      setBullet(prev =>
        prev
          .map(b => ({ ...b, y: b.y + 10 }))
          .filter(b => b.y < screenHeight)
      );
    }, 60);

    return () => clearInterval(interval);
  }, []);

  
  // FALLING BLOCKS
 
  useEffect(() => {
    const interval = setInterval(() => {
      const block = {
        id: Date.now(),
        x: Math.random() * (screenWidth - BLOCK_WIDTH),
        y: screenHeight - 20,
      };

      setBlocks(prev => [...prev, block]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  
  // MOVE BLOCKS DOWN
  
  useEffect(() => {
    const interval = setInterval(() => {
      setBlocks(prev =>
        prev
          .map(b => ({ ...b, y: b.y - 5 }))
          .filter(b => b.y + BLOCK_HEIGHT > 0)
      );
    }, 80);

    return () => clearInterval(interval);
  }, []);


  // BULLET → BLOCK COLLISION
  
  useEffect(() => {
    setBlocks(prevBlocks =>
      prevBlocks.filter(block => {
        const hit = bullet.some(b =>
          b.x < block.x + BLOCK_WIDTH &&
          b.x + BULLET_WIDTH > block.x &&
          b.y < block.y + BLOCK_HEIGHT &&
          b.y + BULLET_HEIGHT > block.y
        );
        return !hit;
      })
    );
  }, [bullet]);

  
  // SHOOT BULLET
  const handleBullet = () => {
    const newBullet = {
      id: Date.now(),
      x: playerX + (PLAYER_WIDTH - BULLET_WIDTH) / 2,
      y: PLAYER_HEIGHT + 20,
    };
    setBullet(prev => [...prev, newBullet]);
  };

  return (
    <TouchableWithoutFeedback onPress={handleBullet}>
      <View style={styles.container}>
        
        {bullet.map(b => (
          <View
            key={b.id}
            style={[styles.bullet, { left: b.x, bottom: b.y }]}
          />
        ))}

        {blocks.map(bl => (
          <View
            key={bl.id}
            style={[styles.fallingBlock, { left: bl.x, bottom: bl.y }]}
          />
        ))}

      
        <View style={[styles.player, { left: playerX }]} />

        <Text style={styles.instruction}>Tilt your phone to move</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 60,
  },

  player: {
    position: "absolute",
    bottom: 20,
    width: PLAYER_WIDTH,
    height: PLAYER_HEIGHT,
    backgroundColor: "#4ade80", 
    borderRadius: 10,
    shadowColor: "#4ade80",
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 12,
  },

  instruction: {
  position: "absolute",
  top: 70,
  fontSize: 20,
  fontWeight: "bold",
  color: "#f8d751ff",         
  fontFamily: "Orbitron",    
},


  bullet: {
    position: "absolute",
    width: BULLET_WIDTH,
    height: BULLET_HEIGHT,
    backgroundColor: "#60a5fa", 
    borderRadius: 3,
    shadowColor: "#60a5fa",
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 10,
  },

  fallingBlock: {
    position: "absolute",
    width: BLOCK_WIDTH,
    height: BLOCK_HEIGHT,
    backgroundColor: "#f87171",
    borderRadius: 8,
    shadowColor: "#f87171",
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
});

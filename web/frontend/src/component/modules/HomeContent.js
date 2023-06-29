import * as React from 'react';
import { Fragment, useState, useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Text, ImageBackground, Pressable } from 'react-native';
import { useHover } from 'react-native-web-hooks';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
  },
});

export default function HomeContent() {
  const aboutRef = useRef(null);
  const analysisRef = useRef(null);
  const contactRef = useRef(null);
  const isAboutHover = useHover(aboutRef);
  const isAnalysisHover = useHover(analysisRef);
  const isContactHover = useHover(contactRef);
  const navigate = useNavigate();

  const aboutImage = require('../img/aboutme.jpg');
  const frontImage = require('../img/front.jpg');
  const topImage = require('../img/top.jpg');
  const analysisImage = require('../img/sample.jpg');
  const contactImage = require('../img/contact.jpg');
  
  const getCurrentDimension = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };
  let hoverStyle = {
    hover: {
      about: {
        opacity: 0.3
      },
      analysis: {
        opacity: 0.3
      },
      contact: {
        opacity: 0.3
      }
    }
  };

  const handlePress = (event) => {
    const targetName = event.target.outerText;
    switch(targetName) {
      case "About Me":
        return navigate("/aboutme");
      case "Data Science Projects":
        return navigate("/analysis");
      case 'Contact':
        return navigate("/contact");
    };
  };
  
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener('resize', updateDimension);
    return (() => {
      window.removeEventListener('resize', updateDimension);
    });
  }, [screenSize]);

  return (
    <Fragment>
      <ImageBackground
        source={topImage}
        style={{
          resizeMode: 'cover',
          height: (screenSize.height - 300),
        }}
        blurRadius={2}
      >
        <View style={styles.container}>
          <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold'}}>
            Welcome to my Portfolio!
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          // height: '20%',
        }}
      >
        <br/><br/><br/><br/><br/>
        <Text style={{ color: 'black', fontSize: 20, textAlign: 'center'}}>
          Today, we live in a world that quickly shifts from one shape to another. {"\n"}
          As our first technology started off as making a fire, we now are capable of creating a self-learning Artificial Intelligence. {"\n"}
          What's most important about this newest creation, A.I., is that its learning mechanism is bounded to the data. {"\n"}
          And the data we are feeding it with is deriving from human inputs and thoughts. {"\n"}
          A.I. is already creating new things on its own; and yet, its boundaries are visible because its creations are based on human experiences and records. {"\n"}
          If we make new discoveries and insights from our own analysis in data, I am certain that our newest creation will not just be making copycats of human illustrations, {"\n"}
          but providing us overseen phenomenon and discoveries. {"\n"}
          I hope you find my portfolio interesting, and truly wish that my personal work makes any difference to the world. {"\n"}
        </Text>
      </View>
      <br/><br/><br/><br/><br/>
      <Pressable 
        onPress={(event) => handlePress(event)}
        ref={aboutRef}
        style={[
          isAboutHover && hoverStyle.hover.about
        ]}
        >
        <ImageBackground
          source={aboutImage}
          style={{
            resizeMode: 'cover',
            height: (screenSize.height - 300),
          }}
          blurRadius={2}
        >
          <View style={styles.container}>
            <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}>
              About Me
            </Text>
          </View>
        </ImageBackground>
      </Pressable>
      <Pressable 
        onPress={(event) => handlePress(event)}
        ref={analysisRef}
        style={[
          isAnalysisHover && hoverStyle.hover.analysis
        ]}
        >
        <ImageBackground
          source={analysisImage}
          style={{
            resizeMode: 'cover',
            height: (screenSize.height - 300),
          }}
          blurRadius={2}
        >
          <View style={styles.container}>
            <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}>
              Data Science Projects
            </Text>
          </View>
        </ImageBackground>
      </Pressable>
      <Pressable
        onPress={(event) => handlePress(event)}
        ref={contactRef}
        style={[
          isContactHover && hoverStyle.hover.contact
        ]}        
      >
        <ImageBackground
          source={contactImage}
          style={{
            resizeMode: 'cover',
            height: (screenSize.height - 300),
          }}
          blurRadius={2}
        >
          <View style={styles.container}>
            <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}>
              Contact
            </Text>
          </View>
        </ImageBackground>
      </Pressable>
      <ImageBackground
        source={frontImage}
        style={{
          resizeMode: 'cover',
          height: (screenSize.height - 300),
        }}
        blurRadius={5}
      >
        <View style={styles.container}>
          <Text style={{ color: 'white', fontSize: 28, }}>
            <h4 style={{ textAlign: 'center' }}>I was born not knowing and have had only a little time to change that here and there.</h4>
            <h6 style={{ textAlign: 'right' }}>Richard Feynman (1918.05.18 - 1988.02.15)</h6>
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '10%',
        }}
      >
        <br/>
        <Divider variant="middle"/>
        <Text style={{ color: 'black', fontSize: 15, textAlign: 'right'}}>
          Images from unsplash.com | Authors: Mark Olsen, Mohamed Alaau, Melinda Gimpel, Markus Spiske, Kevin Snow
        </Text>
      </View>
    </Fragment>
  );
};
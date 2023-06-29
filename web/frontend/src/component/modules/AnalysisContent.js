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

export default function AnalysisContent() {
  const aboutRef = useRef(null);
  const analysisRef = useRef(null);
  const contactRef = useRef(null);
  const isAboutHover = useHover(aboutRef);
  const isAnalysisHover = useHover(analysisRef);
  const isContactHover = useHover(contactRef);
  const navigate = useNavigate();

  const aboutImage = require('../img/aboutme.jpg');
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
    switch (targetName) {
      case "Carbon Neutrality":
        return navigate("/carbon-neutrality");
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
      <Grid container spacing={3}>
        <Grid item xs={4}>
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
                  Carbon Neutrality
                </Text>
              </View>
            </ImageBackground>
          </Pressable>
        </Grid>
        <Grid item xs={4}>
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
                Relevancy of Employee Benefits{"\n"}
                To The Office Productivity
                </Text>
              </View>
            </ImageBackground>
          </Pressable>
        </Grid>
        <Grid item xs={4}>
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
                  Influence of Employee {"\n"}
                  Security Leakage Risks
                </Text>
              </View>
            </ImageBackground>
          </Pressable>
        </Grid>
      </Grid>
    </Fragment>
  );
};
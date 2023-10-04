# FE-SafeJourney

This is the front-end repo for the Safe Journey app. Built using React Native, JavaScript and Node.js.

Safe Journey is a mobile app developed as part of a team during the Northcoders bootcamp. It allows you to share your location and journey plans with your friends, who can track you in real time.

---------------------------------------
##SafeJourney
API key for google map api's is stored in app.json - fix

required - root file named .env containing API_KEY=..your google maps api key with directions enabled

You will need this data in app.json in root:
{
    "expo": {
      "name": "SafeJourney",
      "slug": "SafeJourney",
      "version": "1.0.0",
      "orientation": "portrait",
      "icon": "./assets/icon.png",
      "userInterfaceStyle": "light",
      "splash": {
        "image": "./assets/splash.png",
        "resizeMode": "contain",
        "backgroundColor": "#FFFFFF"
      },
      "assetBundlePatterns": [
        "**/*"
      ],
      "ios": {
        "supportsTablet": true
      },
      "android": {
        "config": {
          "googleMaps": {
            "apiKey": "**your maps api key goes here**"
          }
        },
        "adaptiveIcon": {
          "foregroundImage": "./assets/adaptive-icon.png",
          "backgroundColor": "#FFFFFF"
        },
        "package": "com.bigsegs.SafeJourney"
      },
      "web": {
        "favicon": "./assets/favicon.png"
      }
    }
  }

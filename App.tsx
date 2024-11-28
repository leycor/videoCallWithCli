import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {CallScreen} from './src/CallScreen';
import {HomeScreen} from './src/HomeScreen';
import {
  StreamVideo,
  StreamVideoClient,
} from '@stream-io/video-react-native-sdk';

const apiKey = 'mgwehbzmzssj';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic21va2UifQ.HfEGHyH4XqnH3jjeUUTHFssCP2WtwAXdnkE6XhvcdBQ';
const userId = 'smoke';
const callId = 'default_3fa83327-e6bd-4241-8b9a-e357658c9325';

const user = {
  id: userId,
  name: 'Johann Suarez',
  image: 'https://robohash.org/John',
};

const client = new StreamVideoClient({apiKey, user, token});

export default function App() {
  const [activeScreen, setActiveScreen] = useState('home');
  const goToCallScreen = () => setActiveScreen('call-screen');
  const goToHomeScreen = () => setActiveScreen('home');

  // const theme = React.useMemo(
  //   () => ({
  //     callControlsButton: {
  //       container: {
  //         borderRadius: 10,
  //       },
  //     },
  //     hangupCallButton: {
  //       container: {
  //         backgroundColor: 'blue',
  //       },
  //     },
  //     toggleAudioPublishingButton: {
  //       container: {
  //         backgroundColor: 'green',
  //       },
  //     },
  //   }),
  //   [],
  // );

  return (
    <StreamVideo client={client}>
      <SafeAreaView style={styles.container}>
        {activeScreen === 'call-screen' ? (
          <CallScreen goToHomeScreen={goToHomeScreen} callId={callId} />
        ) : (
          <HomeScreen goToCallScreen={goToCallScreen} />
        )}
      </SafeAreaView>
    </StreamVideo>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

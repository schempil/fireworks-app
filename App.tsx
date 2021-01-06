import React from 'react';
import { StyleSheet } from 'react-native';
import WebView from "react-native-webview";

export default function App() {
  return (
			<WebView
				source={{ uri: 'https://fireworks.schemel.me' }}
				bounces={false}
			/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

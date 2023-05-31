import * as React from 'react';
import {
  Button,
  StyleSheet,
  View,
  Text,
  NativeEventEmitter,
  Platform,
} from 'react-native';
import IdwallSdk, {
  IdwallSdkEventsHandler,
  IdwallDocumentType,
  IdwallDocumentSide,
} from '@idwall/react-native-idwall-sdk';

const emitter = new NativeEventEmitter(IdwallSdkEventsHandler);

// Add enviroment tokens to initialize idwallSdk
const ID_WALL_AUTH_KEY = '';
const ID_WALL_PUBLIC_KEY = '';

export default function App() {
  const [result, setResult] = React.useState<string | Boolean | undefined>();

  React.useEffect(() => {
    IdwallSdk.initialize(ID_WALL_AUTH_KEY);
    if (IdwallSdk.ios) {
      IdwallSdk.ios.setupPublicKeys([ID_WALL_PUBLIC_KEY]);
    }

    emitter.addListener('IDWALL_USER_EVENT', value => {
      console.log(value);
    });
    IdwallSdk.enableLivenessFallback(false);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headreTitle}>IdWall</Text>
        <Text style={styles.headerText}>Versão sdk-react-native (1.6.2)</Text>
        {Platform.OS === 'ios' ? (
          <Text style={styles.headerText}>Bridge IOS (2.9.2)</Text>
        ) : (
          <Text style={styles.headerText}>Bridge ANDROID (2.10.2)</Text>
        )}
      </View>
      <View style={styles.containerOptions}>
        <Text style={styles.title}>Chamadas de fluxo:</Text>
        <Button
          onPress={() => {
            IdwallSdk.startLivenessFlow().then(setResult);
          }}
          title="Fluxo de Liveness"
          color="#5500FF"
          accessibilityLabel="Fluxo de Liveness"
        />
        <Button
          onPress={() => {
            IdwallSdk.startDocumentFlow(IdwallDocumentType.RG).then(setResult);
          }}
          title="Fluxo de Documento (RG)"
          color="#5500FF"
          accessibilityLabel="Fluxo de Documento RG"
        />
        <Button
          onPress={() => {
            IdwallSdk.startCompleteFlow(IdwallDocumentType.CNH).then(setResult);
          }}
          title="Fluxo Completo com CNH"
          color="#5500FF"
          accessibilityLabel="Fluxo Completo com CNH"
        />
        <Button
          onPress={() => {
            IdwallSdk.startCompleteFlow(IdwallDocumentType.CHOOSE).then(
              setResult,
            );
          }}
          title="Fluxo Completo com escolha"
          color="#5500FF"
          accessibilityLabel="Fluxo Completo com escolha de documento"
        />
        <Text style={styles.title}>Chamadas individuais</Text>
        <Button
          onPress={() => {
            IdwallSdk.requestLiveness().then(setResult);
          }}
          title="Abrir câmera de liveness"
          color="#5500FF"
          accessibilityLabel="Abrir câmera de liveness"
        />
        <Button
          onPress={() => {
            IdwallSdk.requestDocument(
              IdwallDocumentType.CNH,
              IdwallDocumentSide.FRONT,
            ).then(setResult);
          }}
          title="Abrir câmera CNH"
          color="#5500FF"
          accessibilityLabel="Abrir câmera CNH"
        />
        <Text style={styles.title}>Chamadas de envio</Text>
        <Button
          onPress={() => {
            IdwallSdk.sendLivenessData().then(setResult);
          }}
          title="Enviar liveness"
          color="#5500FF"
          accessibilityLabel="Enviar liveness"
        />
        <Button
          onPress={() => {
            IdwallSdk.sendDocumentData(IdwallDocumentType.CNH).then(setResult);
          }}
          title="Enviar CNH"
          color="#5500FF"
          accessibilityLabel="Enviar CNH"
        />
        <Button
          onPress={() => {
            IdwallSdk.sendCnhWithLivenessData().then(setResult);
          }}
          title="Enviar CNH e liveness"
          color="#5500FF"
          accessibilityLabel="Enviar CNH e Foto"
        />
        <Text style={styles.result}>Resultado</Text>
        <Text>{!!result}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  containerOptions: {
    flex: 4,
    paddingLeft: 30,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 23,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 6,
  },
  headreTitle: {
    fontSize: 30,
  },
  headerText: {
    fontSize: 15,
    color: '#091919',
  },
  result: {
    marginTop: 50,
  },
});

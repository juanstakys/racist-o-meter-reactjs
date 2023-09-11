import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const RACIST_O_METER_URL = 'http://192.168.0.13:8080/detection'

const Dictaphone = () => {
  const {
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    if (finalTranscript !== '') {
      console.log('Final trasncript:', finalTranscript)
      fetch(RACIST_O_METER_URL, {
        method: "POST",
        body: JSON.stringify({
          statement: `${finalTranscript}`
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch(()=>{console.error("Error al consumir la API")});
    }
  }, [interimTranscript, finalTranscript])

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{finalTranscript}</p>
    </div>
  );
};
export default Dictaphone;

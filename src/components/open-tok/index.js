import React, { useState, useRef } from "react";

import { Card, Spin } from "antd";
import { OTSession, OTStreams, preloadScript } from "opentok-react";
import Subscriber from "./subscriber";
import Publisher from "./publisher";
import styles from "./call.less";

const cardBody = {
  height: "inherit",
  padding: "0",
};

const OpenTok = () => {
  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState(null);

  const otSessionRef = useRef();

  const sessionEvents = {
    streamCreated: (event) => {
      otSessionRef.current.sessionHelper.session.on("signal", () => {
        console.log("endCallByDoc", event);
        setLoading(true);
      });

      console.log("Stream created!", event);
      setLoading(false);
    },
    streamDestroyed: (event) => {
      console.log("Stream destroyed!", event);
      setLoading(true);
    },
    sessionConnected: () => {
      setConnected(true);
    },
    sessionDisconnected: () => {
      console.log("Session desconectada");
      setConnected(false);
    },
  };

  if (error) return <div>{error}</div>;
  return (
    <Card bodyStyle={cardBody} className={styles.card} id="screen">
      <OTSession
        apiKey=""
        sessionId=""
        token=""
        eventHandlers={sessionEvents}
        onError={(error) => setError(error)}
        ref={otSessionRef}
      >
        <Spin
          className={styles.spin}
          spinning={loading}
          size="large"
          tip="Conectando con tu especialista, espera un momento..."
        >
          <OTStreams>
            <Subscriber />
          </OTStreams>
        </Spin>
        <Publisher />
      </OTSession>
    </Card>
  );
};

export default preloadScript(OpenTok);

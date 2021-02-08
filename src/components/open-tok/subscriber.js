import React, { useState } from "react";
import { OTSubscriber } from "opentok-react";
import styles from "./styles.module.css";

const Subscriber = () => {
  const [audio, setAudio] = useState(true);
  const [video, setVideo] = useState(true);
  const [error, setError] = useState(null);

  const onError = (err) => {
    this.setState({ error: `Failed to subscribe: ${err.message}` });
  };

  if (error) return <div className={styles.error}>{error}</div>;
  return (
    <>
      <OTSubscriber
        properties={{
          showControls: false,
          insertMode: "append",
          width: "100%",
          height: "100%",
          subscribeToAudio: audio,
          subscribeToVideo: video,
        }}
        onError={onError}
      />
    </>
  );
};

export default Subscriber;

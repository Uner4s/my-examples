import React, { useState } from "react";
import { OTPublisher } from "opentok-react";
import styles from "./opentok.less";

const Publisher = () => {
  const [error, setError] = useState(null);

  const onError = (err) => {
    setError(`Error al conectar: ${err.message}`);
  };

  if (error) return <div>{error}</div>;
  return (
    <>
      <OTPublisher
        className={styles.publisher}
        style={{
          position: "absolute",
          right: "10px",
          top: "10px",
          zIndex: "100",
          border: " 5px solid #7c5299",
        }}
        properties={{
          showControls: false,
          publishAudio: true,
          publishVideo: true,
          videoSource: undefined,
        }}
        onError={onError}
      />
    </>
  );
};

export default Publisher;

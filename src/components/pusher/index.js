import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const { Pusher } = window;
const userId = window.localStorage?.getItem("userId") || "exampleId";
Pusher.logToConsole = true;

const pusher = new Pusher("", {
  cluster: "",
  authEndpoint: "",
  auth: {
    params: {
      patientId: userId,
    },
  },
});

const PusherTesting = ({ attentionType }) => {
  const [status, setStatus] = useState("waiting");
  const [position, setPosition] = useState();
  const [doctors, setDoctors] = useState(0);

  useEffect(() => {
    // if (attentionType !== "onDemand" && userId) return;
    const channel = pusher.subscribe("presence-my-channel");
    channel.bind("my-event", function (data) {
      if (data.message) {
        const queue = JSON.parse(data.message);
        const me = channel.members.me.id;

        const myData = queue.find((position) => position.patientId === me);
        if (!myData) return;

        if (myData.attentionAvailable) {
          // Ejecutar llamada para crear la atención
          // myData.doctorId
          // myData.patientId
          setStatus("preparing");
        } else {
          // Mostrar la información en un componente de react
          setPosition(myData.position.toString());
          setDoctors(myData.onlineDoctors.toString());
          setStatus("waiting");
        }
      }
      console.log(JSON.parse(data.message));
    });
  }, [attentionType]);

  return <div className={styles.container}>sadasd</div>;
};

export default PusherTesting;

// import React, { useState } from "react";
// import styles from "./styles.module.css";
// import { Button } from "antd";

// const Example = ({ patientPosition, onlineDoctors }) => {
//   const [checking, setChecking] = useState(true);

//   const checkThings = () => {
//     return (
//       <div className={styles.things}>
//         Camara Microfono etc
//         <Button onClick={() => setChecking(false)}>Click me</Button>
//       </div>
//     );
//   };

//   if (checking) return checkThings();
//   return (
//     <div className={styles.container}>
//       informaciond e la tarjeta asda asdaasd asd
//       {patientPosition}
//       {onlineDoctors}
//     </div>
//   );
// };

// export default Example;

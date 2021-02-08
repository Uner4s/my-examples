import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Table, Spin } from "antd";
import { header } from "./headers";
import data from "./data";

import "antd/dist/antd.css";

const Appointments = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAppointments = async () => {
      setLoading(true);
      try {
        const appointments = data; // ACA HACER EL LLAMADO PARA TRAER (id de la cita, doctor, especialidad, nombre paciente, estado, fecha)
        setDataSource(appointments);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getAppointments();
  }, []);

  const renderLoading = () => (
    <div className={styles.loading}>
      <Spin size="large" />
    </div>
  );

  if (loading) return renderLoading();
  return (
    <div className={styles.container}>
      <div className={styles.title}>Consultas agendadas</div>
      <Table columns={header} dataSource={dataSource} />
    </div>
  );
};

export default Appointments;

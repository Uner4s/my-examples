import React from "react";
import styles from "./styles.module.css";
import { Tag, Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import Cancel from "./cancel";

export const header = [
  {
    title: "Doctor",
    dataIndex: "doctor",
    key: "1",
    render: (text, record) => {
      const style =
        record.key % 2
          ? { background: "#f4e8ff", color: "#221F1F" }
          : { background: "#fff", color: "#221F1F" };
      return {
        props: {
          style,
        },
        children: (
          <div className={styles.headerName} style={{ fontSize: 15 }}>
            {text}
          </div>
        ),
      };
    },
  },
  {
    title: "Especialidad",
    dataIndex: "specialty",
    key: "2",
    render: (text, record) => {
      const style =
        record.key % 2
          ? { background: "#f4e8ff", color: "#221F1F" }
          : { background: "#fff", color: "#221F1F" };
      return {
        props: {
          style,
        },
        children: (
          <div className={styles.headerName} style={{ fontSize: 15 }}>
            <Tag color="purple" key={Math.random().toString()}>
              {text.toUpperCase()}
            </Tag>
          </div>
        ),
      };
    },
  },
  {
    title: "Nombre Paciente",
    dataIndex: "patient",
    key: "3",
    render: (text, record) => {
      const style =
        record.key % 2
          ? { background: "#f4e8ff", color: "#221F1F" }
          : { background: "#fff", color: "#221F1F" };
      return {
        props: {
          style,
        },
        children: (
          <div className={styles.headerName} style={{ fontSize: 15 }}>
            {text}
          </div>
        ),
      };
    },
  },
  {
    title: "Estado",
    dataIndex: "status",
    key: "4",
    render: (text, record) => {
      const style =
        record.key % 2
          ? { background: "#f4e8ff", color: "#221F1F" }
          : { background: "#fff", color: "#221F1F" };
      return {
        props: {
          style,
        },
        children: (
          <div className={styles.headerName} style={{ fontSize: 15 }}>
            <Tag color="blue" key={Math.random().toString()}>
              {text.toUpperCase()}
            </Tag>
          </div>
        ),
      };
    },
  },
  {
    title: "Fecha",
    dataIndex: "date",
    key: "5",
    render: (text, record) => {
      const style =
        record.key % 2
          ? { background: "#f4e8ff", color: "#221F1F" }
          : { background: "#fff", color: "#221F1F" };
      return {
        props: {
          style,
        },
        children: (
          <div className={styles.headerName} style={{ fontSize: 15 }}>
            {text}
          </div>
        ),
      };
    },
  },
  {
    title: "",
    dataIndex: "date",
    key: "6",
    render: (text, record) => {
      const style =
        record.key % 2
          ? { background: "#f4e8ff", color: "#221F1F" }
          : { background: "#fff", color: "#221F1F" };
      return {
        props: {
          style,
        },
        children: (
          <div className={styles.headerName} style={{ fontSize: 15 }}>
            {record.status === "SCHEDULED" ? (
              <Button
                type="primary"
                shape="round"
                block
                icon={<CheckOutlined />}
                onClick={() => console.log("ACA HACER EL INICIO DE LA CITA")}
              >
                Iniciar
              </Button>
            ) : (
              <div />
            )}
          </div>
        ),
      };
    },
  },
  {
    title: "",
    dataIndex: "date",
    key: "7",
    render: (text, record) => {
      const style =
        record.key % 2
          ? { background: "#f4e8ff", color: "#221F1F" }
          : { background: "#fff", color: "#221F1F" };
      return {
        props: {
          style,
        },
        children: (
          <div className={styles.headerName} style={{ fontSize: 15 }}>
            {record.status === "SCHEDULED" ? (
              <Cancel information={record} />
            ) : (
              <div />
            )}
          </div>
        ),
      };
    },
  },
];

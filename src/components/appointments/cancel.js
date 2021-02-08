import React, { useState } from "react";
import styles from "./styles.module.css";
import { Button, Modal, message } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const Cancel = ({ information }) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const onShow = () => setShow(true);

  const onCancel = () => setShow(false);

  const onConfirm = async () => {
    setLoading(true);
    try {
      const response = "ACA HACER EL REQUEST PARA CANCELAR";
    } catch (error) {
      console.log(error);
      message.error("Ocurrió un error al cancelar la cita");
    }
    setLoading(false);
  };

  const renderButtons = () => (
    <div className={styles.cancelButton}>
      <Button key="back" onClick={onCancel}>
        Salir
      </Button>
      <Button
        key="submit"
        type="primary"
        danger
        loading={loading}
        onClick={onConfirm}
      >
        Confirmar
      </Button>
    </div>
  );

  return (
    <>
      <Button
        type="primary"
        shape="round"
        danger
        block
        icon={<CloseOutlined />}
        onClick={onShow}
      >
        Cancelar
      </Button>
      <Modal
        visible={show}
        title="¿Deseas cancelar esta cita?"
        onOk={onConfirm}
        onCancel={onCancel}
        footer={renderButtons()}
      >
        <div>
          Si cancelas esta cíta, no podrás deshacer los cambios. Tendrás que
          agendar nuevamente
        </div>
      </Modal>
    </>
  );
};

export default Cancel;

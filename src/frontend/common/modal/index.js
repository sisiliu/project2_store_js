import React from "react";
import "antd/dist/antd.css";
import { Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import "./index.css";

const MyModal = (props) => {
  const { children, width, titleText, visible, cancel } = props;
  return (
    <>
      <Modal
        // width={393}
        closeIcon={<CloseOutlined />}
        width={width}
        title={<div className="modal-title">{titleText}</div>}
        visible={visible}
        footer={null}
        onCancel={() => {
          // setVisible(false);
          cancel();
        }}
      >
        {children}
      </Modal>
    </>
  );
};
export default MyModal;

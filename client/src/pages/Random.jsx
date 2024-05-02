import React, { useState } from "react";
import { Typography, Input, Space, Button, Alert } from "antd";
import {
  DeleteOutlined,
  ReloadOutlined,
  PlusOutlined,
  StopOutlined,
} from "@ant-design/icons";


const Random = () => {
  const [result, setResult] = useState("Result");
  const [arr, setArr] = useState([""]);
  const [waiting, setWaiting] = useState(true);
  const [timer, setTimer] = useState(null);
  const [ending, setEnding] = useState(false);

  // random

  const handleKeyUp = (value, index) => {
    let temp = [...arr];
    temp[index] = value;
    setArr(temp);
  };

  const handleDelete = (index) => {
    let temp = [...arr];
    temp.splice(index, 1);
    setArr(temp);
  };

  const handleRandom = () => {
    if (waiting === true) {
      // random
      setEnding(false);
      setWaiting(false);
      let index = 0;
      const interval = setInterval(() => {
        setResult(arr[index % arr.length]);
        index++;
      }, 30);
      setTimer(interval);
    } else {
      // stop
      clearInterval(timer);
      setWaiting(true);
      const rand = (Math.floor(Math.random() * 5) + 5) * 10;
      stoping(rand,0);
    }
  };


  const stoping = (delay, index) => {
    if(delay<1000){
      index++;
      setResult(arr[index % arr.length]);
      setTimeout(() => {
        stoping(delay+(delay/index), index);
      }, 30+delay);
    }else{
      setEnding(true);
    }
  }


  return (
    <div style={{ textAlign: "center" }}>
      <Typography.Title type="success" className={ending ? "blinking " : ""}>
        {result}
      </Typography.Title>
      <Button size="large" onClick={() => handleRandom()}>
        {waiting === true ? (
          <>
            <ReloadOutlined /> Random
          </>
        ) : (
          <>
            <StopOutlined /> Stop
          </>
        )}
      </Button>
      <br />
      <br />
      <Space direction="vertical">
        {arr.map((item, index) => (
          <div key={index}>
            <Space>
              <Input
                placeholder="Type something..."
                value={item}
                onChange={(e) => handleKeyUp(e.target.value, index)}
              />
              <Button type="text" danger onClick={() => handleDelete(index)}>
                <DeleteOutlined />
              </Button>
            </Space>
          </div>
        ))}
        <Button onClick={() => setArr([...arr, ""])} type="text">
          <PlusOutlined /> Add new line
        </Button>
      </Space>
    </div>
  );
};

export default Random;

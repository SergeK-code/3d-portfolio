import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: 14,
            color: "#f1f1f1",
            fontWeight: 800,
          }}
        >
          {progress.toFixed(0)}%
        </p>
      </span>
    </Html>
  );
};

export default Loader;

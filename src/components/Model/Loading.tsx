import { Html } from "@react-three/drei";
import React from "react";

export const Loading: React.FC = () => {
  return (
    <Html>
      <div className="absolute top-0 bottom-0 w-full h-full flex justify-center items-center">
        <div className="w-[10vw] h-[10vw] rounded-full">Loading...</div>
      </div>
    </Html>
  );
};

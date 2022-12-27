import { ChildAsFC } from "./child";
import React from "react";

const Parent = () => {
  return <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
    asdf
    </ChildAsFC>;
}; 

export default Parent;

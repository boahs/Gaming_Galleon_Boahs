import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

const ButtonMain = () => {
  function activateLasers(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => setCount(count + 420)} colorScheme="blue">
      Activate Lasers : {count}
    </Button>
  );
};

export default ButtonMain;

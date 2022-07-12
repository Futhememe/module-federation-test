import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Counter {
  onClick?: () => void;
}

const Counter = ({ onClick = () => {} }: Counter) => {
  return (
    <Flex color="#000" gap="1rem" direction="column">
      <Button onClick={onClick}>Eu adiciono + 2</Button>
    </Flex>
  );
};

export default Counter;

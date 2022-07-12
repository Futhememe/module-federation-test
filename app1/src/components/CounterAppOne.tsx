import { Text, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Flex color="#000" gap="1rem" direction="column">
      <Text>
        Adiciona 1 ao clicar <strong>APP-1</strong>
      </Text>
      <Text>Sua conta de clicks : {count} </Text>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
      <Flex direction="column"></Flex>
    </Flex>
  );
};

export default Counter;

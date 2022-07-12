import { Button, Flex, Spinner, Text } from "@chakra-ui/react";
import React, { useState } from "react";
const CounterAppThree = React.lazy(() => import("app3/CounterAppThree"));

const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <Flex color="#000" gap="1rem" direction="column">
      <Text>
        Clique nos botões para adicionar <strong>APP-2 E APP-3</strong>
      </Text>
      <Text>Conta : {count} </Text>
      <Button onClick={() => setCount((prevState) => prevState * 2)}>
        Eu multiplico por 2
      </Button>
      <React.Suspense fallback={<Spinner size="xl" />}>
        <CounterAppThree
          onClick={() => setCount((prevState) => prevState + 2)}
        />
      </React.Suspense>
    </Flex>
  );
};

export default Counter;

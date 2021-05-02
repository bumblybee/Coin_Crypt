import React, { useState } from "react";
import { Message, Box, Heading } from "react-bulma-components";

export default function PriceMessage({ price, coin, notifyVal }) {
  return (
    <Message style={{ border: "1px solid #eee", textAlign: "center" }}>
      <Box
        shadowless
        radiusless
        backgroundColor="primary"
        textWeight="semibold"
        style={{ color: "#fff" }}
      >
        Current Price in USD
      </Box>
      {price && (
        <Message.Body
          style={{ border: "none", margin: "0 auto", width: "90%" }}
        >
          <Heading size="4">{coin}</Heading>
          <Box textWeight="semibold">${price}</Box>
        </Message.Body>
      )}
      {price < notifyVal && (
        <Message.Body
          style={{ border: "none", width: "90%", margin: "0 auto" }}
        >
          <Box
            shadowless
            backgroundColor="primary-light"
            textColor="danger"
            textWeight="bold"
            style={{ border: "2px dashed red" }}
          >
            Price less than ${notifyVal}
          </Box>
        </Message.Body>
      )}
    </Message>
  );
}

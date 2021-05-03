import React, { useState, useEffect } from "react";
import { getPrice, setNotification } from "../../api/baseApi";
import PriceMessage from "../message/PriceMessage";

import {
  Box,
  Card,
  Form,
  Container,
  Heading,
  Button,
} from "react-bulma-components";

export default function Dashboard() {
  const [price, setPrice] = useState(null);
  const [coin, setCoin] = useState("");
  const [notifyVal, setNotifyVal] = useState(null);

  const fetchPrice = async () => {
    const firstParen = coin.indexOf("(");
    const secondParen = coin.indexOf(")");
    const sym = coin.slice(firstParen + 1, secondParen);
    const val = await getPrice(sym);
    setPrice(val.USD);
  };

  const handleChange = async (e) => {
    setCoin(e.target.value);
    fetchPrice();
  };

  const handleNotifyAt = async (e) => {
    e.preventDefault();

    const firstParen = coin.indexOf("(");
    const secondParen = coin.indexOf(")");
    const sym = coin.slice(firstParen + 1, secondParen);

    const res = await setNotification({ coin: sym, notifyVal });
    console.log(res);

    // console.log(notifyVal);
  };

  return (
    <Box style={{ height: "100%", background: "#eeeeeedd" }}>
      <Container>
        <Card
          shadowless
          style={{
            padding: "2rem 4rem",
            width: "70%",
            height: "35rem",
            margin: "12% auto",
            display: "grid",
          }}
        >
          <Heading
            textAlign="center"
            size="4"
            style={{ color: "teal", letterSpacing: "0.125rem" }}
          >
            Current Cryptocurrency Prices
          </Heading>

          <Box
            style={{
              display: "grid",
              gridGap: "4rem",
              gridTemplateColumns: "0.25fr 1fr 4fr",
              height: "25rem",
            }}
            shadowless
          >
            <div></div>
            <form>
              <Form.Field>
                <Form.Label>Crypto</Form.Label>
                <Form.Field kind="group">
                  <Form.Control>
                    <Form.Select color="primary" onChange={handleChange}>
                      <option>{coin || "Choose Your Coin"}</option>
                      <option value="Bitcoin (BTC)">Bitcoin</option>
                      <option value="Ethereum (ETH)">Ethereum</option>
                      <option value="Dogecoin (DOGE)">Dogecoin</option>
                      <option value="Litecoin (LTC)">Litecoin</option>
                      <option value="Stellar (XLM)">Stellar</option>
                      <option value="Cardano (ADA)">Cardano</option>
                    </Form.Select>
                  </Form.Control>
                </Form.Field>
                <Box shadowless p="0" pt="4">
                  <Form.Field>
                    <Form.Label>Notify at</Form.Label>
                    <Form.Control>
                      <Form.Input
                        style={{ position: "relative", paddingLeft: "1rem" }}
                        color="primary"
                        value={notifyVal || ""}
                        type="number"
                        step=".01"
                        onChange={(e) => setNotifyVal(e.target.value)}
                      />
                      <i
                        style={{
                          position: "absolute",
                          top: "19.5%",
                          left: "4.25%",
                        }}
                      >
                        $
                      </i>
                    </Form.Control>
                  </Form.Field>
                  <Button
                    backgroundColor="primary"
                    textColor="white"
                    fullwidth
                    onClick={handleNotifyAt}
                  >
                    Notify me
                  </Button>
                </Box>
              </Form.Field>
            </form>
            <PriceMessage price={price} coin={coin} notifyVal={notifyVal} />
          </Box>
        </Card>
      </Container>
    </Box>
  );
}

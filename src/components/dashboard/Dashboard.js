import React, { useState, useEffect } from "react";
import PriceMessage from "../message/PriceMessage";
import {
  Box,
  Card,
  Form,
  Container,
  Heading,
  Button,
} from "react-bulma-components";
import { getPrice } from "../../api/baseApi";

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

  const handleNotifyAt = (e) => {
    e.preventDefault();

    // notify();

    console.log(notifyVal);
  };

  // const notify = () => {
  //   const title = "New CryptoTrack Alert";
  //   const options = {
  //     body: `${coin} price lower than ${notifyVal}`,
  //   };
  //   setTimeout(() => {
  //     fetchPrice();
  //     if (price < notifyVal) {
  //       new Notification(title, options);
  //       console.log("hit");
  //     }
  //   }, 15000);
  // };

  clearTimeout(() => {}, 60000);

  return (
    <Box style={{ height: "100vh" }} backgroundColor="primary">
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
                          color="primary"
                          value={notifyVal || ""}
                          type="number"
                          step=".01"
                          onChange={(e) => setNotifyVal(e.target.value)}
                        />
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
    </Box>
  );
}

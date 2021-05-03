import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/user/UserContext";
import {
  Box,
  Container,
  Card,
  Heading,
  Form,
  Icon,
  Button,
} from "react-bulma-components";

const Login = () => {
  const { logIn } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState({ username: "" });
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await logIn(userDetails);
    console.log(res);
    history.push("/");
  };

  return (
    <Box style={{ height: "100vh", background: "#eeeeeedd" }}>
      <Container>
        <Card
          shadowless
          style={{
            padding: "2rem 4rem",
            width: "40%",

            margin: "12% auto",
            display: "grid",
          }}
        >
          <Heading
            textAlign="center"
            size="4"
            style={{ color: "teal", letterSpacing: "0.125rem" }}
          >
            Log in
          </Heading>

          <Box shadowless>
            <form onSubmit={handleSubmit}>
              <Form.Field>
                <Form.Label>Username</Form.Label>
                <Form.Control>
                  <Form.Input
                    color="primary"
                    value={userDetails.username}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        username: e.target.value,
                      })
                    }
                  />
                  <Icon align="left" size="small">
                    <i className="fas fa-user" />
                  </Icon>
                </Form.Control>
              </Form.Field>
              <Form.Field>
                <Button color="primary" type="submit" fullwidth>
                  Submit
                </Button>
              </Form.Field>
            </form>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default Login;

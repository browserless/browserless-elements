import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AiOutlineHome, AiOutlineGateway } from "react-icons/ai";
import { BsMoonStars } from "react-icons/bs";

import {
  Aside,
  AsideSection,
  AsideItem,
  Page,
  ThemeProvider,
  Modal,
  Heading,
  Button,
  Alert,
  Loader,
  Select,
} from "../.";

import "../dist/elements.css";

type Theme = "light" | "dark";

const App = () => {
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "dark");
  }

  const toggleTheme = () => {
    const theme = localStorage.getItem("theme") as Theme;
    if (theme === "light") localStorage.setItem("theme", "dark");
    else localStorage.setItem("theme", "light");
    location.reload();
  };

  const [theme] = React.useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "light",
  );

  const [modal, setModal] = React.useState(false);
  const closeModal = () => setModal(false);

  return (
    <ThemeProvider theme={theme}>
      <Modal onClose={closeModal} show={modal}>
        <>
          <Heading size="md">Modal</Heading>
          <br />
          <Alert type="info">This is an alert. They can have many types</Alert>
          <Select
            options={[
              { value: 1, text: "Hmmm" },
              { value: 2, text: "Hmmm" },
            ]}
          ></Select>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo non
            veritatis soluta odio, facilis suscipit? Cum architecto blanditiis nam
            laboriosam? Numquam a laudantium dolores voluptates suscipit nulla autem
            ab minus.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              gap: "0.5em",
              marginTop: "0.5em",
            }}
          >
            <Button onClick={closeModal}>Cancel</Button>
            <Button actionType="danger">Delete</Button>
          </div>
        </>
      </Modal>
      <Aside>
        <AsideSection title="Home">
          <AsideItem prefix={<AiOutlineHome />} selected>
            Home
          </AsideItem>
          <AsideItem prefix={<AiOutlineGateway />} onClick={() => setModal(true)}>
            Modal
          </AsideItem>
        </AsideSection>

        <AsideSection title="Configuration">
          <AsideItem
            prefix={<BsMoonStars />}
            onClick={() => {
              toggleTheme();
            }}
          >
            Toggle theme
          </AsideItem>
        </AsideSection>
      </Aside>

      <Page
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Loader />
        <p style={{ marginTop: "5em" }}>
          (Just in case, this <i>won't</i> finish loading...)
        </p>
      </Page>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

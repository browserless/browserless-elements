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
  Input,
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
            values={[
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

      <Page>
        <Heading size="xl">@browserless/elements</Heading>
        <br />
        <br />
        <br />
        <br />

        <Heading size="lg">Buttons</Heading>
        <>
          <br />
          <br />
          <div
            style={{
              display: "flex",
              gap: "0.5em",
            }}
          >
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
            <Button busy>Busy</Button>
          </div>

          <div
            style={{
              display: "flex",
              gap: "0.5em",
              marginTop: "1em",
            }}
          >
            <Button actionType="danger">Danger</Button>
            <Button actionType="danger" disabled>
              Danger Disabled
            </Button>
            <Button actionType="danger" busy>
              Danger Busy
            </Button>
          </div>

          <div
            style={{
              display: "flex",
              gap: "0.5em",
              marginTop: "1em",
            }}
          >
            <Button actionType="warning">Warning</Button>
            <Button actionType="warning" disabled>
              Warning Disabled
            </Button>
            <Button actionType="warning" busy>
              Warning Busy
            </Button>
          </div>
        </>
        <br />
        <br />

        <Heading size="lg">Inputs</Heading>
        <>
          <br />
          <br />

          <div
            style={{
              width: "40%",
              display: "flex",
              flexDirection: "column",
              gap: "0.5em",
            }}
          >
            <Input label="Default" />
            <Input label="Placeholder" placeholder="Placeholder" />
            <Input label="Required" required />
            <Input label="Input Type" type="date" />
            <Input label="Disabled" disabled />
          </div>
        </>
        <br />
        <br />

        <Heading size="lg">Select</Heading>
        <>
          <br />
          <br />

          <div
            style={{
              width: "40%",
              display: "flex",
              flexDirection: "column",
              gap: "0.5em",
            }}
          >
            <Select
              label="Default"
              values={[
                { value: 1, text: "Red" },
                { value: 2, text: "Blue" },
                { value: 3, text: "Green" },
              ]}
            />
            <Select
              label="Required"
              values={[
                { value: 1, text: "Red" },
                { value: 2, text: "Blue" },
                { value: 3, text: "Green" },
              ]}
              required
            />
            <Select
              label="Disabled"
              values={[
                { value: 1, text: "Red" },
                { value: 2, text: "Blue" },
                { value: 3, text: "Green" },
              ]}
              disabled
            />
          </div>
        </>
        <br />
        <br />

        <Heading size="lg">Alerts</Heading>
        <>
          <br />
          <br />

          <div
            style={{
              width: "40%",
              display: "flex",
              flexDirection: "column",
              gap: "0.5em",
            }}
          >
            <Alert type="info">This is an info alert</Alert>
            <Alert type="error">This is an error alert</Alert>
            <Alert type="success">This is a success alert</Alert>
            <Alert type="warning">This is a warning alert</Alert>

            <Alert type="info">
              You may cancel at any time by clicking the "Cancel Account" button
              below. This will prevent any further charges and your browserless
              instances will shut down at the end of the billing period.
            </Alert>
          </div>
        </>

        {/* <Loader />
        <p style={{ marginTop: "5em" }}>
          (Just in case, this <i>won&apos;t</i> finish loading...)
        </p> */}
      </Page>
    </ThemeProvider>
  );
};

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(<App />, document.getElementById("root"));

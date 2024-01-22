import "react-app-polyfill/ie11";
import {
  Aside,
  AsideItem,
  Page,
  ThemeProvider,
  Modal,
  Heading,
  Button,
  Alert,
  Select,
  Input,
} from "@browserless.io/elements";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsMoonStars } from "react-icons/bs";

import "../dist/elements.css";
import { Toggle } from "../dist";

type Theme = "light" | "dark";

const ReactIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="11.245" r="1.785"></circle>
    <path d="m7.002 14.794-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 0 0 1.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 0 1-.985-2.542zm10.572 6.095-.11-.392a19.628 19.628 0 0 0-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 0 1-.987 2.542z"></path>
    <path d="m6.419 8.695-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 0 0-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 0 0-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 0 1 1.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 0 0 2.021-2.477l.112-.16.194-.019a19.473 19.473 0 0 0 3.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 0 1-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 0 1-1.71 2.124z"></path>
    <path d="m17.58 8.695-.395-.099a19.477 19.477 0 0 0-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0 0 11.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 0 1-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 0 1-1.713-2.123 20.692 20.692 0 0 1-2.696-.419z"></path>
    <path d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 0 1-1.126-1.769 26.028 26.028 0 0 1-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 0 1 4.198 0l.194.019.113.16a25.136 25.136 0 0 1 2.1 3.628l.083.179-.083.177a24.742 24.742 0 0 1-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 0 0 1.832-3.168 23.916 23.916 0 0 0-1.832-3.168 23.877 23.877 0 0 0-3.667 0 23.743 23.743 0 0 0-1.832 3.168 24.82 24.82 0 0 0 1.832 3.168z"></path>
  </svg>
);

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
          <p style={{ marginBottom: "1em", marginTop: "1em" }}>
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
        <AsideItem prefix={<AiOutlineHome />} selected>
          Home
        </AsideItem>

        <AsideItem
          prefix={<BsMoonStars />}
          onClick={() => {
            toggleTheme();
          }}
        >
          Toggle theme
        </AsideItem>
      </Aside>

      <Page>
        <Heading size="xl">@browserless/elements</Heading>
        <div style={{ marginTop: "4em" }}>
          <Heading size="lg">Buttons</Heading>
          <>
            <div style={{ display: "flex", gap: "0.5em", marginTop: "2em" }}>
              <Button>Default</Button>
              <Button disabled>Disabled</Button>
              <Button busy>Busy</Button>
              <Button prefix={<ReactIcon />}>Prefixed</Button>
            </div>

            <div style={{ display: "flex", gap: "0.5em", marginTop: "1em" }}>
              <Button actionType="danger">Danger</Button>
              <Button actionType="danger" disabled>
                Danger Disabled
              </Button>
              <Button actionType="danger" busy>
                Danger Busy
              </Button>
              <Button actionType="danger" prefix={<ReactIcon />}>
                Prefixed
              </Button>
            </div>

            <div style={{ display: "flex", gap: "0.5em", marginTop: "1em" }}>
              <Button actionType="warning">Warning</Button>
              <Button actionType="warning" disabled>
                Warning Disabled
              </Button>
              <Button actionType="warning" busy>
                Warning Busy
              </Button>
              <Button actionType="warning" prefix={<ReactIcon />}>
                Prefixed
              </Button>
            </div>
          </>
          <pre style={{ marginTop: "2em" }}>
            <code className="language-jsx">
              {`import { Button } from "@browserless.io/elements";

<Button>Default</Button>
<Button disabled>Disabled</Button>
<Button busy>Busy</Button>
<Button prefix={<ReactIcon />}>Prefixed</Button>

<Button actionType="danger">Danger</Button>
<Button actionType="danger" disabled>Danger Disabled</Button>
<Button actionType="danger" busy>Danger Busy</Button>
<Button actionType="danger" prefix={<ReactIcon />}>Prefixed</Button>

<Button actionType="warning">Warning</Button>
<Button actionType="warning" disabled>Warning Disabled</Button>
<Button actionType="warning" busy>Warning Busy</Button>
<Button actionType="warning" prefix={<ReactIcon />}>Prefixed</Button>
`}
            </code>
          </pre>
        </div>
        <div style={{ marginTop: "4em" }}>
          <Heading size="lg">Inputs</Heading>
          <>
            <div
              style={{
                width: "40%",
                display: "flex",
                flexDirection: "column",
                gap: "1em",
                marginTop: "2em",
              }}
            >
              <Input label="Default" />
              <Input label="Placeholder" placeholder="Placeholder" />
              <Input label="Required" required />
              <Input label="Input Type" type="date" />
              <Input
                label="With Description"
                description="This input field has a description. That can be useful."
              />
              <Input label="Disabled" disabled />
            </div>
          </>
          <pre style={{ marginTop: "2em" }}>
            <code className="language-jsx">
              {`import { Input } from "@browserless.io/elements";

<Input label="Default" />
<Input label="Placeholder" placeholder="Placeholder" />
<Input label="Required" required />
<Input label="Input Type" type="date" />
<Input
  label="With Description"
  description="This input field has a description. That can be useful."
/>
<Input label="Disabled" disabled />
`}
            </code>
          </pre>
        </div>
        <div style={{ marginTop: "4em" }}>
          <Heading size="lg">Select</Heading>
          <>
            <div
              style={{
                width: "40%",
                display: "flex",
                flexDirection: "column",
                gap: "0.5em",
                marginTop: "2em",
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
                label="Lots of elements"
                values={Array.from({ length: 25 }).map((_, i) => ({
                  value: i,
                  text: `Option ${i + 1}`,
                }))}
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
          <pre style={{ marginTop: "2em" }}>
            <code className="language-jsx">
              {`import { Select } from "@browserless.io/elements";

const values = [
  { value: 1, text: "Red" },
  { value: 2, text: "Blue" },
  { value: 3, text: "Green" },
];

<Select label="Default" values={values} />
<Select label="Required" values={values} required />
<Select label="Disabled" values={values} disabled />
<Select
  label="Lots of elements"
  values={Array.from({ length: 25 }).map((_, i) => ({
    value: i,
    text: \`Option \${i + 1}\`,
  }))}
  required
/>
`}
            </code>
          </pre>
        </div>
        <div style={{ marginTop: "4em" }}>
          <Heading size="lg">Alerts</Heading>
          <>
            <div
              style={{
                width: "40%",
                display: "flex",
                flexDirection: "column",
                gap: "0.5em",
                marginTop: "2em",
              }}
            >
              <Alert type="info">This is an info alert</Alert>
              <Alert type="error">This is an error alert</Alert>
              <Alert type="success">This is a success alert</Alert>
              <Alert type="warning">This is a warning alert</Alert>

              <Alert type="info">
                <Heading size="sm">
                  Multiple lines of text can be used in an alert.
                </Heading>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vero
                alias necessitatibus numquam doloremque sit, tempora aperiam dolores
                animi nostrum officiis neque, dolorum saepe ad possimus. Laudantium
                corrupti magni accusantium.
              </Alert>
            </div>
            <pre style={{ marginTop: "2em" }}>
              <code className="language-jsx">
                {`import { Alert } from "@browserless.io/elements";

<Alert type="info">This is an info alert</Alert>
<Alert type="error">This is an error alert</Alert>
<Alert type="success">This is a success alert</Alert>
<Alert type="warning">This is a warning alert</Alert>

<Alert type="info">
  Multiple lines of text can be used in an alert. <br/> Lorem ipsum dolor sit
  amet consectetur adipisicing elit. Harum vero alias necessitatibus
  numquam doloremque sit, tempora aperiam dolores animi nostrum officiis
  neque, dolorum saepe ad possimus. Laudantium corrupti magni
  accusantium.
</Alert>
`}
              </code>
            </pre>
          </>
        </div>

        <div style={{ marginTop: "4em" }}>
          <Heading size="lg">Toggles</Heading>
          <>
            <div
              style={{
                width: "40%",
                display: "flex",
                flexDirection: "column",
                gap: "0.5em",
                marginTop: "2em",
              }}
            >
              <Toggle label="Default" />
              <Toggle label="Disabled" disabled />
            </div>
            <pre style={{ marginTop: "2em" }}>
              <code className="language-jsx">
                {`import { Toggle } from "@browserless.io/elements";

<Toggle label="Default" />
<Toggle label="Disabled" disabled />
`}
              </code>
            </pre>
          </>
        </div>

        <div style={{ marginTop: "4em" }}>
          <Heading size="lg">Headings</Heading>
          <br />
          <Heading size="2xl">2XL Heading</Heading>
          <Heading size="xl">XL Heading</Heading>
          <Heading size="lg">Large Heading</Heading>
          <Heading size="md">Medium Heading</Heading>
          <Heading size="sm">Small Heading</Heading>
          <pre style={{ marginTop: "2em" }}>
            <code className="language-jsx">
              {`import { Heading } from "@browserless.io/elements";

<Heading size="2xl">2XL Heading</Heading>
<Heading size="xl">XL Heading</Heading>
<Heading size="lg">Large Heading</Heading>
<Heading size="md">Medium Heading</Heading>
<Heading size="sm">Small Heading</Heading>
`}
            </code>
          </pre>
        </div>
        <div style={{ marginTop: "4em" }}>
          <Heading size="lg">Modals</Heading>
          <Button style={{ marginTop: "2em" }} onClick={() => setModal(true)}>
            Open Modal
          </Button>
          <pre style={{ marginTop: "2em" }}>
            <code className="language-jsx">
              {`import { Button, Modal } from "@browserless.io/elements";
import React from "react";

const [modal, setModal] = React.useState(false);
const closeModal = () => setModal(false);

<Modal onClose={closeModal} show={modal}>
  <>
    <Heading size="md">Modal</Heading>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo non
      veritatis soluta odio, facilis suscipit? Cum architecto blanditiis nam
      laboriosam? Numquam a laudantium dolores voluptates suscipit nulla autem
      ab minus.
    </p>
      <Button onClick={closeModal}>Cancel</Button>
      <Button actionType="danger">Delete</Button>
    </div>
  </>
</Modal>

<Button onClick={() => setModal(true)}>Open Modal</Button>
`}
            </code>
          </pre>
        </div>
        <div style={{ marginTop: "4em" }}>
          <Heading size="lg">Themes</Heading>
          <div
            style={{
              width: "40%",
              marginTop: "2em",
            }}
          >
            <ThemeProvider theme="light">
              <Input label="Light Theme forced" />
              <Button>Light Theme</Button>
            </ThemeProvider>

            <ThemeProvider theme="dark">
              <Input label="Dark Theme forced" />
              <Button>Dark Theme</Button>
            </ThemeProvider>
          </div>
          <pre>
            <code className="language-jsx">
              {`import { Button, Input, ThemeProvider } from "@browserless.io/elements";

<div>
  <ThemeProvider theme="light">
    <Input label="Light Theme forced" />
    <Button>Light Theme</Button>
  </ThemeProvider>

  <ThemeProvider theme="dark">
    <Input label="Dark Theme forced" />
    <Button>Dark Theme</Button>
  </ThemeProvider>
</div>
`}
            </code>
          </pre>
        </div>
      </Page>
    </ThemeProvider>
  );
};

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(<App />, document.getElementById("root"));

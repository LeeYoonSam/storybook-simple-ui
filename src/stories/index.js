import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";
import Welcome from "./Welcome";
import Header from "../component/Header";

// storiesOf("Welcome", module).add("to Storybook", () => (
//   <Welcome showApp={linkTo("Button")} />
// ));

storiesOf("Button", module)
  .add("with text", () => (
    <div style={{ backgroundColor: "gray", padding: "10" }}>
      <div>
        <Button fixColor="#000" hoverColor="#fff" onClick={action("clicked")}>
          Hello Button
        </Button>
      </div>
      <div>
        <Button fixColor="#fff" hoverColor="#000" onClick={action("clicked")}>
          Hello Button
        </Button>
      </div>
      <div>
        <Button
          fixColor="#fff"
          hoverColor="#000"
          fontSize="30"
          padding="50"
          onClick={action("clicked")}
        >
          Hello Button
        </Button>
      </div>
    </div>
  ))
  .add("with some emoji", () => (
    <Button fixColor="#000" hoverColor="#fff" onClick={action("clicked")}>
      😀 😎 👍 💯
    </Button>
  ));

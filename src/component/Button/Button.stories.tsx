import React from "react";
import Button from "./Button";
import { Meta, Story } from "@storybook/react";
import "./style.css";

export default {
  title: "Button",
  component: Button,
} as Meta;
const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind({});

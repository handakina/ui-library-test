import React from "react";
import IconButton from "./IconButton";
import { Meta, Story } from "@storybook/react";
import "./style.css";

export default {
  title: "IconButton",
  component: IconButton,
} as Meta;
const Template: Story = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});

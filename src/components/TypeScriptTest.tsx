/** @jsxImportSource @emotion/react */
import React, { FC } from "react";
import { test } from "./css/TypeScriptTest.styles";

type Props = {
  text: string;
};

const Button = ({ text }: Props) => <button css={test}>{text}</button>;

export default Button;

import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2023 oyter Inc.</SFooter>;
};

const SFooter = styled.header`
  background-color: lightcoral;
  color: white;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

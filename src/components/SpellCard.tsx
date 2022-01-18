import styled from "styled-components";
import { Card } from "antd";

export const SpellCard = styled(Card)`
  padding: 10px 20px;
  transition: all 0.2s ease;
  background: transparent;
  border: none;

  &:hover {
    transform: scale(1.02);
    background-color: rgba(31, 31, 31, 0.3);
  }
`;

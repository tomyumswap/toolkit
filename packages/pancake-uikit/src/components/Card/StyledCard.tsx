import styled, { DefaultTheme, keyframes, css } from "styled-components";
import { space } from "styled-system";
import { Box } from "../Box";
import { CardProps } from "./types";

const PromotedGradient = keyframes`
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
`;

interface StyledCardProps extends CardProps {
  theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success --> Active
 */
const getBorderColor = ({ isActive, isSuccess, isWarning, borderBackground, theme }: StyledCardProps) => {
  if (borderBackground) {
    return borderBackground;
  }
  if (isWarning) {
    return theme.colors.warning;
  }

  if (isSuccess) {
    return theme.colors.success;
  }

  if (isActive) {
    return `linear-gradient(180deg, ${theme.colors.primaryBright}, ${theme.colors.secondary})`;
  }

  return theme.colors.cardBorder;
};
// background: linear-gradient(111.98deg, rgba(255, 255, 255, 0.05) 5%, rgba(0, 0, 0, 0.03) 100%);
export const StyledCard = styled.div<StyledCardProps>`
  background: #72727233 0% 0% no-repeat padding-box;
  color: ${({ theme, isDisabled }) => theme.colors[isDisabled ? "textDisabled" : "text"]};
  position: relative;
  border: 1px solid #484747;
  border-radius: 30px;
  opacity: 1;
  backdrop-filter: blur(12px);
`;

export const StyledCardInner = styled(Box)<{ background?: string; hasCustomBorder: boolean }>``;

StyledCard.defaultProps = {
  isActive: false,
  isSuccess: false,
  isWarning: false,
  isDisabled: false,
};

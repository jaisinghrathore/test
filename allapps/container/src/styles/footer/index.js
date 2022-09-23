import styled from "@emotion/styled";
import {
  TextField,
  Typography,
} from "@mui/material";
import { Colors } from "../theme";

export const FooterTitle = styled(Typography)(() => ({
  textTransform: "uppercase",
  marginBottom: "1em",
}));

export const SubscribeTf = styled(TextField)(() => ({
  ".MuiInputLabel-root": {
    color: Colors.primary,
    opacity:"0.2",
  },

  ".MuiInput-root::before": {
    borderBottom: `1px solid ${Colors.secondary}`,
  },
}));

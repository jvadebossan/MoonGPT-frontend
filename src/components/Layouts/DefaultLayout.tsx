import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import PublicRoutes from "../../routes/public";

const StyledBox = styled(Box)(() => ({
  height: "100vh",
  transform: "translateZ(0)",
  overflow: "hidden",
  backgroundColor: "background.default !important",
}));

export default function PublicLayout() {
  return (
    <>
      <StyledBox>
        <PublicRoutes />
      </StyledBox>
    </>
  );
}

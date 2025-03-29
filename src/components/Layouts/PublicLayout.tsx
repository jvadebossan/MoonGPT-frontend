import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import PublicRoutes from "../../routes/public";
import Header from "../Header/Header";

const StyledBox = styled(Box)(() => ({
  height: "100vh",
  padding: "0px 50px",
  transform: "translateZ(0)",
  overflow: "hidden",
  backgroundColor: "background.default !important",
}));

export default function PublicLayout() {
  return (
    <>
      <StyledBox>
        <Header />
        <PublicRoutes />
      </StyledBox>
    </>
  );
}

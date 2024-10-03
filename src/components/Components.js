import {
  AppBar,
  Toolbar,
  Button,
  Divider,
  styled,
  Typography,
  Slide,
  Container,
} from "@mui/material";
import color from "../constants/pallate";
import React from "react";

const StyledDivider = styled(Divider)({
  marginTop: "0.5rem",
  marginBottom: "1.0rem",
  backgroundColor: color.secondary,
  borderBottomWidth: "2px",
});

const Paragraph = styled(Typography)({
  fontFamily: "Rubik",
  fontSize: "1.2rem",
  marginTop: "0.5rem",
  marginBottom: "0.8rem",
});

const Highlight = styled(Typography)({
  color: color.secondary,
  fontWeight: "bold",
  display: "inline",
  fontStyle: "italic",
  fontSize: "1.2rem",
});

const Title = styled(Typography)({
  fontFamily: "Rubik",
  fontWeight: "bold",
  fontStyle: "italic",
  borderBottom: `1px solid ${color.secondary}`,
  display: "inline-block",
  borderWidth: "2px",
  bottomPadding: "0.5rem",
});

const SubTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Rubik",
  fontWeight: "bold",
  borderLeft: `1px solid ${color.secondary}`,
  leftMargin: "0.5rem",
  paddingLeft: "0.5rem",
  borderWidth: "2px",
  [theme.breakpoints.down("md")]: {
    border: "none",
    leftMargin: "0",
    paddingLeft: "0",
  },
}));

// Your existing styled components
const NavbarButton = styled(Button)({
  color: "white",
  fontFamily: "Rubik",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)", // Hover effect
  },
});


const CustomNavbar = ({ items, name }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "primary.main" }}>
      <Container maxWidth="lg">
        {" "}
        {/* Ensures consistent width */}
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left side (Name) */}
          <Typography
            variant="h6"
            component="div"
            sx={{ fontFamily: "Rubik", fontWeight: "bold", color: "white" }}
          >
            {name}
          </Typography>

          {/* Right side (Navbar Items) */}
          <div>
            {items.map((item, index) => (
              <NavbarButton key={index} href={item.href}>
                <Typography variant="button">{item.text}</Typography>
              </NavbarButton>
            ))}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const PageLayout = ({ children }) => {
  return (
    <Slide direction="down" in={true} timeout={500}>
      {children}
    </Slide>
  );
};

export {
  StyledDivider,
  Paragraph,
  Highlight,
  Title,
  SubTitle,
  CustomNavbar,
  PageLayout,
};

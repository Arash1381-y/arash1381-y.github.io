import React from "react";
import { Container, Typography } from "@mui/material";
import color from "../constants/pallate";
import { StyledDivider, Paragraph, Highlight } from "../components/Components";

function Introduction() {
  return (
    <Container maxWidth={"lg"} sx={{ mb: 5 }}>
      <Typography
        variant={"h5"}
        sx={{ color: color.secondary, fontWeight: "bold" }}
      >
        Little About Me
      </Typography>
      <Paragraph variant={"body1"}>
        Hi there, I'm Arash, a last-year undergraduate student at{" "}
        <Highlight>Sharif University of Technology</Highlight>. My field of
        interest varies from <Highlight>High Performance Computing</Highlight>{" "}
        and <Highlight> Computer Architecture </Highlight> to{" "}
        <Highlight> Programming Languages </Highlight> and a little bit of{" "}
        <Highlight> Web Development </Highlight>.
      </Paragraph>
    </Container>
  );
}

export default Introduction;

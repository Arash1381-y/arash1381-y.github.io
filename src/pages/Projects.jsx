import * as React from "react";
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  IconButton,
  Autocomplete,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Masonry from "@mui/lab/Masonry";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { motion, AnimatePresence } from "framer-motion"; // Add AnimatePresence
import { projects, tagColors } from "../constants/projects";

// Style for project cards
const Item = styled(Card)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
}));

const ProjectTags = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
  marginTop: "0.5rem",
});

const LinkIcons = styled("div")({
  display: "flex",
  gap: "0.5rem",
  marginTop: "0.5rem",
});

export default function Projects() {
  const [selectedTags, setSelectedTags] = React.useState([]);

  // Define tags for filtering
  const availableTags = Object.keys(tagColors);

  const handleChipClick = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  return (
    <Container maxWidth="lg" sx={{ mt: "2rem" }}>
      {/* Autocomplete for Tag Filtering */}
      <Autocomplete
        multiple
        options={availableTags}
        value={selectedTags} // Set value to selectedTags for control
        onChange={(event, value) => setSelectedTags(value)} // Handle value updates
        renderInput={(params) => (
          <TextField {...params} label="Filter by Tags" variant="outlined" />
        )}
        sx={{
          mb: 2,
          borderRadius: "8px",
          boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
        }}
      />

      {/* Project Cards with animated filter */}
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
        <AnimatePresence>
          {projects
            .filter(
              (project) =>
                selectedTags.length === 0 ||
                project.tags.some((tag) => selectedTags.includes(tag))
            )
            .map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <Item>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>

                    {/* Tags */}
                    <ProjectTags>
                      {project.tags.map((tag, idx) => (
                        <Chip
                          key={idx}
                          label={tag}
                          size="small"
                          sx={{
                            backgroundColor: tagColors[tag] || "default",
                            color: "#fff",
                            cursor: "pointer",
                            transform: selectedTags.includes(tag)
                              ? "scale(1.05)"
                              : "scale(1)",
                          }}
                          onClick={() => handleChipClick(tag)}
                        />
                      ))}
                    </ProjectTags>

                    {/* Links with icons */}
                    <LinkIcons>
                      {project.links.github && (
                        <IconButton
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          size="small"
                        >
                          <GitHubIcon />
                        </IconButton>
                      )}
                      {project.links.webpage && (
                        <IconButton
                          href={project.links.webpage}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Webpage"
                          size="small"
                        >
                          <LanguageIcon />
                        </IconButton>
                      )}
                    </LinkIcons>
                  </CardContent>
                </Item>
              </motion.div>
            ))}
        </AnimatePresence>
      </Masonry>
    </Container>
  );
}

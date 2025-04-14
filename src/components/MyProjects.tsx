import { useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  useTheme,
  Link
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  image: string;
  name: string;
  url: string;
}

export const MyProjects = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      image: "/images/bsProject.png",
      name: "Escritório B.S. Advocacia",
      url: "https://bsadvogados.netlify.app"
    },
    {
      id: 2,
      image: "/images/alenilsonProject.png",
      name: "Site Institucional Psicólogo Alenilson",
      url: "https://alenilsonpsi.netlify.app"
    },
    {
      id: 3,
      image: "/images/portfolioProject.png",
      name: "Portfólio Kelvin Teixeira",
      url: "https://kelvins-portfolio.netlify.app"
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  // Animations
  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideFromBottom = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.4
      }
    }
  };

  const getProjectSize = (index: number) => {
    const adjustedIndex = (index - currentIndex + projects.length) % projects.length;
    if (adjustedIndex === 0 || adjustedIndex === 2) {
      return { width: 280, height: 450 };
    }
    return { width: 320, height: 500 };
  };

  const getProjectOpacity = (index: number) => {
    const adjustedIndex = (index - currentIndex + projects.length) % projects.length;
    return adjustedIndex === 1 ? 1 : 0.7;
  };

  const visibleProjects = [
    projects[(currentIndex - 1 + projects.length) % projects.length],
    projects[currentIndex],
    projects[(currentIndex + 1) % projects.length]
  ];

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        backgroundImage: "url(/images/bg7.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(1, 6, 25, 0.7)",
        backgroundBlendMode: "overlay",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: 700,
              mb: { xs: 4, sm: 6, md: 8 },
              px: { xs: 2, sm: 0 },
              fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
              textShadow: "0 2px 8px rgba(0,0,0,0.2)",
              position: "relative",
              "&:after": {
                content: '""',
                display: "block",
                width: "80px",
                height: "4px",
                backgroundColor: "primary.main",
                margin: { xs: "12px auto 0", sm: "16px auto 0" },
                borderRadius: 2,
              },
            }}
          >
            Projetos Profissionais
          </Typography>
        </motion.div>

        <Box
          sx={{
            position: "relative",
            maxWidth: "100%",
            mx: "auto",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 1, sm: 2 },
            height: 550
          }}
        >
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            <KeyboardArrowLeft fontSize="large" />
          </IconButton>

          <Box
            ref={carouselRef}
            sx={{
              display: "flex",
              gap: { xs: 2, sm: 3 },
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%"
            }}
          >
            <AnimatePresence mode="wait">
              {visibleProjects.map((project) => {
                const size = getProjectSize(project.id);
                const opacity = getProjectOpacity(project.id);
                const isCenter = (project.id === projects[currentIndex].id);

                return (
                  <motion.div
                    key={project.id}
                    variants={cardAnimation}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    layout
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        borderRadius: 2,
                        overflow: "hidden",
                        transition: "all 0.3s ease",
                        width: size.width,
                        height: size.height,
                        opacity: opacity,
                        transform: isCenter ? "scale(1.05)" : "scale(0.95)",
                        zIndex: isCenter ? 2 : 1,
                        boxShadow: isCenter ? theme.shadows[8] : theme.shadows[2]
                      }}
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      <Box
                        component="img"
                        src={project.image}
                        alt={project.name}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "all 0.3s ease",
                          filter: hoveredProject === project.id ? "blur(2px) brightness(0.7)" : "none"
                        }}
                      />

                      <AnimatePresence>
                        {hoveredProject === project.id && (
                          <motion.div
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            variants={slideFromBottom}
                            style={{
                              position: "absolute",
                              left: 0,
                              right: 0,
                              bottom: 15,
                              display: "flex",
                              justifyContent: "center", 
                              alignItems: "center", 
                              zIndex: 3
                            }}
                          >
                            <Link
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                backgroundColor: "rgba(0, 0, 0, 0.7)",
                                backdropFilter: "blur(4px)",
                                color: "white",
                                textDecoration: "none",
                                fontWeight: 600,
                                padding: "8px 24px",
                                borderRadius: "100px",
                                border: `1px solid ${theme.palette.primary.main}`,
                                "&:hover": {
                                  color: theme.palette.primary.main,
                                },
                              }}
                            >
                              {project.name}
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Box>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </Box>

          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: 16,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            <KeyboardArrowRight fontSize="large" />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 3,
            gap: 1,
          }}
        >
          {projects.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: currentIndex === index ? "primary.main" : "rgba(255,255,255,0.4)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
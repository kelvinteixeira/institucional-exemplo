import {
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  Divider,
  useTheme,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";
import {
  Code,
  DesignServices,
  SettingsSuggest,
  LinkedIn,
  Instagram,
  Email,
  GitHub,
} from "@mui/icons-material";
import { motion } from "framer-motion";

// Animations
const slideFromLeft = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const AboutMe = () => {
  const theme = useTheme();

  return (
    <Box
      id="aboutme"
      sx={{
        py: { xs: 6, sm: 8, md: 10, lg: 12 },
        backgroundImage: "url(/images/bg8.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: { xs: "scroll", md: "fixed" },
        backgroundColor: "rgba(1, 6, 25, 0.85)",
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
            variant="h2"
            align="center"
            sx={{
              fontWeight: 700,
              mb: { xs: 4, sm: 6, md: 8 },
              px: { xs: 2, sm: 0 },
              fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              position: "relative",
              "&:after": {
                content: '""',
                display: "block",
                width: { xs: "60px", sm: "80px" },
                height: "4px",
                backgroundColor: "primary.main",
                margin: { xs: "16px auto 0", sm: "20px auto 0" },
                borderRadius: 2,
              },
            }}
          >
            Por trás da Codevibe Solutions
          </Typography>
        </motion.div>

        <Grid
          container
          spacing={{ xs: 4, sm: 6, md: 8 }}
          alignItems="center"
          component={motion.div}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Grid
            item
            xs={12}
            md={5}
            component={motion.div}
            variants={slideFromLeft}
          >
            <Box
              sx={{
                position: "relative",
                maxWidth: 400,
                mx: "auto",
                "&:hover": {
                  "&:after": {
                    transform: { xs: "none", md: "translate(15px, 15px)" },
                  },
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  borderRadius: 3,
                  overflow: "hidden",
                  border: "2px solid #9336be",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <img
                  src="/images/eu.jpeg"
                  alt="Desenvolvedor"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", 
                    objectPosition: "top",
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "primary.main",
                  borderRadius: 3,
                  zIndex: 1,
                  transition: "transform 0.3s ease",
                  display: { xs: "none", md: "block" },
                }}
              />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={7}
            component={motion.div}
            variants={slideFromRight}
          >
            <Box
              sx={{
                backgroundColor: "rgba(1, 6, 25, 0.7)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: 3,
                p: { xs: 3, sm: 4, md: 5 },
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: theme.palette.primary.main,
                },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  background:
                    "linear-gradient(90deg, #FFFFFF 0%, #AAAAAA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
                }}
              >
                Kelvin Teixeira
              </Typography>

              <Chip
                label="Desenvolvedor Full-Stack"
                color="primary"
                sx={{
                  mb: { xs: 2, sm: 3 },
                  px: 1,
                  fontWeight: 600,
                  fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                }}
              />

              <Divider
                sx={{
                  my: { xs: 2, sm: 3 },
                  borderColor: "rgba(255, 255, 255, 0.1)",
                }}
              />

              <Typography
                variant="body1"
                sx={{
                  mb: { xs: 2, sm: 3 },
                  lineHeight: 1.8,
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  opacity: 0.9,
                }}
              >
                Com mais de 3 anos de experiência no mercado, transformo ideias
                em soluções digitais de alto impacto. Especializado em
                desenvolvimento web moderno, meu trabalho combina design
                intuitivo com performance excepcional.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: { xs: 1, sm: 1.5 },
                  mb: { xs: 3, sm: 4 },
                }}
              >
                {[
                  {
                    icon: (
                      <Code sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }} />
                    ),
                    label: "React/Next.js",
                  },
                  {
                    icon: (
                      <DesignServices
                        sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
                      />
                    ),
                    label: "UI/UX Design",
                  },
                  {
                    icon: (
                      <SettingsSuggest
                        sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
                      />
                    ),
                    label: "Node.js",
                  },
                ].map((skill, index) => (
                  <Chip
                    key={index}
                    icon={skill.icon}
                    label={skill.label}
                    size="medium"
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "white",
                      "& .MuiChip-icon": { color: "primary.main" },
                      fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                    }}
                  />
                ))}
              </Box>

              {/* Redes Sociais */}
              <Stack direction="row" spacing={1} justifyContent="flex-start">
                <Tooltip title="LinkedIn">
                  <IconButton
                    aria-label="LinkedIn"
                    color="primary"
                    href="https://www.linkedin.com/in/kelvin-teixeira-8707b41a8/"
                    target="_blank"
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      "&:hover": {
                        backgroundColor: "rgba(0, 119, 181, 0.2)",
                        borderColor: "#0077b5",
                      },
                    }}
                  >
                    <LinkedIn />
                  </IconButton>
                </Tooltip>

                <Tooltip title="GitHub">
                  <IconButton
                    aria-label="GitHub"
                    color="primary"
                    href="https://github.com/kelvinteixeira"
                    target="_blank"
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        borderColor: "#333",
                      },
                    }}
                  >
                    <GitHub />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Instagram">
                  <IconButton
                    aria-label="Instagram"
                    color="primary"
                    href="https://www.instagram.com/kelvinteixeira_/"
                    target="_blank"
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      "&:hover": {
                        backgroundColor: "rgba(225, 48, 108, 0.2)",
                        borderColor: "#e1306c",
                      },
                    }}
                  >
                    <Instagram />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Email">
                  <IconButton
                    aria-label="Email"
                    color="primary"
                    href="mailto:seuemail@example.com" // Adicione seu email
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      "&:hover": {
                        backgroundColor: "rgba(219, 68, 55, 0.2)",
                        borderColor: "#db4437",
                      },
                    }}
                  >
                    <Email />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

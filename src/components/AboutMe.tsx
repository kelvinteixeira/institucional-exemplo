import { Box, Container, Grid, Typography, Button, Avatar, Chip, Divider } from "@mui/material";
import { Code, DesignServices, SettingsSuggest } from "@mui/icons-material";

export const AboutMe = () => {
  return (
    <Box
      id="aboutme"
      sx={{
        py: 12,
        backgroundImage: "url(/images/bg8.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "rgba(1, 6, 25, 0.85)",
        backgroundBlendMode: "overlay",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontWeight: 700,
            mb: 8,
            textShadow: "0 2px 10px rgba(0,0,0,0.3)",
            position: "relative",
            "&:after": {
              content: '""',
              display: "block",
              width: "80px",
              height: "4px",
              backgroundColor: "primary.main",
              margin: "20px auto 0",
              borderRadius: 2
            }
          }}
        >
          Por trás da Codevibe Solutions
        </Typography>

        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: "relative",
                maxWidth: 400,
                mx: "auto",
                "&:hover": {
                  "&:after": {
                    transform: "translate(15px, 15px)"
                  }
                }
              }}
            >
              <Avatar
                src="/images/eu2.png"
                alt="Desenvolvedor"
                sx={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "1/1",
                  borderRadius: 3,
                  border: "2px solid #9336be",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                  position: "relative",
                  zIndex: 2
                }}
              />
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
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box
              sx={{
                backgroundColor: "rgba(1, 6, 25, 0.7)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: 3,
                p: 5,
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  background: "linear-gradient(90deg, #FFFFFF 0%, #AAAAAA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                Kelvin Teixeira
              </Typography>
              
              <Chip
                label="Desenvolvedor Full-Stack"
                color="primary"
                sx={{ mb: 3, px: 1, fontWeight: 600 }}
              />

              <Divider sx={{ my: 3, borderColor: "rgba(255, 255, 255, 0.1)" }} />

              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  lineHeight: 1.8,
                  fontSize: "1.1rem",
                  opacity: 0.9
                }}
              >
                Com mais de 3 anos de experiência no mercado, transformo ideias em soluções digitais 
                de alto impacto. Especializado em desenvolvimento web moderno, meu trabalho combina 
                design intuitivo com performance excepcional.
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 4 }}>
                {[
                  { icon: <Code />, label: "React/Next.js" },
                  { icon: <DesignServices />, label: "UI/UX Design" },
                  { icon: <SettingsSuggest />, label: "Node.js" },
                ].map((skill, index) => (
                  <Chip
                    key={index}
                    icon={skill.icon}
                    label={skill.label}
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "white",
                      "& .MuiChip-icon": { color: "primary.main" }
                    }}
                  />
                ))}
              </Box>

              <Button
                variant="outlined"
                color="primary"
                size="large"
                href="#contact"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  borderWidth: 2,
                  "&:hover": { borderWidth: 2 }
                }}
              >
                Vamos conversar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
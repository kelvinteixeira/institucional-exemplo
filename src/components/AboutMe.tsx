import { Box, Container, Grid, Typography, Button, Avatar, Chip, Divider, useTheme } from "@mui/material";
import { Code, DesignServices, SettingsSuggest } from "@mui/icons-material";

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
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontWeight: 700,
            mb: { xs: 4, sm: 6, md: 8 },
            px: { xs: 2, sm: 0 },
            fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
            textShadow: "0 2px 10px rgba(0,0,0,0.3)",
            position: "relative",
            "&:after": {
              content: '""',
              display: "block",
              width: { xs: '60px', sm: '80px' },
              height: "4px",
              backgroundColor: "primary.main",
              margin: { xs: "16px auto 0", sm: "20px auto 0" },
              borderRadius: 2
            }
          }}
        >
          Por trás da Codevibe Solutions
        </Typography>

        <Grid container spacing={{ xs: 4, sm: 6, md: 8 }} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: "relative",
                maxWidth: 400,
                mx: "auto",
                "&:hover": {
                  "&:after": {
                    transform: { xs: 'none', md: "translate(15px, 15px)" }
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
                  display: { xs: "none", md: "block" }
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
                p: { xs: 3, sm: 4, md: 5 },
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: theme.palette.primary.main
                }
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  background: "linear-gradient(90deg, #FFFFFF 0%, #AAAAAA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' }
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
                  fontSize: { xs: '0.875rem', sm: '0.9375rem' }
                }}
              />

              <Divider sx={{ 
                my: { xs: 2, sm: 3 },
                borderColor: "rgba(255, 255, 255, 0.1)" 
              }} />

              <Typography
                variant="body1"
                sx={{
                  mb: { xs: 2, sm: 3 },
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  opacity: 0.9
                }}
              >
                Com mais de 3 anos de experiência no mercado, transformo ideias em soluções digitais 
                de alto impacto. Especializado em desenvolvimento web moderno, meu trabalho combina 
                design intuitivo com performance excepcional.
              </Typography>

              <Box sx={{ 
                display: "flex", 
                flexWrap: "wrap", 
                gap: { xs: 1, sm: 1.5 },
                mb: { xs: 3, sm: 4 }
              }}>
                {[
                  { icon: <Code sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }} />, label: "React/Next.js" },
                  { icon: <DesignServices sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }} />, label: "UI/UX Design" },
                  { icon: <SettingsSuggest sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }} />, label: "Node.js" },
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
                      fontSize: { xs: '0.875rem', sm: '0.9375rem' }
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
                  px: { xs: 3, sm: 4 },
                  py: { xs: 1, sm: 1.5 },
                  fontWeight: 600,
                  borderWidth: 2,
                  "&:hover": { 
                    borderWidth: 2,
                    transform: 'translateY(-2px)'
                  },
                  width: { xs: '100%', sm: 'auto' },
                  fontSize: { xs: '0.9375rem', sm: '1rem' }
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
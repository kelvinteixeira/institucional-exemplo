import { Security, RocketLaunch, Handshake, Construction } from "@mui/icons-material"
import { Box, Container, Typography, Grid } from "@mui/material"

export const Features = () => {
  return (
    <Box
    id="features"
    sx={{
      pt: 8,
      py: 10,
      backgroundImage: "url(/images/bg5.jpeg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "rgba(1, 6, 25, 0.7)",
      backgroundBlendMode: "overlay",
      backdropFilter: "blur(5px)",
    }}
  >
    <Container maxWidth="lg">
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 700,
          mb: 2,
          textShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        Nossos Diferenciais
      </Typography>
      <Typography variant="h6" align="center" sx={{ mb: 8, opacity: 0.8 }}>
      Seu site profissional, rápido, sob medida e pronto para e escalar seu negócio!
      </Typography>
      <Grid container spacing={2}>
        {[
          {
            icon: <Construction fontSize="large" />,
            title: " Desenvolvimento Sob Medida",
            description:
              "Sites exclusivos, feitos para resolver suas necessidades específicas do layout à funcionalidade, tudo pensado para seu negócio.",
          },
          {
            icon: <RocketLaunch fontSize="large" />,
            title: "Otimizado para Resultados",
            description: "Performance turbo: sites rápidos, SEO integrado e prontos para converter visitantes em clientes.",
          },
          {
            icon: <Security fontSize="large" />,
            title: "Segurança Blindada",
            description: "Proteção de dados com criptografia avançada",
          },
          {
            icon: <Handshake fontSize="large" />,
            title: " Suporte Contínuo",
            description: "Não apenas entregamos seu site, ficamos ao seu lado para ajustes, treinamentos e atualizações.",
          },
        ].map((feature, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Box
              sx={{
                backgroundColor: "#010619a4",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.712)",
                borderRadius: 3,
                p: 4,
                height: "100%",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                },
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  color: "primary.main",
                  fontSize: "2.5rem",
                }}
              >
                {feature.icon}
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                {feature.title}
              </Typography>
              <Typography sx={{ opacity: 0.9 }}>
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
  )
}
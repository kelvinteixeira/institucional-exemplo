import { Security, RocketLaunch, Handshake, Construction } from "@mui/icons-material"
import { Box, Container, Typography, Grid, useTheme } from "@mui/material"

export const Features = () => {
  const theme = useTheme()
  
  return (
    <Box
      id="features"
      sx={{
        pt: { xs: 6, sm: 8, md: 10 },
        pb: { xs: 8, sm: 10, md: 12 },
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
            mb: { xs: 1, sm: 2 },
            px: { xs: 2, sm: 0 },
            fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
            textShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          Nosso Diferencial
        </Typography>
        <Typography 
          variant="h6" 
          align="center" 
          sx={{ 
            mb: { xs: 6, sm: 8 },
            px: { xs: 2, sm: 0 },
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
            opacity: 0.8 
          }}
        >
          Seu site profissional, rápido, sob medida e pronto para escalar seu negócio!
        </Typography>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {[
            {
              icon: <Construction fontSize="large" />,
              title: "Desenvolvimento Sob Medida",
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
              title: "Suporte Contínuo",
              description: "Não apenas entregamos seu site, ficamos ao seu lado para ajustes, treinamentos e atualizações.",
            },
          ].map((feature, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={3} 
              key={index}
              sx={{
                // Adiciona transição suave para o grid item
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                  zIndex: 1
                }
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#010619a4",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.712)",
                  borderRadius: 3,
                  p: { xs: 3, sm: 4 },
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: theme.shadows[8],
                    borderColor: theme.palette.primary.main
                  },
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    color: "primary.main",
                    fontSize: { xs: '2rem', sm: '2.5rem' },
                    textAlign: 'center'
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 600, 
                    mb: 1,
                    textAlign: 'center',
                    fontSize: { xs: '1.25rem', sm: '1.5rem' }
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography 
                  sx={{ 
                    opacity: 0.9,
                    textAlign: 'center',
                    fontSize: { xs: '0.9rem', sm: '1rem' }
                  }}
                >
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
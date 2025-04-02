import { WhatsApp } from "@mui/icons-material";
import { Box, Container, Grid, Typography, Button, useTheme } from "@mui/material";
import { useWhatsApp } from "../hooks/useWhatsapp";

export const HeroSection = () => {
  const { onClick } = useWhatsApp();
  const theme = useTheme();
  
  return (
    <Box
      id="home"
      sx={{
        minHeight: { xs: 'auto', sm: '100vh' },
        pt: { xs: 8, sm: 0 },
        pb: { xs: 8, sm: 0 },
        backgroundImage: "url(/images/bg8.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: { xs: 'scroll', md: 'fixed' },
        backgroundColor: "rgba(1, 6, 25, 0.7)",
        backgroundBlendMode: "overlay",
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 8, md: 12 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: { xs: 2, sm: 3 },
                px: { xs: 1, sm: 0 },
                fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3.5rem' },
                lineHeight: { xs: 1.3, sm: 1.2 },
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              }}
            >
              Transforme suas ideias em realidade digital
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: { xs: 3, sm: 4 },
                opacity: 0.9,
                lineHeight: 1.6,
                fontSize: { xs: '1rem', sm: '1.25rem' }
              }}
            >
              Desenvolvimento de sites sob medida, rápidos e com alta
              performance para alavancar seu negócio. Juntos, criaremos uma
              presença online que impressiona, converte e cresce. 🚀
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: { xs: 3, sm: 4 },
                opacity: 0.9,
                lineHeight: 1.6,
                fontSize: { xs: '1.1rem', sm: '1.5rem' }
              }}
            >
              Pronto para começar?
            </Typography>
            <Box sx={{ 
              display: "flex", 
              gap: { xs: 2, sm: 3 }, 
              mb: { xs: 3, sm: 4 },
              flexDirection: { xs: 'column', sm: 'row' }
            }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<WhatsApp sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }} />}
                onClick={() => onClick()}
                sx={{
                  px: { xs: 3, sm: 4 },
                  py: { xs: 1, sm: 1.5 },
                  fontWeight: 600,
                  fontSize: { xs: '0.9375rem', sm: '1rem' },
                  '&:hover': {
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Mande uma mensagem
              </Button>
            </Box>
            <Box sx={{ 
              display: "flex", 
              alignItems: "center", 
              gap: 2,
              flexWrap: 'wrap'
            }}>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Todos os nossos clientes estão satisfeitos!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Box
              sx={{
                backgroundColor: "#010619a4",
                backdropFilter: "blur(10px)",
                border: "1px solid #9336be",
                borderRadius: 3,
                p: { xs: 2, sm: 3 },
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: { xs: 'none', md: 'translateY(-5px)' },
                  boxShadow: theme.shadows[10]
                }
              }}
            >
              <img
                src="/images/bg11.jpeg"
                alt="Dashboard Preview"
                style={{
                  width: "100%",
                  height: 'auto',
                  borderRadius: 8,
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
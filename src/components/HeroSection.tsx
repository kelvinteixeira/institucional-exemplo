import { WhatsApp } from "@mui/icons-material";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { useWhatsApp } from "../hooks/Whatsapp";

export const HeroSection = () => {
  const { onClick } = useWhatsApp();
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        backgroundImage: "url(/images/bg8.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              }}
            >
              Transforme suas energias em realidade digital
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                opacity: 0.9,
                lineHeight: 1.6,
              }}
            >
              Desenvolvimento de sites sob medida, rápidos e com alta
              performance para alavancar seu negócio. Juntos, criaremos uma
              presença online que impressiona, converte e cresce. 🚀
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                opacity: 0.9,
                lineHeight: 1.6,
              }}
            >
              {" "}
              Pronto para começar?
            </Typography>
            <Box sx={{ display: "flex", gap: 3, mb: 4 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<WhatsApp />}
                onClick={() => onClick()}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                }}
              >
                Mande uma mensagem
              </Button>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography>
                Todos os nossos clientes estão satisfeitos!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "#010619a4",
                backdropFilter: "blur(10px)",
                border: "1px solid #9336be",
                borderRadius: 3,
                p: 3,
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <img
                src="/images/bg11.jpeg"
                alt="Dashboard Preview"
                style={{
                  width: "100%",
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

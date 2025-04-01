import { WhatsApp } from "@mui/icons-material";
import { Box, Container, Typography, Button } from "@mui/material";
import { useWhatsApp } from "../hooks/Whatsapp";

export const Contact = () => {
  const { onClick } = useWhatsApp();
  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        backgroundImage: "url(/images/bg9.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(1, 6, 25, 0.849)",
        backgroundBlendMode: "overlay",
        backdropFilter: "blur(5px)",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            backgroundColor: "#010619a4",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.712)",
            borderRadius: 3,
            p: 6,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 3,
              textShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            Quer um site que realmente gere resultados?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Pronto para transformar sua presença digital? Agende uma consultoria
            gratuita e sem compromisso{" "}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => onClick()}
              startIcon={<WhatsApp />}
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 600,
              }}
            >
              Entre em contato agora
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

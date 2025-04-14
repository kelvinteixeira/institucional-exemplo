import { WhatsApp } from "@mui/icons-material";
import { Box, Container, Typography, Button, useTheme } from "@mui/material";
import { useWhatsApp } from "../hooks/useWhatsapp";

export const Contact = () => {
  const { onClick } = useWhatsApp();
  const theme = useTheme();

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgb(1, 6, 25)",
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
            p: { xs: 3, sm: 4, md: 6 },
            textAlign: "center",
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: theme.palette.primary.main,
              boxShadow: theme.shadows[8]
            }
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: { xs: 2, sm: 3 },
              px: { xs: 1, sm: 0 },
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' },
              lineHeight: { xs: 1.3, sm: 1.2 },
              textShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            Quer um site que realmente gere resultados?
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              mb: { xs: 3, sm: 4 },
              px: { xs: 1, sm: 0 },
              opacity: 0.9,
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
              lineHeight: 1.6
            }}
          >
            Pronto para transformar sua presença digital? Agende uma consultoria
            gratuita e sem compromisso
          </Typography>
          
          <Box
            sx={{
              display: "flex",
              gap: { xs: 1.5, sm: 2 },
              justifyContent: "center",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => onClick()}
              startIcon={<WhatsApp sx={{ 
                fontSize: { xs: '1.25rem', sm: '1.5rem' } 
              }} />}
              sx={{
                px: { xs: 3, sm: 4 },
                py: { xs: 1, sm: 1.5 },
                fontWeight: 600,
                minWidth: { xs: '100%', sm: 'auto' },
                fontSize: { xs: '0.9375rem', sm: '1rem' },
                '&:hover': {
                  transform: 'translateY(-2px)'
                }
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
import { Box, Container, Grid, Typography } from "@mui/material";

export const HowItWorks = () => {
  return (
    <Box
      id="howitworks"
      sx={{
        py: 10,
        backgroundImage: "url(/images/bg7.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 700,
            mb: 8,
            textShadow: "0 2px 8px rgba(0,0,0,0.2)",
            
          }}
        >
          Como Funciona
        </Typography>
        <Grid container spacing={2}>
          {[
            <Box >
              <Typography variant="h5" mb={1}>
                Conversa Inicial
              </Typography>
              <Typography variant="subtitle2" fontSize={12} color="lightgray">
                "Fale conosco em 5 minutos — vamos entender suas necessidades e
                objetivos.",
              </Typography>
            </Box>,
            <Box>
              <Typography variant="h5" mb={1}>
                Proposta Personalizada
              </Typography>
              <Typography variant="subtitle2" fontSize={12} color="lightgray">
                "Receba um orçamento transparente com prazos, tecnologias e
                etapas do projeto.",
              </Typography>
            </Box>,
            <Box>
              <Typography variant="h5" mb={1}>
                Desenvolvimento Sob Medida
              </Typography>
              <Typography variant="subtitle2" fontSize={12} color="lightgray">
                "Mãos à obra! Desenvolvemos seu site com atualizações semanais
                do progresso.",
              </Typography>
            </Box>,
            <Box>
              <Typography variant="h5" mb={1}>
                Entrega & Suporte
              </Typography>
              <Typography variant="subtitle2" fontSize={12} color="lightgray">
                "Site no ar + treinamento para gerenciá-lo. E suporte contínuo
                para ajustes!",
              </Typography>
            </Box>,
          ].map((step, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Box
                sx={{
                  backgroundColor: "#010619a4",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.712)",
                  borderRadius: 3,
                  p: 3,
                  height: "100%",
                  textAlign: "center",
                }}
              >
                <Typography variant="h4" color="primary" sx={{ mb: 1 }}>
                  {index + 1}
                </Typography>
                <Typography>{step}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

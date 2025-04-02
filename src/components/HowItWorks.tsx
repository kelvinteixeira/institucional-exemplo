import { Box, Container, Grid, Typography, useTheme } from "@mui/material";

export const HowItWorks = () => {
  const theme = useTheme();

  return (
    <Box
      id="howitworks"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        backgroundImage: "url(/images/bg7.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(1, 6, 25, 0.7)",
        backgroundBlendMode: "overlay",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 700,
            mb: { xs: 4, sm: 6, md: 8 },
            px: { xs: 2, sm: 0 },
            fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
            textShadow: "0 2px 8px rgba(0,0,0,0.2)",
            position: 'relative',
            '&:after': {
              content: '""',
              display: 'block',
              width: '80px',
              height: '4px',
              backgroundColor: 'primary.main',
              margin: { xs: '12px auto 0', sm: '16px auto 0' },
              borderRadius: 2
            }
          }}
        >
          Como Funciona
        </Typography>
        
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {[
            {
              title: "Conversa Inicial",
              description: "Mande uma mensagem — vamos entender suas necessidades e objetivos."
            },
            {
              title: "Proposta Personalizada",
              description: "Receba um orçamento transparente com prazos, tecnologias e etapas do projeto."
            },
            {
              title: "Desenvolvimento Sob Medida",
              description: "Mãos à obra! Desenvolvemos seu site com atualizações semanais do progresso."
            },
            {
              title: "Entrega & Suporte",
              description: "Site no ar + treinamento para gerenciá-lo. E suporte contínuo para ajustes!"
            }
          ].map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  backgroundColor: "#010619a4",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.712)",
                  borderRadius: 3,
                  p: { xs: 2.5, sm: 3 },
                  height: "100%",
                  textAlign: "center",
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: { xs: 'none', md: 'translateY(-8px)' },
                    borderColor: theme.palette.primary.main,
                    boxShadow: theme.shadows[8]
                  }
                }}
              >
                <Typography 
                  variant="h2" 
                  color="primary" 
                  sx={{ 
                    mb: { xs: 1, sm: 2 },
                    fontSize: { xs: '2.5rem', sm: '3rem' }
                  }}
                >
                  {index + 1}
                </Typography>
                
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: { xs: 1, sm: 1.5 },
                    fontSize: { xs: '1.25rem', sm: '1.5rem' }
                  }}
                >
                  {step.title}
                </Typography>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: { xs: '0.875rem', sm: '0.9375rem' },
                    lineHeight: 1.6
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
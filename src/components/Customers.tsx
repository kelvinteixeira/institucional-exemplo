import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Rating,
} from "@mui/material";
import { StarBorder } from "@mui/icons-material";

export const Customers = () => {
  return (
    <Box
      id="customers"
      sx={{
        py: 10,
        backgroundImage: "url(/images/bg7.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(1, 6, 25, 0.7)",
        backgroundBlendMode: "overlay",
        backdropFilter: "blur(5px)",
        transform: "scaleX(-1)",
        "& > *": {
          transform: "scaleX(-1)",
        },
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
          O que dizem nossos clientes
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              name: "Ana Paula Santos",
              role: "CEO - Boutique Online",
              avatar: "AP",
              comment:
                "Meu site superou todas as expectativas! Design moderno e vendas aumentaram 60% em 3 meses.",
              rating: 5,
            },
            {
              name: "Carlos Mendes",
              role: "Diretor - Agência Digital",
              avatar: "CM",
              comment:
                "O desenvolvimento foi ágil e profissional. Nosso site agora é referência no mercado.",
              rating: 4.5,
            },
            {
              name: "Mariana Fernandes",
              role: "Empreendedora",
              avatar: "MF",
              comment:
                "Atendimento excepcional! Transformaram minha ideia em um site incrível que já gerou vários clientes.",
              rating: 5,
            },
            {
              name: "João Vitor",
              role: "Advogado",
              avatar: "JV",
              comment:
              "Profissionalismo impressionante! Transformaram meu escritório virtual em uma plataforma credível que já captou clientes de alto padrão.",
              rating: 5,
            },
          ].map((customer, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                sx={{
                  backgroundColor: "#010619a4",
                  backdropFilter: "blur(10px)",
                  border: "2px solid rgba(255, 255, 255, 0.712)",
                  borderRadius: 3,
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb:2 }}>
                  <Avatar >
                    {customer.avatar}
                  </Avatar>
                  <Box>
                    <Typography fontWeight={600} color="primary">{customer.name}</Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      {customer.role}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Rating
                      value={customer.rating}
                      readOnly
                      precision={0.5}
                      emptyIcon={<StarBorder fontSize="inherit" />}
                    />
                    <Typography variant="body2" ml={1} sx={{ opacity: 0.8 }}>
                      ({customer.rating}/5)
                    </Typography>
                  </Box>
                  <Typography sx={{ mb: 3, fontStyle: "italic" }}>
                    "{customer.comment}"
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

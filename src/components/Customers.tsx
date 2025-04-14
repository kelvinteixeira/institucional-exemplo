import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Rating,
  useTheme
} from "@mui/material";
import { StarBorder } from "@mui/icons-material";
import { motion } from "framer-motion";

// Animations
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const Customers = () => {
  const theme = useTheme();
  
  return (
    <Box
      id="customers"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        // backgroundImage: "url(/images/bg7.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgb(1, 6, 25)",
        backgroundBlendMode: "overlay",
        backdropFilter: "blur(5px)",
        transform: "scaleX(-1)",
        "& > *": {
          transform: "scaleX(-1)",
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
           <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: 700,
              mb: { xs: 4, sm: 6, md: 8 },
              px: { xs: 2, sm: 0 },
              fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
              textShadow: "0 2px 8px rgba(0,0,0,0.2)",
              position: "relative",
              "&:after": {
                content: '""',
                display: "block",
                width: "80px",
                height: "4px",
                backgroundColor: "primary.main",
                margin: { xs: "12px auto 0", sm: "16px auto 0" },
                borderRadius: 2,
              },
            }}
          >
            O que nossos clientes dizem
          </Typography>
        </motion.div>
        
        <Grid 
          container 
          spacing={{ xs: 2, sm: 3, md: 4 }}
          component={motion.div}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
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
            <Grid 
              item 
              xs={12} 
              sm={6} 
              key={index}
              component={motion.div}
              variants={slideFromLeft}
              transition={{ delay: index * 0.2 }}
            >
              <Box
                sx={{
                  backgroundColor: "#010619a4",
                  backdropFilter: "blur(10px)",
                  border: "2px solid rgba(255, 255, 255, 0.712)",
                  borderRadius: 3,
                  p: { xs: 2.5, sm: 3, md: 4 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                    boxShadow: theme.shadows[6]
                  }
                }}
              >
                <Box sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: 2, 
                  mb: { xs: 1.5, sm: 2 }
                }}>
                  <Avatar sx={{
                    width: { xs: 40, sm: 44, md: 48 },
                    height: { xs: 40, sm: 44, md: 48 },
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                  }}>
                    {customer.avatar}
                  </Avatar>
                  <Box>
                    <Typography 
                      fontWeight={600} 
                      color="primary"
                      fontSize={{ xs: '0.95rem', sm: '1rem', md: '1.1rem' }}
                    >
                      {customer.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        opacity: 0.8,
                        fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' }
                      }}
                    >
                      {customer.role}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Box sx={{ 
                    display: "flex", 
                    alignItems: "center", 
                    mb: { xs: 1.5, sm: 2 }
                  }}>
                    <Rating
                      value={customer.rating}
                      readOnly
                      precision={0.5}
                      size="medium"
                      sx={{
                        '& .MuiRating-icon': {
                          fontSize: { xs: '1.25rem', sm: '1.5rem' }
                        }
                      }}
                      emptyIcon={<StarBorder fontSize="inherit" />}
                    />
                    <Typography 
                      variant="body2" 
                      ml={1} 
                      sx={{ 
                        opacity: 0.8,
                        fontSize: { xs: '0.8rem', sm: '0.85rem' }
                      }}
                    >
                      ({customer.rating}/5)
                    </Typography>
                  </Box>
                  <Typography 
                    sx={{ 
                      mb: { xs: 2, sm: 3 },
                      fontStyle: "italic",
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      lineHeight: 1.6
                    }}
                  >
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
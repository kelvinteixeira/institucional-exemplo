import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Email,
  Phone,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
  Link,
  Button,
} from "@mui/material";
import { useWhatsApp } from "../hooks/useWhatsapp";

export const Footer = () => {
  const { onClick } = useWhatsApp();
  
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: "#010619",
        borderTop: "1px solid rgba(255, 255, 255, 0.2)",
        backgroundImage:
          "linear-gradient(to bottom, rgba(1, 6, 25, 0.9), rgba(1, 6, 25, 1))",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Coluna Logo/Redes Sociais */}
          <Grid item xs={12} md={4}>
            <Box sx={{ 
              display: "flex", 
              alignItems: "center", 
              mb: { xs: 2, md: 3 } 
            }}>
              <img
                src="/images/codevibeLogo.png"
                alt="CodeVibe Logo"
                style={{ height: 40, width: 'auto' }}
              />
              <Typography 
                variant="h6" 
                sx={{ 
                  ml: 2, 
                  fontWeight: 700,
                  fontSize: { xs: '1.1rem', sm: '1.25rem' }
                }}
              >
                CodeVibe Solutions
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ 
                mb: { xs: 2, md: 3 }, 
                opacity: 0.8, 
                lineHeight: 1.7,
                fontSize: { xs: '0.875rem', sm: '0.9375rem' }
              }}
            >
              Transformamos ideias em experiências digitais excepcionais.
              Desenvolvimento web sob medida para alavancar seu negócio.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {[Facebook, Instagram, Twitter, LinkedIn].map((Icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    color: "white",
                    transition: "all 0.3s",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      color: "primary.main",
                    },
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Coluna Links */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography
              variant="subtitle1"
              sx={{ 
                mb: { xs: 2, md: 3 }, 
                fontWeight: 600, 
                letterSpacing: 1,
                fontSize: { xs: '0.875rem', sm: '0.9375rem' }
              }}
            >
              NAVEGAÇÃO
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {[
                { label: "Início", href: "#home" },
                { label: "Serviços", href: "#services" },
                { label: "Portfólio", href: "#portfolio" },
                { label: "Sobre Nós", href: "#about" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  color="inherit"
                  underline="none"
                  sx={{
                    opacity: 0.8,
                    transition: "opacity 0.3s",
                    fontSize: { xs: '0.8125rem', sm: '0.875rem' },
                    "&:hover": {
                      opacity: 1,
                      color: "primary.main",
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Coluna Serviços */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography
              variant="subtitle1"
              sx={{ 
                mb: { xs: 2, md: 3 }, 
                fontWeight: 600, 
                letterSpacing: 1,
                fontSize: { xs: '0.875rem', sm: '0.9375rem' }
              }}
            >
              SERVIÇOS
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {[
                "Sites Institucionais",
                "E-commerce",
                "Landing Pages",
                "Sistemas Web",
              ].map((service) => (
                <Typography
                  key={service}
                  variant="body2"
                  sx={{
                    opacity: 0.8,
                    fontSize: { xs: '0.8125rem', sm: '0.875rem' },
                    "&:hover": {
                      opacity: 1,
                      color: "primary.main",
                    },
                  }}
                >
                  {service}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Coluna Contato */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="subtitle1"
              sx={{ 
                mb: { xs: 2, md: 3 }, 
                fontWeight: 600, 
                letterSpacing: 1,
                fontSize: { xs: '0.875rem', sm: '0.9375rem' }
              }}
            >
              CONTATO
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Phone sx={{ 
                  mr: 2, 
                  fontSize: { xs: 18, sm: 20 }, 
                  opacity: 0.8 
                }} />
                <Link
                  href="tel:+5583996157313"
                  color="inherit"
                  underline="hover"
                  sx={{ fontSize: { xs: '0.8125rem', sm: '0.875rem' } }}
                >
                  (83) 99615-7313
                </Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Email sx={{ 
                  mr: 2, 
                  fontSize: { xs: 18, sm: 20 }, 
                  opacity: 0.8 
                }} />
                <Link
                  href="mailto:kelvin.teixeira.dev@gmail.com"
                  color="inherit"
                  underline="hover"
                  sx={{ fontSize: { xs: '0.8125rem', sm: '0.875rem' } }}
                >
                  kelvin.teixeira.dev@gmail.com
                </Link>
              </Box>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => onClick()}
                sx={{
                  alignSelf: { xs: 'center', sm: 'flex-start' },
                  px: 3,
                  py: 1,
                  mt: 1,
                  borderRadius: 2,
                  borderWidth: 2,
                  fontSize: { xs: '0.8125rem', sm: '0.875rem' },
                  "&:hover": {
                    borderWidth: 2,
                    backgroundColor: "rgba(0, 117, 255, 0.1)",
                    transform: 'translateY(-2px)'
                  },
                }}
              >
                Fale Conosco
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider
          sx={{
            my: { xs: 4, md: 6 },
            borderColor: "rgba(255, 255, 255, 0.1)",
            borderWidth: 1,
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              opacity: 0.6,
              fontSize: { xs: '0.75rem', sm: '0.8125rem' }
            }}
          >
            © {new Date().getFullYear()} CodeVibe Solutions. Todos os direitos reservados.
          </Typography>
          
          <Box sx={{ 
            display: "flex", 
            gap: { xs: 2, sm: 3 },
            fontSize: { xs: '0.75rem', sm: '0.8125rem' }
          }}>
            <Link
              href="/politica-de-privacidade"
              color="inherit"
              underline="hover"
              variant="body2"
              sx={{ fontSize: 'inherit' }}
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos-de-uso"
              color="inherit"
              underline="hover"
              variant="body2"
              sx={{ fontSize: 'inherit' }}
            >
              Termos de Uso
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
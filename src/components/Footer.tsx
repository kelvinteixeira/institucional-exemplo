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
import { useWhatsApp } from "../hooks/Whatsapp";

export const Footer = () => {
  const { onClick } = useWhatsApp();
  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: "#010619",
        borderTop: "1px solid rgba(255, 255, 255, 0.2)",
        backgroundImage:
          "linear-gradient(to bottom, rgba(1, 6, 25, 0.9), rgba(1, 6, 25, 1))",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Coluna Logo/Redes Sociais */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <img
                src="/images/codevibeLogo.png"
                alt="CodeVibe Logo"
                style={{ height: 50 }}
              />
              <Typography variant="h6" sx={{ ml: 2, fontWeight: 700 }}>
                CodeVibe
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ mb: 3, opacity: 0.8, lineHeight: 1.7 }}
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
          <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle1"
              sx={{ mb: 3, fontWeight: 600, letterSpacing: 1 }}
            >
              NAVEGAÇÃO
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {[
                { label: "Início", href: "#home" },
                { label: "Desenvolvimento", href: "#howitworks" },
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
          <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle1"
              sx={{ mb: 3, fontWeight: 600, letterSpacing: 1 }}
            >
              SERVIÇOS
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle1"
              sx={{ mb: 3, fontWeight: 600, letterSpacing: 1 }}
            >
              CONTATO
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Phone sx={{ mr: 2, fontSize: 20, opacity: 0.8 }} />
                <Link
                  href="tel:+551199999999"
                  color="inherit"
                  underline="hover"
                >
                  (83) 99615-7313
                </Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Email sx={{ mr: 2, fontSize: 20, opacity: 0.8 }} />
                <Link
                  href="mailto:contato@codevibe.com"
                  color="inherit"
                  underline="hover"
                >
                  kelvin.teixeira.dev@gmail.com
                </Link>
              </Box>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => onClick()}
                sx={{
                  alignSelf: "flex-start",
                  px: 3,
                  py: 1,
                  mt: 1,
                  borderRadius: 2,
                  borderWidth: 2,
                  "&:hover": {
                    borderWidth: 2,
                    backgroundColor: "rgba(0, 117, 255, 0.1)",
                  },
                }}
                href="#contact"
              >
                Fale Conosco
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider
          sx={{
            my: 6,
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
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            © {new Date().getFullYear()} CodeVibe. Todos os direitos reservados.
          </Typography>
          {/* <Box sx={{ display: "flex", gap: 3 }}>
            <Link
              href="/politica-de-privacidade"
              color="inherit"
              underline="hover"
              variant="body2"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos-de-uso"
              color="inherit"
              underline="hover"
              variant="body2"
            >
              Termos de Uso
            </Link>
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
};

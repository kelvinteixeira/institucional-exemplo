import { Box, Container, Grid, Button } from "@mui/material";

export const Navbar = () => {
  // Função para rolagem suave com offset para o navbar
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.querySelector('nav')?.clientHeight || 0;
      const offset = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <Box
      component="nav" // Adicionamos component="nav" para facilitar a seleção
      sx={{
        backgroundColor: "#010619",
        backdropFilter: "blur(10px)",
        borderBottom: "2px solid #9336be",
        py: 2,
        px: 4,
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button onClick={() => scrollTo("home")} sx={{ p: 0 }}>
                <img
                  src="/images/codevibeLogo.png"
                  alt="CodeVibe Logo"
                  style={{ height: 120, cursor: "pointer" }}
                />
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {[
                { label: "Diferencial", id: "features" },
                { label: "Desenvolvimento", id: "howitworks" },
                { label: "Quem somos", id: "aboutme" },
                { label: "Depoimentos", id: "customers" },
                { label: "Dúvidas", id: "faq" },
              ].map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  sx={{
                    color: "white",
                    fontWeight: 500,
                    textTransform: "none",
                    "&:hover": {
                      color: "primary.main",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                onClick={() => scrollTo("contact")}
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  textTransform: "none",
                }}
              >
                Fale conosco
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
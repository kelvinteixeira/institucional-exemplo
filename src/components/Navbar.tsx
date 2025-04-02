import { useState } from "react";
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.querySelector("nav")?.clientHeight || 0;
      const offset =
        element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
      setMobileOpen(false);
    }
  };

  const navItems = [
    { label: "Diferencial", id: "features" },
    { label: "Desenvolvimento", id: "howitworks" },
    { label: "Quem somos", id: "aboutme" },
    { label: "Depoimentos", id: "customers" },
    { label: "Dúvidas", id: "faq" },
    { label: "Fale conosco", id: "contact", isHighlighted: true },
  ];

  const drawer = (
    <Box
      sx={{
        width: 250,
        backgroundColor: "#010619",
        height: "100%",
        py: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          px: 2,
        }}
      >
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              onClick={() => scrollTo(item.id)}
              sx={{
                color: item.isHighlighted
                  ? theme.palette.primary.main
                  : "white",
                fontWeight: item.isHighlighted ? 600 : 500,
                py: 1.5,
                px: 3,
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{
        backgroundColor: "#010619",
        backdropFilter: "blur(10px)",
        borderBottom: "2px solid #9336be",
        boxShadow: "none",
        py: 1,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 0, md: 2 },
            width: "100%",
          }}
        >
          <Button onClick={() => scrollTo("home")} sx={{ p: 0 }}>
            <img
              src="/images/codevibeLogo.png"
              alt="CodeVibe Logo"
              style={{
                height: isMobile ? 50 : 100,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          </Button>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                color: "white",
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          ) : (
            <Box sx={{}}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  sx={{
                    color: item.isHighlighted
                      ? theme.palette.primary.main
                      : "white",
                    fontWeight: item.isHighlighted ? 600 : 500,
                    textTransform: "none",
                    fontSize: "1rem",
                    minWidth: "auto",
                    px: 1.5,
                    "&:hover": {
                      color: theme.palette.primary.main,
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            backgroundColor: "rgba(1, 6, 25, 0.95)",
            backdropFilter: "blur(10px)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

import { Box } from "@mui/material";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { Features } from "../components/Features";
import { HowItWorks } from "../components/HowItWorks";
import { Customers } from "../components/Customers";
import { FAQ } from "../components/FAQ";
import { Contact } from "../components/Contact";
import { WhatsAppFloatButton } from "../components/Whastapp";
import { AboutMe } from "../components/AboutMe";

export const HomePage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <AboutMe />
      <Customers />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloatButton />
    </Box>
  );
};

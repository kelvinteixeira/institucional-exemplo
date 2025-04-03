import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  MobileStepper,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

interface Step {
  title: string;
  description: string;
}

export const HowItWorks = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeStep, setActiveStep] = useState<number>(0);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);

  const steps: Step[] = [
    {
      title: "Conversa Inicial",
      description:
        "Mande uma mensagem — vamos entender suas necessidades e objetivos.",
    },
    {
      title: "Proposta Personalizada",
      description:
        "Receba um orçamento transparente com prazos, tecnologias e etapas do projeto.",
    },
    {
      title: "Desenvolvimento Sob Medida",
      description:
        "Mãos à obra! Desenvolvemos seu site com atualizações semanais do progresso.",
    },
    {
      title: "Entrega & Suporte",
      description:
        "Site no ar + treinamento para gerenciá-lo. E suporte contínuo para ajustes!",
    },
  ];

  const maxSteps: number = steps.length;

  const handleNext = (): void => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    setAutoPlay(false);
  };

  const handleBack = (): void => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
    setAutoPlay(false);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (autoPlay && isMobile) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % maxSteps);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, isMobile, maxSteps]);
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
          Como Funciona
        </Typography>

        {isMobile ? (
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                minHeight: 300,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#010619a4",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.712)",
                  borderRadius: 3,
                  p: 4,
                  width: "90%",
                  maxWidth: 400,
                  textAlign: "center",
                  transition: "all 0.5s ease",
                  boxShadow: theme.shadows[10],
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 2,
                }}
              >
                <Typography
                  variant="h2"
                  color="primary"
                  sx={{
                    mb: 2,
                    fontSize: "3rem",
                  }}
                >
                  {activeStep + 1}
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    mb: 1.5,
                    fontSize: "1.5rem",
                  }}
                >
                  {steps[activeStep].title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "1rem",
                    lineHeight: 1.6,
                  }}
                >
                  {steps[activeStep].description}
                </Typography>
              </Box>

              <IconButton
                onClick={handleBack}
                sx={{
                  position: "absolute",
                  left: 8,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 3,
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                  },
                }}
              >
                <KeyboardArrowLeft fontSize="large" />
              </IconButton>

              <IconButton
                onClick={handleNext}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 3,
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                  },
                }}
              >
                <KeyboardArrowRight fontSize="large" />
              </IconButton>
            </Box>

            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              sx={{
                justifyContent: "center",
                backgroundColor: "transparent",
                mt: 4,
                "& .MuiMobileStepper-dot": {
                  backgroundColor: "rgba(255,255,255,0.4)",
                  "&.MuiMobileStepper-dotActive": {
                    backgroundColor: theme.palette.primary.main,
                  },
                },
              }}
              nextButton={null}
              backButton={null}
            />
          </Box>
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: { xs: 2, sm: 3, md: 4 },
            }}
          >
            {steps.map((step, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: "#010619a4",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.712)",
                  borderRadius: 3,
                  p: { xs: 2.5, sm: 3 },
                  height: "100%",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    borderColor: theme.palette.primary.main,
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                <Typography
                  variant="h2"
                  color="primary"
                  sx={{
                    mb: { xs: 1, sm: 2 },
                    fontSize: { xs: "2.5rem", sm: "3rem" },
                  }}
                >
                  {index + 1}
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    mb: { xs: 1, sm: 1.5 },
                    fontSize: { xs: "1.25rem", sm: "1.5rem" },
                  }}
                >
                  {step.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                    lineHeight: 1.6,
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
};

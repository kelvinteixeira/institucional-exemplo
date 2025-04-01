import { styled, keyframes } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Tooltip from "@mui/material/Tooltip";
import { useWhatsApp } from "../hooks/Whatsapp";

// Animação de pulso
const pulse = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
`;

const FloatingButton = styled("div")({
  position: "fixed",
  bottom: "30px",
  right: "30px",
  zIndex: 1000,
});

const PulseButton = styled(IconButton)({
  backgroundColor: "#25D366",
  color: "white",
  width: "60px",
  height: "60px",
  animation: `${pulse} 2s infinite`,
  "&:hover": {
    backgroundColor: "#128C7E",
  },
  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
});

export const WhatsAppFloatButton = () => {
  const { onClick } = useWhatsApp();

  return (
    <FloatingButton>
      <Tooltip title="Fale conosco" placement="left" arrow>
        <PulseButton onClick={() => onClick()} aria-label="WhatsApp">
          <WhatsAppIcon sx={{ fontSize: 32 }} />
        </PulseButton>
      </Tooltip>
    </FloatingButton>
  );
};

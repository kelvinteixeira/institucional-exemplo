import { ExpandMore } from "@mui/icons-material";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Grid,
  Paper,
  Chip,
  useTheme,
} from "@mui/material";
import { useState } from "react";
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

const slideFromTop = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
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

export const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const theme = useTheme();
  
  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      id="faq"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        backgroundImage: "url(/images/bg7.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(1, 6, 25, 0.7)",
        backgroundBlendMode: "overlay",
        transform: "scaleX(-1)",
        "& > *": {
          transform: "scaleX(-1)",
        },
      }}
    >
      <Container maxWidth="md">
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
            Perguntas Frequentes
          </Typography>
        </motion.div>

        <Box
          component={motion.div}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            {
              question: "Quanto tempo leva para desenvolver meu site?",
              answer: (
                <Box>
                  <Typography paragraph sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                    O prazo varia conforme a complexidade:
                  </Typography>
                  <List dense sx={{ listStyleType: 'disc', pl: { xs: 3, sm: 4 }, mb: 2 }}>
                    {[
                      { primary: "Landing pages:", secondary: "1 a 14 dias" },
                      { primary: "Sites institucionais:", secondary: "1 a 3 semanas" },
                      { primary: "E-commerces:", secondary: "3 a 6 semanas" },
                    ].map((item, index) => (
                      <ListItem key={index} sx={{ display: 'list-item', py: 0 }}>
                        <ListItemText 
                          primary={<strong>{item.primary}</strong>} 
                          secondary={item.secondary}
                          primaryTypographyProps={{ fontSize: { xs: '0.9rem', sm: '0.95rem' } }}
                          secondaryTypographyProps={{ fontSize: { xs: '0.85rem', sm: '0.9rem' } }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                    Garantimos um cronograma claro desde a primeira reunião, com
                    entregas parciais semanais para seu acompanhamento.
                  </Typography>
                </Box>
              ),
            },
            {
              question: "Quais tecnologias vocês usam? Meu site ficará lento?",
              answer: (
                <Box>
                  <Typography paragraph sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                    Utilizamos stacks modernas e otimizadas para cada camada do projeto:
                  </Typography>

                  <Grid container spacing={{ xs: 1, sm: 2 }} sx={{ mb: 2 }}>
                    {/* Front-end */}
                    <Grid item xs={12} sm={6} md={4}>
                      <Paper elevation={0} sx={{ 
                        p: { xs: 1.5, sm: 2 }, 
                        bgcolor: 'rgba(0, 119, 204, 0.1)',
                        height: '100%'
                      }}>
                        <Typography variant="h6" color="primary" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                          Front-end
                        </Typography>
                        <List dense>
                          {['React/Next.js', 'TypeScript', 'Material UI', 'Framer motion para animações'].map((tech) => (
                            <ListItem key={tech} sx={{ py: 0 }}>
                              <ListItemText 
                                primary={tech} 
                                primaryTypographyProps={{ fontSize: { xs: '0.85rem', sm: '0.9rem' } }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Paper>
                    </Grid>

                    {/* Back-end & APIs */}
                    <Grid item xs={12} sm={6} md={4}>
                      <Paper elevation={0} sx={{ 
                        p: { xs: 1.5, sm: 2 },
                        bgcolor: 'rgba(46, 125, 50, 0.1)',
                        height: '100%'
                      }}>
                        <Typography variant="h6" color="success.main" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                          Back-end & APIs
                        </Typography>
                        <List dense>
                          {['Node.js/NestJS', 'Python/Django', 'GraphQL/REST', 'WebSockets'].map((tech) => (
                            <ListItem key={tech} sx={{ py: 0 }}>
                              <ListItemText 
                                primary={tech} 
                                primaryTypographyProps={{ fontSize: { xs: '0.85rem', sm: '0.9rem' } }}
                              />
                            </ListItem>
                          ))}
                          <ListItem sx={{ py: 0 }}>
                            <ListItemText 
                              primary="Integração com:" 
                              primaryTypographyProps={{ fontSize: { xs: '0.85rem', sm: '0.9rem' } }}
                              secondary={
                                <List dense>
                                  {['Pagamentos (Stripe, PayPal)', 'SMTP (SendGrid, Mailchimp)', 'Redes Sociais'].map((item) => (
                                    <ListItem key={item} sx={{ py: 0 }}>
                                      <ListItemText 
                                        primary={item} 
                                        primaryTypographyProps={{ fontSize: { xs: '0.8rem', sm: '0.85rem' } }}
                                      />
                                    </ListItem>
                                  ))}
                                </List>
                              } 
                            />
                          </ListItem>
                        </List>
                      </Paper>
                    </Grid>

                    {/* Bancos de Dados */}
                    <Grid item xs={12} sm={6} md={4}>
                      <Paper elevation={0} sx={{ 
                        p: { xs: 1.5, sm: 2 },
                        bgcolor: 'rgba(198, 40, 40, 0.1)',
                        height: '100%'
                      }}>
                        <Typography variant="h6" color="error.main" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                          Bancos de Dados
                        </Typography>
                        <List dense>
                          {['PostgreSQL', 'MongoDB', 'Firebase'].map((tech) => (
                            <ListItem key={tech} sx={{ py: 0 }}>
                              <ListItemText 
                                primary={tech} 
                                primaryTypographyProps={{ fontSize: { xs: '0.85rem', sm: '0.9rem' } }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Paper>
                    </Grid>
                  </Grid>

                  <Typography paragraph sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                    Todos os sites passam por nosso processo de otimização:
                  </Typography>

                  <List dense sx={{ mb: 2 }}>
                    {[
                      "Otimização de imagens (WebP/AVIF)",
                      "Lazy loading",
                      "CDN global (Cloudflare, Vercel Edge)",
                      "Testes de velocidade (Google PageSpeed, WebPageTest)",
                    ].map((item) => (
                      <ListItem key={item} sx={{ py: 0 }}>
                        <ListItemText 
                          primary={
                            <>
                              <Chip label="✓" size="small" color="success" sx={{ mr: 1, fontSize: '0.75rem' }} />
                              {item}
                            </>
                          } 
                          primaryTypographyProps={{ 
                            sx: { display: 'flex', alignItems: 'center' },
                            fontSize: { xs: '0.85rem', sm: '0.9rem' }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  <Paper elevation={0} sx={{ 
                    p: { xs: 1.5, sm: 2 },
                    bgcolor: '#45357e99', 
                    borderRadius: 2 
                  }}>
                    <Typography fontWeight="bold" sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                      Resultado garantido: 
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem' } }}>
                      Carregamento em menos de 2s na média e scores acima de 90 no PageSpeed Insights.
                    </Typography>
                  </Paper>
                </Box>
              ),
            },
            {
              question: "Posso atualizar o conteúdo depois sem saber programar?",
              answer: (
                <Box>
                  <Typography paragraph sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>Sim! Entregamos:</Typography>
                  <List dense sx={{ listStyleType: 'disc', pl: { xs: 3, sm: 4 }, mb: 2 }}>
                    {[
                      "Painel administrativo intuitivo (você edita textos, fotos e produtos)",
                      "Vídeo-tutorial personalizado",
                      "Suporte 30 dias gratuito para treinamento",
                    ].map((item, index) => (
                      <ListItem key={index} sx={{ display: 'list-item', py: 0 }}>
                        <ListItemText 
                          primary={item} 
                          primaryTypographyProps={{ fontSize: { xs: '0.9rem', sm: '0.95rem' } }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                    Para e-commerces: você gerencia estoque, cupons e pagamentos sozinho(a).
                  </Typography>
                </Box>
              )
            },
            {
              question: "Meus dados estão seguros?",
              answer: (
                <Box>
                  <Typography paragraph sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                    Absolutamente. A segurança dos seus dados é nossa prioridade máxima. Nossas soluções seguem rigorosamente a <strong>Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018)</strong>, garantindo:
                  </Typography>
                  
                  <List dense sx={{ listStyleType: 'disc', pl: { xs: 3, sm: 4 }, mb: 2 }}>
                    {[
                      "Tratamento ético e transparente de dados pessoais",
                      "Coleta e processamento apenas com finalidades específicas e consentimento",
                      "Armazenamento em servidores com criptografia avançada",
                      "Procedimentos para acesso, retificação ou exclusão de dados conforme direitos do titular",
                    ].map((item, index) => (
                      <ListItem key={index} sx={{ display: 'list-item', py: 0 }}>
                        <ListItemText 
                          primary={item} 
                          primaryTypographyProps={{ fontSize: { xs: '0.9rem', sm: '0.95rem' } }}
                        />
                      </ListItem>
                    ))}
                  </List>
            
                  <Typography paragraph sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                    Adotamos medidas técnicas e organizacionais comprovadas, incluindo:
                  </Typography>
                  
                  <List dense sx={{ listStyleType: 'disc', pl: { xs: 3, sm: 4 }, mb: 2 }}>
                    {[
                      "Certificados SSL/TLS para todas as transações",
                      "Backups diários e redundância de dados",
                      "Política de acesso restrito e autenticação multifator",
                    ].map((item, index) => (
                      <ListItem key={index} sx={{ display: 'list-item', py: 0 }}>
                        <ListItemText 
                          primary={item} 
                          primaryTypographyProps={{ fontSize: { xs: '0.9rem', sm: '0.95rem' } }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={slideFromTop}
              transition={{ delay: index * 0.2 }}
            >
              <Accordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  backgroundColor: "#010619a4",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.712)",
                  color: "white",
                  mb: 2,
                  '&:hover': {
                    borderColor: theme.palette.primary.main
                  }
                }}
              >
                <AccordionSummary 
                  expandIcon={<ExpandMore sx={{ color: "white" }} />}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      alignItems: 'center'
                    }
                  }}
                >
                  <Typography fontWeight={600} sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {item.answer}
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
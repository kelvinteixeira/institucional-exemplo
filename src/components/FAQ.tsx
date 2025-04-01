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
} from "@mui/material";
import { useState } from "react";

export const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  
  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      id="faq"
      sx={{
        py: 10,
        backgroundImage: "url(/images/bg7.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: "scaleX(-1)",
        "& > *": {
          transform: "scaleX(-1)",
        },
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 700,
            mb: 8,
            textShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          Perguntas Frequentes
        </Typography>

        {[
          {
            question: "Quanto tempo leva para desenvolver meu site?",
            answer: (
              <Box>
                <Typography paragraph>O prazo varia conforme a complexidade:</Typography>
                <List dense sx={{ listStyleType: 'disc', pl: 4, mb: 2 }}>
                  {[
                    { primary: "Landing pages:", secondary: "7 a 14 dias" },
                    { primary: "Sites institucionais:", secondary: "3 a 6 semanas" },
                    { primary: "E-commerces:", secondary: "4 a 8 semanas" },
                  ].map((item, index) => (
                    <ListItem key={index} sx={{ display: 'list-item', py: 0 }}>
                      <ListItemText 
                        primary={<strong>{item.primary}</strong>} 
                        secondary={item.secondary} 
                      />
                    </ListItem>
                  ))}
                </List>
                <Typography>
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
                <Typography paragraph>
                  Utilizamos stacks modernas e otimizadas para cada camada do projeto:
                </Typography>

                <Grid container spacing={2} sx={{ mb: 2 }}>
                  {/* Front-end */}
                  <Grid item xs={12} md={4}>
                    <Paper elevation={0} sx={{ p: 2, bgcolor: 'rgba(0, 119, 204, 0.1)' }}>
                      <Typography variant="h6" color="primary" gutterBottom>
                        Front-end
                      </Typography>
                      <List dense>
                        {['React/Next.js', 'TypeScript', 'Tailwind CSS/MUI', 'GSAP para animações'].map((tech) => (
                          <ListItem key={tech} sx={{ py: 0 }}>
                            <ListItemText primary={tech} />
                          </ListItem>
                        ))}
                      </List>
                    </Paper>
                  </Grid>

                  {/* Back-end & APIs */}
                  <Grid item xs={12} md={4}>
                    <Paper elevation={0} sx={{ p: 2, bgcolor: 'rgba(46, 125, 50, 0.1)' }}>
                      <Typography variant="h6" color="success.main" gutterBottom>
                        Back-end & APIs
                      </Typography>
                      <List dense>
                        {['Node.js/NestJS', 'Python/Django', 'GraphQL/REST', 'WebSockets'].map((tech) => (
                          <ListItem key={tech} sx={{ py: 0 }}>
                            <ListItemText primary={tech} />
                          </ListItem>
                        ))}
                        <ListItem sx={{ py: 0 }}>
                          <ListItemText 
                            primary="Integração com:" 
                            secondary={
                              <List dense>
                                {['Pagamentos (Stripe, PayPal)', 'SMTP (SendGrid, Mailchimp)', 'Redes Sociais'].map((item) => (
                                  <ListItem key={item} sx={{ py: 0 }}>
                                    <ListItemText primary={item} />
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
                  <Grid item xs={12} md={4}>
                    <Paper elevation={0} sx={{ p: 2, bgcolor: 'rgba(198, 40, 40, 0.1)' }}>
                      <Typography variant="h6" color="error.main" gutterBottom>
                        Bancos de Dados
                      </Typography>
                      <List dense>
                        {['PostgreSQL', 'MongoDB', 'Firebase', 'Redis (cache)'].map((tech) => (
                          <ListItem key={tech} sx={{ py: 0 }}>
                            <ListItemText primary={tech} />
                          </ListItem>
                        ))}
                      </List>
                    </Paper>
                  </Grid>
                </Grid>

                <Typography paragraph>
                  Todos os sites passam por nosso processo de otimização:
                </Typography>

                <List dense sx={{ mb: 2 }}>
                  {[
                    "Otimização de imagens (WebP/AVIF)",
                    "Minificação de código (Terser, CSSNano)",
                    "Lazy loading",
                    "CDN global (Cloudflare, Vercel Edge)",
                    "Testes de velocidade (Google PageSpeed, WebPageTest)",
                  ].map((item) => (
                    <ListItem key={item} sx={{ py: 0 }}>
                      <ListItemText 
                        primary={item} 
                        primaryTypographyProps={{ sx: { display: 'flex', alignItems: 'center' } }}
                      >
                        <Chip label="✓" size="small" color="success" sx={{ mr: 1 }} />
                        {item}
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>

                <Paper elevation={0} sx={{ p: 2, bgcolor: '#45357e99', borderRadius: 2 }}>
                  <Typography fontWeight="bold">
                    Resultado garantido: 
                  </Typography>
                  <Typography>
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
                <Typography paragraph>Sim! Entregamos:</Typography>
                <List dense sx={{ listStyleType: 'disc', pl: 4, mb: 2 }}>
                  {[
                    "Painel administrativo intuitivo (você edita textos, fotos e produtos)",
                    "Vídeo-tutorial personalizado",
                    "Suporte 30 dias gratuito para treinamento",
                  ].map((item, index) => (
                    <ListItem key={index} sx={{ display: 'list-item', py: 0 }}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
                <Typography>
                  Para e-commerces: você gerencia estoque, cupons e pagamentos sozinho(a).
                </Typography>
              </Box>
            )
          },
          {
            question: "Meus dados estão seguros?",
            answer: (
              <Box>
                <Typography paragraph>
                  Absolutamente. A segurança dos seus dados é nossa prioridade máxima. Nossas soluções seguem rigorosamente a <strong>Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018)</strong>, garantindo:
                </Typography>
                
                <List dense sx={{ listStyleType: 'disc', pl: 4, mb: 2 }}>
                  {[
                    "Tratamento ético e transparente de dados pessoais",
                    "Coleta e processamento apenas com finalidades específicas e consentimento",
                    "Armazenamento em servidores com criptografia avançada",
                    "Procedimentos para acesso, retificação ou exclusão de dados conforme direitos do titular",
                  ].map((item, index) => (
                    <ListItem key={index} sx={{ display: 'list-item', py: 0 }}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
          
                <Typography paragraph>
                  Adotamos medidas técnicas e organizacionais comprovadas, incluindo:
                </Typography>
                
                <List dense sx={{ listStyleType: 'disc', pl: 4, mb: 2 }}>
                  {[
                    "Certificados SSL/TLS para todas as transações",
                    "Backups diários e redundância de dados",
                    "Política de acesso restrito e autenticação multifator",
                  ].map((item, index) => (
                    <ListItem key={index} sx={{ display: 'list-item', py: 0 }}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            )
          }
        ].map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              backgroundColor: "#010619a4",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.712)",
              color: "white",
              mb: 2,
            }}
          >
            <AccordionSummary expandIcon={<ExpandMore sx={{ color: "white" }} />}>
              <Typography fontWeight={600}>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {item.answer}
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};
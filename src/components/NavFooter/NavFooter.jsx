// Footer.jsx
import React from 'react';
import './NavFooter.css';
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import {TbPhone} from "react-icons/tb";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
      !isMobile ? (
          <footer className="footer">
              <Grid size={12} container display={'flex'} alignItems={'center'}>
                  <Grid size={4}>
                      <div className={"footer left"}>&copy; 2025 Apexim BIS sp. z o.o.</div>
                  </Grid>
                  <Grid size={4}>
                      <div className={"footer middle"}>
                          <Box sx={{mt: 0.5, width: '40%'}}>
                              <Button component={Link}
                                      to="/contact?open=3"
                                      variant="contained"
                                      startIcon={<TbPhone/>} sx={{
                                  backgroundColor: '#0591c6',
                                  '&:hover': {backgroundColor: '#0477a2'}
                              }}>Skontaktuj się z nami
                              </Button>
                          </Box>
                      </div>
                  </Grid>
                  <Grid size={4}>
                      <div className={"footer right"}>
                          <Typography sx={{pr: '10px'}}>NIP: 973-06-58-521<br/>Regon: 971249928</Typography>
                      </div>
                  </Grid>
              </Grid>
          </footer>
      ) : (
          <></>
      )

  );
};

export default Footer;

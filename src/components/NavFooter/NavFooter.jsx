// Footer.jsx
import React from 'react';
import './NavFooter.css';
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import {TbMail, TbPhone} from "react-icons/tb";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <footer className="footer">
        <div className={"footer.left"}>&copy; 2025 Apexim BIS sp. z o.o.</div>
        <div className={"footer.middle"}><Box sx={{ mt: 3 }}><Button component={Link} to="/contact?open=3" variant="contained" startIcon={<TbPhone />} sx={{ backgroundColor: '#0591c6', '&:hover': { backgroundColor: '#0477a2' } }}>Skontaktuj się z nami</Button></Box></div>
        <div className={"footer.right"}> NIP: 973-06-58-521<br/>
            Regon: 971249928 </div>
    </footer>
  );
};

export default Footer;

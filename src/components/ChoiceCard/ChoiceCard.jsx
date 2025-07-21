// src/components/ChoiceCard/ChoiceCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './ChoiceCard.css';

const ChoiceCard = ({ to, backgroundImage, logo, title, customClassName = '' }) => {

    const isExternal = to && (to.startsWith('http') || to.startsWith('//'));

    // Na podstawie wyniku wybieramy odpowiedni komponent do renderowania
    const CardComponent = isExternal ? 'a' : Link;

    // Przygotowujemy odpowiednie propsy dla wybranego komponentu
    const linkProps = isExternal
        ? { href: to, target: '_blank', rel: 'noopener noreferrer' } // Dla linku zewnętrznego `<a>`
        : { to: to };
    // <<< DODAJEMY customClassName
    return (
        <Card
            component={Link}
            to={to}
            className={`choice-mui-card ${customClassName}`} // <<< UŻYWAMY customClassName
        >
            <CardMedia
                image={backgroundImage}
                className="choice-card-media"
            />
            <CardContent className="choice-card-content">
                <div className="choice-logo-wrapper">
                    <img src={logo} alt={title} className="choice-logo-image" />
                </div>
                <Typography
                    variant="h4"
                    component="h2"
                    className="choice-title"
                >
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ChoiceCard;
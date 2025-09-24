// src/components/ContactCard/ContactList.jsx

import React from 'react';
import ContactCard from './ContactCard';
import { columnsData } from './ContactData';
import { Grid } from '@mui/material';

function ContactList({ departmentIdToOpen }) {
    const allDepartments = columnsData.flat();

    // Define base and incremental delay for the stagger effect (in milliseconds).
    const BASE_DELAY = 400;
    const STAGGER_DELAY = 350;
    return (
        <Grid container spacing={3}>
            {allDepartments.map((dept, index) => {
                // Calculate the specific timeout for this card's entrance animation.
                const animationTimeout = BASE_DELAY + index * STAGGER_DELAY;

                return (
                    // The Grid item props remain the same, handling the responsive layout.
                    <Grid key={dept.id} size={{xs:12, md:4}}>
                        <ContactCard
                            department={dept}
                            isOpenedFromUrl={dept.id == departmentIdToOpen}
                            // Pass the calculated timeout to the card component.
                            animationTimeout={animationTimeout}
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default ContactList;
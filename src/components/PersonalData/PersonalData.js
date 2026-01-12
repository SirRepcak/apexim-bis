// src/components/PersonalData/PersonalData.js

import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    Typography,
    Box
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

/**
 * A dialog component that displays the company's RODO information clause.
 * It is controlled by the parent PersonalData component.
 */
const PersonalDataDialog = ({ open, handleClose }) => {
    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="personal-data-dialog-title"
            open={open}
            scroll="paper"
            maxWidth="md" // Use a medium width for better readability
            disableRestoreFocus // Fixes the aria-hidden accessibility warning on close
        >
            <DialogTitle id="personal-data-dialog-title" sx={{ m: 0, p: 2 }}>
                Klauzula informacyjna RODO
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom sx={{ mb: 2 }}>
                    Zgodnie z art. 13 ogólnego rozporządzenia o ochronie danych osobowych z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (dalej) RODO informuję, że:
                </Typography>

                {/* Using an ordered list for structured, numbered content */}
                <Box component="ol" sx={{ pl: 2, listStylePosition: 'outside' }}>
                    <Typography component="li" sx={{ pl: 1, mb: 1.5 }}>
                        administratorem Pani/Pana danych osobowych jest Apexim BIS Sp. z o. o. z siedzibą w Zielonej Górze, ul. Lwowska 25;
                    </Typography>
                    <Typography component="li" sx={{ pl: 1, mb: 1.5 }}>
                        kontakt z Inspektorem Ochrony Danych Osobowych możliwy jest pod numerem tel. nr 600399046 lub adresem email iod@apexim-bis.com.pl;
                    </Typography>
                    <Typography component="li" sx={{ pl: 1, mb: 1.5 }}>
                        Pani/Pana dane osobowe przetwarzane będą na podstawie Art. 6 ust. 1 lit. f ogólnego rozporządzenia o ochronie danych osobowych z dnia 27 kwietnia 2016 r.;
                    </Typography>
                    <Typography component="li" sx={{ pl: 1, mb: 1.5 }}>
                        odbiorcami Pana/Pani danych osobowych mogą być dostawcy usług i produktów działających na rzecz Administratora, w szczególności usługi IT, księgowe, transportowe, serwisowe, agencyjne;
                    </Typography>
                    <Typography component="li" sx={{ pl: 1, mb: 1.5 }}>
                        Pana/Pani dane osobowe przechowywane będą przez okres wynikający z powszechnie obowiązujących przepisów prawa oraz przez czas niezbędny do dochodzenia roszczeń;
                    </Typography>
                    <Typography component="li" sx={{ pl: 1, mb: 1.5 }}>
                        posiada Pani/Pan prawo do żądania:
                        <Box component="ul" sx={{ pl: 2, mt: 1, listStyleType: 'disc' }}>
                            <li>od administratora dostępu do danych osobowych,</li>
                            <li>ich sprostowania,</li>
                            <li>usunięcia,</li>
                            <li>ograniczenia przetwarzania,</li>
                            <li>wniesienia sprzeciwu wobec przetwarzania,</li>
                            <li>przenoszenia danych,</li>
                            <li>cofnięcia zgody w dowolnym momencie;</li>
                        </Box>
                    </Typography>
                    <Typography component="li" sx={{ pl: 1, mb: 1.5 }}>
                        realizacja w/w praw może odbywać się poprzez wskazanie i przesłanie żądań do IOD na adres iod@apexim-bis.com.pl;
                    </Typography>
                    <Typography component="li" sx={{ pl: 1, mb: 1.5 }}>
                        ma Pan/Pani prawo wniesienia skargi do organu nadzorczego gdy uzna Pani/Pan iż przetwarzanie danych osobowych narusza RODO.
                    </Typography>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>
                    Zamknij
                </Button>
            </DialogActions>
        </Dialog>
    );
};

/**
 * A self-contained component that renders a "Klauzula RODO" button
 * and handles the opening/closing of the informational dialog.
 * It accepts MUI `sx` props to allow for external styling.
 */
const PersonalData = (props) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="contained" onClick={handleClickOpen} {...props}>
                Klauzula RODO
            </Button>
            <PersonalDataDialog open={open} handleClose={handleClose} />
        </>
    );
};

export default PersonalData;
import {Box, Grid, Typography} from "@mui/material";
import {ReactNode} from "react";
import "../../index.css"

interface OfferBaseExpandableSectionProps {
    alignment: 'left' | 'right';
    icon: ReactNode;
    title: string;
    text: ReactNode;
    actionButton: ReactNode;
    image: string;
}

export const OfferBaseExpandableSection = (props: OfferBaseExpandableSectionProps) => {
    const {alignment} = props;

    return (
        <Box>
            <Grid container justifyContent={'space-between'} alignItems={'center'}>
                {alignment === 'left' && (
                    <>
                        <Grid size={{xs: 12, md: 6}} pr={1}>
                            <MainSection {...props} />
                        </Grid>
                        <Grid size={{xs: 12, md: 6}} pl={1}>
                            <ImageSection {...props} />
                        </Grid>
                    </>
                )}
                {alignment === 'right' && (
                    <>
                        <Grid size={{xs: 12, md: 6}} pr={1}>
                            <ImageSection {...props} />

                        </Grid>
                        <Grid size={{xs: 12, md: 6}} pl={1}>
                            <MainSection {...props} />
                        </Grid>
                    </>
                )}
            </Grid>
        </Box>
    )
}

interface MainSectionProps extends Pick<OfferBaseExpandableSectionProps, 'title' | 'text' | 'icon' | 'actionButton'> {
}

const MainSection = (props: MainSectionProps) => {
    const {title, text, icon, actionButton} = props;
    return (
        <Grid container>
            <Grid container alignItems={'center'}>
                <Grid size={{ xs: 12, md: 2 }}>
                    <Box sx={{
                        fontSize: '3rem',
                        mr: '20px',
                        color: '#0591c6',
                    }}>
                        {icon}
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 10 }}>
                    <Typography variant={'h2'} color={'#0591c6'} fontSize={'2rem'}
                                fontWeight={'bold'}>{title}</Typography>
                </Grid>
                <Grid>
                    {actionButton}
                </Grid>
            </Grid>
            <Grid sx={{pt: 2}}>
                <Typography sx={{lineHeight: '1.6', textAlign: 'justify'}}>{text}</Typography>
            </Grid>
        </Grid>
    )
}

interface ImageSectionProps extends Pick<OfferBaseExpandableSectionProps, 'image' | 'title'> {
}

const ImageSection = (props: ImageSectionProps) => {
    const {image, title} = props;

    return (
        <Box sx={{
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            transformOrigin: 'top left',
            width: '100%',
        }}>
            <img src={image} alt={`${title}-section-image`} style={{
                width: '100%',
                height: '100%',
                maxHeight: '400px',
                objectFit: 'cover',
                borderRadius: '8px'
            }}/>
        </Box>
    )
}




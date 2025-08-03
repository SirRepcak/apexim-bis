import Header from "../../components/NavHeader/NavHeader";
import OfferNavigation from "../../components/OfferNavigation/OfferNavigation";
import {TbClipboardCheck} from "react-icons/tb";
import {OfferBaseExpandableSection} from "./OfferBaseExpandableSection";
import offerTexts from './offerTexts';
import {Box} from "@mui/material";
import investmentsImage from '../../assets/image-desk.jpg';

export const OfferV2 = () => {

    return (
        <div className="app">
            <Header/>
            <div className="blank-divider"></div>
            <OfferNavigation/>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '40px',
                padding: '0 20px',
                margin: '40px auto 0',
                maxWidth: '90%'
            }}>
                <div id="investments" className="content-section-anchor">
                    <OfferBaseExpandableSection
                        alignment={"left"} icon={<TbClipboardCheck />}
                        title={offerTexts.investments.sectionTitle}
                        text={offerTexts.investments.sectionParagraph}
                        actionButton={<></>}
                        image={investmentsImage}
                    />
                </div>
            </Box>

        </div>
    )
}
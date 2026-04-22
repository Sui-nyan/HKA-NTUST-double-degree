import {Box} from "@mui/system";
import {Button, Container, Link, Typography} from "@mui/material";
import {InfoCard} from "@/app/components/InfoCard";
import localeData from "./locales/en.json";
import type { CourseSelectionLocale } from "../../lib/types";

const locale = localeData as unknown as CourseSelectionLocale;

export default function ResidencyPage() {
    const cards = locale.infoCards ?? [];

    return (
        <Box>
            <Typography variant="h1">{locale.pageTitle ?? 'ARC-Antrag'}</Typography>
            <Typography variant={"body2"}>
                        Nach dem ihr die ersten vier Steps eurer Registrierung durchgeführt habt, bekommt ihr ein
                        Certificate of Enrollment. Mit diesem Dokument könnt ihr nun die Applikation für Residency
                        ausfüllen.</Typography>
            <Container className="gap-4 flex flex-col">
                {cards.map((c, i) => (
                    <InfoCard key={i} title={c.title} description={c.description} />
                ))}
                <Box>
                    <Button variant="contained"><Link
                        href={"https://coa.immigration.gov.tw/coa-frontend/foreign-student/individual/login?verify=true"}>Zum ARC Antrag für Studenten</Link></Button>
                </Box>
            </Container>
        </Box>
    );
}

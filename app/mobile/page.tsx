import {Box} from "@mui/system";
import {Container, Typography} from "@mui/material";
import {InfoCard} from "@/app/components/InfoCard";
import localeData from "./locales/en.json";
import type { CourseSelectionLocale } from "../../lib/types";

const locale = localeData as unknown as CourseSelectionLocale;

export default function MobilePage() {
    const cards = locale.infoCards ?? [];

    return (
        <Box>
            <Typography variant="h1">{locale.pageTitle ?? 'Getting a Sim-Card'}</Typography>
            <Container className="gap-4 flex flex-col">
                {cards.map((c, i) => (
                    <InfoCard key={i} title={c.title} description={c.description} />
                ))}
            </Container>
        </Box>
    );
}

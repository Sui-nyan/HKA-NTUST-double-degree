import {Box} from "@mui/system";
import {Card, Container, Typography} from "@mui/material";
import {InfoCard} from "@/app/components/InfoCard";
import localeData from "./locales/en.json";
import type { CourseSelectionLocale } from "../../lib/types";

const locale = localeData as unknown as CourseSelectionLocale;

export default function TransportPage() {
    const cards = locale.infoCards ?? [];

    return (
        <Box>
            <Typography variant="h1">{locale.pageTitle ?? 'Public Transportation in Taiwan'}</Typography>
            <Container className="gap-4 flex flex-col">
                {cards.map((c, i) => (
                    <InfoCard key={i} title={c.title} description={c.description} />
                ))}
            </Container>
        </Box>
    );
}

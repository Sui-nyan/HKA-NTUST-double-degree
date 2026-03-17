import {Box, Container} from "@mui/system";
import {Typography} from "@mui/material";
import {Timeline} from "@mui/lab";
import timelineData from './locales/de.json';
import TimelineContentCard from './TimelineContentCard';
import {TimelineEntry} from './types';

export default function TimelinePage() {
    const entries: TimelineEntry[] = timelineData;

    return (
        <Box className="flex flex-col items-center gap-8 bg-[url(../public/maren-wilczek-iiSbeOl24fM-unsplash.jpg)] h-auto bg-cover py-8">
            <Typography variant="h1" className="chewy-regular">From HKA to NTUST</Typography>
            <Container className="flex w-full bg-slate-500/80 rounded-lg max-w-7xl m-x-4 p-8">
                <Timeline position="alternate">
                    {entries.map((entry) => (
                        <TimelineContentCard key={entry.id} entry={entry}/>
                    ))}
                </Timeline>
            </Container>
        </Box>
    );
}
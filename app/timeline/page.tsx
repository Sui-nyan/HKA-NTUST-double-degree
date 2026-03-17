import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import {Timeline} from "@mui/lab";
import timelineData from './locales/de.json';
import TimelineContentCard from './TimelineContentCard';
import {TimelineEntry} from './types';

export default function TimelinePage() {
    const entries: TimelineEntry[] = timelineData;

    return (
        <Box className="flex flex-col items-center gap-8">
            <Typography variant="h1">From Germany to Taiwan: Timeline</Typography>
            <Box className="max-w-2xl">
                <Timeline position="alternate">
                    {entries.map((entry) => (
                        <TimelineContentCard key={entry.id} entry={entry}/>
                    ))}
                </Timeline>
            </Box>
        </Box>
    );
}
import {Box, Container} from "@mui/system";
import {Typography} from "@mui/material";
import {Timeline} from "@mui/lab";
import timelineData from './locales/de.json';
import TimelineContentCard from './TimelineContentCard';
import {TimelineEntry} from './types';

export default function Home() {
    const entries: TimelineEntry[] = timelineData;

    return (
    <Box className="flex flex-col items-center justify-center min-h-screen py-2 bg-[url(../public/timo-volz-9-JFZIORoRw-unsplash.jpg)] h-auto bg-cover">
      <Container className="bg-linear-to-r from-slate-500 to-black-500 bg-opacity-80 rounded-lg p-8">
          <Typography variant={"h1"}>My time in Taipei</Typography>
          <Typography variant={"h3"} className="mt-4">as a HKA-NTUST student</Typography>
      </Container>
      <Box className="flex flex-col items-center gap-8 bg-[url(../public/maren-wilczek-iiSbeOl24fM-unsplash.jpg)] h-auto bg-cover py-8">
            <Typography variant="h1" className="chewy-regular">From HKA to NTUST</Typography>
            <Container className="flex w-full bg-black/70 rounded-lg max-w-7xl m-x-4 p-8">
                <Timeline position="alternate">
                    {entries.map((entry) => (
                        <TimelineContentCard key={entry.id} entry={entry}/>
                    ))}
                </Timeline>
            </Container>
        </Box>
    </Box>
  );
}

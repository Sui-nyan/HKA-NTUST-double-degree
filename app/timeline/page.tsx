import {Box} from "@mui/system";
import {Card, Typography} from "@mui/material";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";

export default function TimelinePage() {
    return (
        <Box className="flex flex-col items-center gap-8">
            <Typography variant="h1">From Germany to Taiwan: Timeline</Typography>
            <Box className="max-w-2xl">
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card>
                                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>One semester before</Typography>
                                <Typography variant="h5">Apply for the program</Typography>
                                <Typography variant="body2">
                                    You can write a mail to andrea.wirth@h-ka.de to state your interest in the program.
                                </Typography>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card>
                                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>1-2 months before</Typography>
                                <Typography variant="h5">Health Check</Typography>
                                <Typography variant="body2">
                                    To apply for the visa in Taiwan a health check is necessary.
                                </Typography>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Box>
        </Box>
    );
}
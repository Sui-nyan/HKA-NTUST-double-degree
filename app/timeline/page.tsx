import {Box} from "@mui/system";
import {Card, Typography} from "@mui/material";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import Link from "next/link";

export default function TimelinePage() {
    return (
        <Box className="flex flex-col items-center gap-8">
            <Typography variant="h1">Double Degree Timeline</Typography>
            <Box className="max-w-2xl">
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card>
                                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Ein Semester davor</Typography>
                                <Typography variant="h5">Anmeldung Double Degree Program</Typography>
                                <Typography variant="body2">
                                    Am besten bei der Infoveranstaltung für den Double Degree teilnehmen oder direkt eine Mail an die Projektverantwortliche Andrea Wirth senden.
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
                                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>1-2 Monate vorher</Typography>
                                <Typography variant="h5">Visa Vorbereitung</Typography>
                                <Typography variant="body2">
                                    Für das Visum muss ein Health Check vorbereitet werden. Anreisende aus Deutschland brauchen eine Untersuchung auf Tuberkulosis, Syphilis-Test, Impfnachweise für Masern, ...
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
                                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>1 Monat vor Abreise</Typography>
                                <Typography variant="h5">Visa-Antrag absenden</Typography>
                                <Typography variant="body2">
                                    Das Konsulat arbeitet sehr schnell und hat das Visum meistens innerhalb von 5 Tagen vorbereitet.
                                    Lass trotzdem am besten ein bisschen Puffer, damit notfalls noch Dokumente nachgesendet werden können.
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
                                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Anreise</Typography>
                                <Typography variant="h5">Flug</Typography>
                                <Typography variant="body2">
                                    Ein direkt Flug von Deutschland nach Taiwan ist beispielsweise über Frankfurt oder München möglich. Über Stuttgart gibt es auch die Möglichkeit mit einem Umstieg zu fliegen.
                                    Da das Vorausbuchen von Flügen nur in den nächsten 10 Monaten möglich ist, müsst ihr vorerst nur den Hinflug buchen.
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
                                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Ankunft</Typography>
                                <Typography variant="h5"><Link href={"/campus-registration"}>Erster Campus Tag</Link></Typography>
                                <Typography variant="body2">
                                    Für die Registration am Campus müssen Studenten zum International Office. Es gibt eine Koordinatorin, die spezifisch für Double Degree Studenten zuständig ist.
                                    Sobald ihr einmal da wart bekommt ihr ein Laufzettel, der in richtiger Reihenfolge ausgefüllt werden muss.
                                    Nach dem ihr die Steps bis 4 durchgemacht habt kann auch der Antrag für die Residency gemacht werden.
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
                                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Ankunft</Typography>
                                <Typography variant="h5"><Link href={"/residency"}>ARC Antrag</Link></Typography>
                                <Typography variant="body2">
                                    Um die Alien Resident Card (ARC) zu bekommen muss zuerst ein Antrag über die Webseite der Immigration Agency beantragt werden.
                                    Eine Kopie der ARC ist außerdem notwendig damit ihr eure Admission vervollständigen könnt und eure Studentenkarte bekommt.
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
                                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Angekommen</Typography>
                                <Typography variant="h5"></Typography>
                                <Typography variant="body2">
                                    Sobald ihr eure Studentenkarte und eure ARC bekommen habt könnt ihr für billigere Preise eine taiwanesische Sim-Karte erhalten.
                                    Außerdem habt ihr jetzt auch die Möglichkeit ein Bankkonto zu eröffnen.
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
                                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>University Life</Typography>
                                <Typography variant="h5"></Typography>
                                <Typography variant="body2">
                                    In den ersten zwei Wochen der Vorlesung gibt es die Möglichkeit Kurse hinzuzufügen oder zu droppen.
                                    Meistens sind die Kurse sehr schnell ausgebucht, es macht also Sinn sich früh einzuschreiben und eventuell später nochmal zu droppen.
                                    Sobald die Add-Drop Phase vorbei ist ist es sehr schwierig noch in Kurse reinzukommen oder diese zu droppen.
                                </Typography>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Box>
        </Box>
    );
}
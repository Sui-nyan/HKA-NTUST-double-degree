import {Box} from "@mui/system";
import {Card, Container, Typography} from "@mui/material";
import {InfoCard} from "@/app/NTUST/course-selection/components/InfoCard";

export default function CourseSelectionPage() {
    return (
        <Box>
            <Typography variant="h1">Course Selection 101</Typography>
            <Container className="gap-4 flex flex-col">
                <InfoCard title="Minimale Anforderung"
                          description={["Die Mindestanzahl für den Master an der NTUST sind 36 credits, aus diesen Credits müssen 24 credits aus dem Fachbereich Information Management kommen (Course ID: MI)."]}/>
                <Card className="rounded-lg p-4">
                    <Typography variant="h3" color="textSecondary">Zusätzliche Information</Typography>
                    <Typography variant="body1">
                        <ul>
                            <li>Sprachkurse können nicht in die 36 credits für den Master angerechnet werden.</li>
                            <li>Kurse mit einem G oder der Zahl von 3 und drunter an der dritten Stelle des Kurscodes
                                sind Undergraduate Kurse, welche nicht kostenfrei sind.
                            </li>
                            <li>Kostenpflichtige Kurse kosten pro Credit des Kurses 3.000 NT$.</li>
                            <li>Es gibt die Möglichkeit auch nach der Course Add/Drop Phase Kurse ab-/anzumelden. Dafür
                                muss ein Zettel ausgefüllt werden der die Unterschrift von deinem Advisor, dem
                                Fakultätsleiter und dem Professor des Kurses beinhaltet. Die Deadline hierfür sind kann
                                beim Administration Office erfragt werden.
                            </li>
                        </ul>
                    </Typography>
                </Card>
            </Container>
        </Box>
    );
}

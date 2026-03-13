import {Box} from "@mui/system";
import {Container, Typography} from "@mui/material";

export default function CourseSelectionPage() {
    return (
        <Box>
            <Typography variant="h1">Course Selection 101</Typography>
            <Container>
                <Container component="div">
                    <Typography variant="h3" color="textSecondary">Minimale Anforderung</Typography>
                    <Typography variant="body1">
                        <ul>
                            <li>Die Mindestanzahl für den Master an der NTUST sind 36 credits,
                                aus diesen Credits müssen 24 credits aus dem Fachbereich Information Management kommen
                                (Course ID: MI).
                            </li>
                            <li>Double Masters&#39; degree Studenten haben die Möglichkeit einmal einen Antrag auf
                                Credit Transfer zu beantragen.
                                Kurse aus der HKA werden dabei auf Kurse der NTUST gemappt.
                            </li>
                            <li>Neben den Kursen muss auch noch der Academic Research Ethics Course erbracht werden.
                            </li>
                            <li>Die Masterthesis wird erst nach dem Kolloqiuum anerkannt.</li>
                        </ul>
                    </Typography>
                </Container>
                <Container component="div">
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
                </Container>
            </Container>
        </Box>
    );
}

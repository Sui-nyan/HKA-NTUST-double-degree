import {Component} from "react";
import {Card, Typography} from "@mui/material";

interface IProps {
    title: string;
    description: string[];
}

export function InfoCard({title, description}: IProps) {
        return <Card className="rounded-lg p-4">
            <Typography variant="h3" color="textSecondary"></Typography>
            <ul>
                <Typography variant="body1">
                    {description.map((item, key) => <li key={key}>{item}</li>)}
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
                </Typography>
            </ul>
        </Card>;
}
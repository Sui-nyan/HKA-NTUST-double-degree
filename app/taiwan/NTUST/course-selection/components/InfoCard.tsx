import {Card, Typography} from "@mui/material";

interface IProps {
    title: string;
    description?: string[];
}

export function InfoCard({title, description}: IProps) {
    return <Card className="rounded-lg p-4">
        <Typography variant="h3" color="textSecondary">{title}</Typography>
        <Typography variant="body1" component="div">
            {description && description.length > 0 ? (
                <ul className="list-disc px-4">
                    {description.map((item, key) => <li key={key}>{item}</li>)}
                </ul>
            ) : (
                <div>No information available.</div>
            )}
        </Typography>
    </Card>;
}
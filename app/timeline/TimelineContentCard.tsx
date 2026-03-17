import {Card, Container, Typography} from "@mui/material";
import {TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import Link from "next/link";
import {TimelineEntry} from "./types";

interface Props {
  entry: TimelineEntry;
}

export default function TimelineContentCard({entry}: Props) {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot className="bg-white" />
        <TimelineConnector className="bg-white" />
      </TimelineSeparator>
      <TimelineContent className="flex flex-col items-start bg-none">
        <Card className="flex flex-col p-4 bg-white/70">
          {entry.dateLabel && (
            <Typography sx={{color: 'text.secondary', mb: 1.5}}>{entry.dateLabel}</Typography>
          )}
          {entry.title ? (
            <Typography variant="h5">{entry.title}</Typography>
          ) : null}
          <Container className="flex pt-4">
              {entry.description && (
              <Typography variant="body2">
                {entry.description.split('\n').map((p, i) => (
                  <span key={i}>
                    {p}
                    {i < entry.description!.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </Typography>
            )}
          </Container>

          {entry.links && entry.links.length > 0 && (
            <Typography variant="body2" className="text-blue-500 underline p-4" sx={{mt: 1}}>
              {entry.links.map((l, idx) => (
                <span key={idx}>
                  {l.href.startsWith('http') || l.href.startsWith('mailto:') ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                  ) : (
                    <Link href={l.href}>{l.label}</Link>
                  )}
                  {idx < entry.links!.length - 1 && ' • '}
                </span>
              ))}
            </Typography>
          )}
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
}

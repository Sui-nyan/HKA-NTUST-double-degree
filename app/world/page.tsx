import {Box, Container} from "@mui/system";
import Link from "next/link";
import {Typography} from "@mui/material";

export default function Home() {
  return (
    <Box className="flex flex-col items-center justify-center min-h-screen">
      <Container className="p-8">
          <Typography variant={"h1"} className="chewy-regular">ElisaのJourney</Typography>
      </Container>
    </Box>
  );
}

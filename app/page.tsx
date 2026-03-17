import {Box, Container} from "@mui/system";
import Link from "next/link";
import {Typography} from "@mui/material";

export default function Home() {
  return (
    <Box className="flex flex-col items-center justify-center min-h-screen py-2 bg-[url(../public/timo-volz-9-JFZIORoRw-unsplash.jpg)] h-auto bg-cover">
      <Container className="bg-linear-to-r from-slate-500 to-black-500 bg-opacity-80 rounded-lg p-8">
          <Typography variant={"h1"} className="chewy-regular">A Journey to Taiwan</Typography>
      </Container>
    </Box>
  );
}

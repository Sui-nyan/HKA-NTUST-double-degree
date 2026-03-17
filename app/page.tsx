import {Box} from "@mui/system";
import Link from "next/link";
import {Typography} from "@mui/material";

export default function Home() {
  return (
    <Box>
        <Typography variant={"h1"}>Willkommen im Doppelabschluss Programm zwischen der HKA und der NTUST</Typography>
        <Link href="/timeline">Ablauf</Link>
    </Box>
  );
}

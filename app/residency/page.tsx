"use client";

import {Box} from "@mui/system";
import {Button, InputLabel, MenuItem, Select, SelectChangeEvent, Typography} from "@mui/material";
import Form from "next/form";
import {useState} from "react";
import Link from "next/link";

export default function ClassSchedulePage() {
  return (
    <Box className="flex flex-col items-center gap-8">
        <Typography variant="h1">Applying for residency</Typography>
        <Box>
            <Typography variant={"body2"}>Nach dem ihr die ersten vier Steps eurer Registrierung durchgeführt habt, bekommt ihr ein Certificate of Enrollment. Mit diesem Dokument könnt ihr nun die Applikation für Residency ausfüllen.</Typography>
            <Button variant="contained"><Link href={"https://coa.immigration.gov.tw/coa-frontend/foreign-student/individual/login?verify=true"}>Zur Anlaufstelle</Link></Button>
        </Box>
    </Box>
  );
}
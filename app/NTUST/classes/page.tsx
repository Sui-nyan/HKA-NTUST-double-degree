"use client";

import {Box} from "@mui/system";
import {Button, InputLabel, MenuItem, Select, SelectChangeEvent, Typography} from "@mui/material";
import Form from "next/form";
import {useState} from "react";

export default function ClassSchedulePage() {
    const [semester, setSemester] = useState(1142);
    const [college, setCollege] = useState("3MMMI*");

    function onChangeSemester(event: SelectChangeEvent) {
        const value : number = parseInt(event.target.value);
        setSemester(value);
    }

    function onChangeCollege(event: SelectChangeEvent) {
        const value : string = event.target.value;
        setCollege(value);
    }

    function onSubmit() {
        console.log(`Selected semester: ${semester}, college: ${college}`);
    }

  return (
    <Box className="flex flex-col items-center gap-8">
        <Typography variant="h1">NTUST Class Schedule</Typography>
        <Box className="flex flex-col">
            <Typography variant="body1">Please select</Typography>
            <Form className="flex flex-row gap-8" action={""}>
                <InputLabel>Semester</InputLabel>
                <Select
                    value={semester.toString()}
                    label="Semester"
                    onChange={onChangeSemester}
                >
                    <MenuItem value={1142}>Summer 2026</MenuItem>
                </Select>
                <InputLabel>College & Department</InputLabel>
                <Select
                    value={college}
                    label="College"
                    onChange={onChangeCollege}
                >
                    <MenuItem value={"3MMMI*"}>Information Management</MenuItem>
                    <MenuItem value={"3MMIM1"}>Industrial Management</MenuItem>
                    <MenuItem value={"2MMCS1"}>Department of Computer Science and Information Engineering</MenuItem>
                </Select>
                <Button onClick={onSubmit}>Search</Button>
            </Form>
        </Box>
    </Box>
  );
}
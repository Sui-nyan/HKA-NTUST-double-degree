"use client";

import {Box} from "@mui/system";
import {InputLabel, MenuItem, Select, SelectChangeEvent, Typography} from "@mui/material";
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

  return (
    <Box>
        <Typography variant="h1">NTUST Class Schedule</Typography>
        <Box>
            <Typography variant="body1">Please select</Typography>
            <Form action={""}>
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
                    value={""}
                    label="College"
                    onChange={onChangeCollege}
                >
                    <MenuItem value={"3MMMI*"}>Information Management</MenuItem>
                    <MenuItem value={"3MMIM1"}>Industrial Management</MenuItem>
                    <MenuItem value={"2MMCS1"}>Department of Computer Science and Information Engineering</MenuItem>

                </Select>
            </Form>
        </Box>
    </Box>
  );
}
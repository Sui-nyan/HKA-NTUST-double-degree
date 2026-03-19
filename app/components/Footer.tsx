import { Grid, Typography } from "@mui/material"

export default function Footer() {
    return (
        <footer className="flex flex-col gap-8 bg-transparent text-center mt-8">
            <Grid container spacing={5}>
                <Grid size={8}>
                    <Typography variant="body1" className="text-gray-400">Photo Credits <a href="https://unsplash.com/@magict1911?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Timo Volz</a>, <a href="https://unsplash.com/@averagepony?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Maren Wilczek</a> on 
                <a href="https://unsplash.com/photos/high-rise-building-during-sunset-9-JFZIORoRw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Unsplash</a></Typography>
                </Grid>
                <Grid size={4}>
                    <Typography variant="body1" className="text-gray-400">Built with Next.js and Material UI</Typography>
                </Grid>
            </Grid>
            <p className="text-sm text-gray-500">&copy; 2024 HKA-NTUST Double Degree. All rights reserved.</p>
        </footer>
    );
}
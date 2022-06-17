import React from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const InputForm = () => {
    return (
        <Stack direction="column" spacing={3} style={{marginLeft: "10px"}}>
            <Stack direction="row" spacing={2}>
                <TextField id="outlined-basic" label="Growth Rate (%)" helperText="GDP, Industry Growth, etc." variant="outlined" style={{ width: "20%" }} />
                <TextField id="outlined-basic" label="Corporate Tax Rate (%)" variant="outlined" style={{ width: "20%" }} />
                <TextField id="outlined-basic" label="Risk Free Rate (%)" helperText="Usually 10y treasury" variant="outlined" style={{ width: "20%" }} />
                <TextField id="outlined-basic" label="Expected Market Return (%)" helperText="Best Guess" variant="outlined" style={{ width: "20%" }} />
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField id="outlined-basic" label="Beta" helperText="Stock volatility vs overall market" variant="outlined" style={{ width: "20%" }} />
                <TextField id="outlined-basic" label="Equity Value (Millions $USD)" helperText="Market Cap." variant="outlined" style={{ width: "20%" }} />
                <TextField id="outlined-basic" label="Debt Value (Millions ($USD)" variant="outlined" style={{ width: "20%" }} />
            </Stack>
        </Stack>
    );
}

export const DCFModeller = () => {
    return (
        <Card style={{ marginTop: "20px" }} variant="outlined">
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Assumptions
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Type into each textbox the assumptions that will factor into the DCF Model
                </Typography>
            </CardContent>
            <InputForm />
        </Card>
    );
}

import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


const TickerSelector = () => {
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Symbol</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //value={age}
                label="Symbol"
            // onChange={handleChange}
            >
                <MenuItem value={0}>AAPL</MenuItem>
                <MenuItem value={1}>MSFT</MenuItem>
                <MenuItem value={2}>WMT</MenuItem>
            </Select>
        </FormControl>
    );
}

const AssumptionsForm = () => {
    return (
        <Stack direction="column" spacing={2}>
            <TextField id="outlined-basic" label="Growth Rate (%)" helperText="GDP, Industry Growth, etc." variant="outlined" style={{width: "20%"}} />
            <TextField id="outlined-basic" label="Corporate Tax Rate (%)" variant="outlined" style={{ width: "20%" }} />
            <TextField id="outlined-basic" label="Risk Free Rate (%)" helperText="Usually 10y treasury" variant="outlined" style={{ width: "20%" }} />
            <TextField id="outlined-basic" label="Expected Market Return (%)" helperText="Best Guess" variant="outlined" style={{ width: "20%" }} />
        </Stack>
    );
}


const CompanyFinancialsForm = () => {
    return (
        <Stack direction="column" spacing={2}>
            <TextField id="outlined-basic" label="Beta" helperText="Stock volatility vs overall market" variant="outlined" style={{ width: "20%" }} />
            <TextField id="outlined-basic" label="Equity Value (Millions $USD)" helperText="Market Cap." variant="outlined" style={{ width: "20%" }} />
            <TextField id="outlined-basic" label="Debt Value (Millions ($USD)" variant="outlined" style={{ width: "20%" }} />
        </Stack>
    );
}

const steps = [
    {
        label: 'Assumptions',
        component: <AssumptionsForm />
    },
    {
        label: 'Financials',
        component: <CompanyFinancialsForm />
    }
];

export const DCFModeller = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div>
            <Stepper activeStep={activeStep} orientation="vertical" style={{position: "relative", left: "0%", top: "50%"}}>
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                            optional={
                                index === steps.length-1 ? (
                                    <Typography variant="caption">Last step</Typography>
                                ) : null
                            }
                        >
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            {step.component}
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1 ? 'Get Evaluation' : 'Continue'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button>
                </Paper>
            )}
        </div>
    );
}

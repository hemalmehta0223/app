import { Step, StepLabel, Stepper } from "@material-ui/core";

const BatchStepper = ({ steps, activeStep }) => {
  return (
    <Stepper activeStep={activeStep}>
      {steps.map((step) => (
        <Step key={step}>
          <StepLabel>{step}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
export default BatchStepper;

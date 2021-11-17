const BatchStepperContentPanel = ({ index, activeStep, children }) => {
  return index === activeStep && <>{children}</>;
};

export default BatchStepperContentPanel;

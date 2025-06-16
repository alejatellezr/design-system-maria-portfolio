// Stepper.stories.js
import React, { useState } from 'react';
import Stepper from './Stepper';
import './_stepper.scss';

export default {
  title: 'UI/Stepper',
  component: Stepper,
};

const ClickableTemplate = (args) => {
  const [activeStep, setActiveStep] = useState(args.activeStep || 0);
  const handleClick = (step) => {
    setActiveStep(step);
  };

  return (
    <Stepper
      {...args}
      activeStep={activeStep}
      onStepClick={handleClick}
    />
  );
};

export const Interactive = ClickableTemplate.bind({});
Interactive.args = {
  steps: ['Login', 'Shipping', 'Payment', 'Confirmation'],
  activeStep: 0,
};


export const WithDisabledSteps = (args) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleClick = (index) => {
    setActiveStep(index);
  };

  return (
    <Stepper
      {...args}
      activeStep={activeStep}
      onStepClick={handleClick}
      disabledSteps={[2]} // Example: step 3 disabled
    />
  );
};
WithDisabledSteps.args = {
  steps: ['Login', 'Shipping', 'Payment', 'Confirmation'],
};

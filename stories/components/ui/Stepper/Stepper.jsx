// Stepper.jsx
import React from 'react';
import './_stepper.scss';

const Stepper = ({
  steps = [],
  activeStep = 0,
  onStepClick = () => {},
  disabledSteps = [],
}) => {
  return (
    <article className="x-stepper">
      {steps.map((label, index) => {
        const isActive = index === activeStep;
        const isCompleted = index < activeStep;
        const isDisabled = disabledSteps.includes(index);

        return (
          <div
            key={index}
            className={`
              x-stepper--step
              ${isActive ? 'x-stepper--step__active' : ''}
              ${isCompleted ? 'x-stepper--step__completed' : ''}
              ${isDisabled ? 'x-stepper--step__disabled' : ''}
            `}
            onClick={() => !isDisabled && onStepClick(index)}
          >
            <div className="x-stepper--circle">
              <span className='x-font-14'>{index + 1}</span>
            </div>
            <p className="x-stepper--label x-font-16">{label}</p>

            {index !== steps.length - 1 && (
              <div className="x-stepper--line">
                <span
                  className={`x-stepper--line-fill ${
                    activeStep > index ? 'x-stepper--line-filled' : ''
                  }`}
                />
              </div>
            )}
          </div>
        );
      })}
    </article>
  );
};

export default Stepper;

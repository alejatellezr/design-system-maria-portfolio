// Dialog.stories.js
import React, { useState } from 'react';
import Dialog from './Dialog';

export default {
  title: 'UI/Dialog',
  component: Dialog,
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);
  const handleConfirm = () => {
    alert('Confirmed!');
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Dialog</button>
      <Dialog {...args} isOpen={isOpen} onClose={handleClose} onConfirm={handleConfirm}>
        This is a sample dialog content. Confirm or cancel below.
      </Dialog>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Confirm Action',
};

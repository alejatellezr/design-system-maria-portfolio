// Dialog.stories.js
import React, { useState } from "react";
import Dialog from "./Dialog";
import { Button } from "./../Button/Button";

export default {
  title: "UI/Dialog",
  component: Dialog,
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);
  const handleConfirm = () => {
    alert("Confirmed!");
    setIsOpen(false);
  };

  return (
    <>
      <Button
        className=""
        label="Open Dialog"
        iconName=""
        iconOnly={false}
        style="outline"
        status="default"
        onClick={() => setIsOpen(true)}
      />
      <Dialog
        {...args}
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
      >
        <p className="x-font-16">
          This is a sample dialog content. Confirm or cancel below.
        </p>
      </Dialog>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Please Confirm",
  informative: false,
};

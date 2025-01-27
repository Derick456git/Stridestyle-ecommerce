import React from 'react';
import { usePopper } from 'react-popper';

const PopperMessage = ({ referenceElement, message, messageType }) => {
  if (!message) return null;

  // Create the popper logic
  const { styles, attributes } = usePopper(referenceElement, document.getElementById('popper'), {
    placement: 'top', // You can adjust this placement as needed
  });

  return (
    <div
      id="popper"
      style={styles.popper}
      {...attributes.popper}
      className={`px-6 py-3 rounded-lg shadow-xl absolute transition-all duration-300 ${
        messageType === 'error' ? 'bg-red-200 text-red-600' : 'bg-green-200 text-green-600'
      }`}
    >
      {message}
    </div>
  );
};

export default PopperMessage;

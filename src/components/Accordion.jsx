// src/Accordion.js
import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-2">
      <div
        className="flex items-center py-2 space-x-2 cursor-pointer"
        onClick={toggleAccordion}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        )}
        <div>
          <p>{title}</p>
        </div>
      </div>
      {isOpen && (
        <div className="px-4">
          {content.map((item) => {
            const value = Object.keys(item)[0];
            return (
              <p key={value}>
                <span>&#10003;</span> {value}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Accordion;


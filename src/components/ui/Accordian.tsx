import React, { FC, useState } from "react";
import FormInput from "./FormInput";
import AppButton from "./Button";

export interface CustomAccordionProps {
  questions: { id: number; question: string }[];
  onProceed: (answers: { questionId: number; answer: string }[]) => void;
}

const CustomAccordion: FC<CustomAccordionProps> = ({
  questions,
  onProceed,
}) => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const handleChange = (questionId: number, answer: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleProceed = () => {
    const answersArray = questions.map((q) => ({
      questionId: q.id,
      answer: answers[q.id] || "",
    }));
    onProceed(answersArray);
  };

  return (
    <div style={{ width: "100%", maxWidth: "540px" }}>
      {questions.map((question) => (
        <div key={question.id} className="mb-3">
          <AccordionItem question={question} onChange={handleChange} />
        </div>
      ))}
      <AppButton
        variant="info"
        size="lg"
        fullWidth
        className="mt-4"
        onClick={handleProceed}
      >
        Proceed
      </AppButton>
    </div>
  );
};

interface AccordionItemProps {
  question: { id: number; question: string };
  onChange: (questionId: number, answer: string) => void;
}

const AccordionItem: FC<AccordionItemProps> = ({ question, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const handleChange = (value: string) => {
    onChange(question.id, value);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        {question.question}
      </div>
      {isOpen && (
        <div className="accordion-body">
          <FormInput
            type="text"
            placeholder="Answer..."
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
};

export default CustomAccordion;

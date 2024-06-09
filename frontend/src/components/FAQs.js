import React, { useState } from "react";

const FAQs = () => {
  const [isOpen, setIsOpen] = useState(new Array(5).fill(false));

  const toggleAnswer = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <span>{faq.question}</span>
            <button
              className={`btn btn-danger ml-2 ${
                isOpen[index] ? "collapsed" : ""
              }`}
              onClick={() => toggleAnswer(index)}
              aria-expanded={isOpen[index]}
              aria-controls={`faq${index}`}
            >
              {isOpen[index] ? "-" : "+"}
            </button>
          </div>
          <hr />
          <div
            id={`faq${index}`}
            className={`collapse ${isOpen[index] ? "show" : ""}`}
          >
            <div className="card card-body mt-2">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const faqs = [
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Why do we use it?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    question: "Where does it come from?",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    question: "Where can I get some?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    question: "What is the last question?",
    answer: "The last question is, What is the last question?",
  },
];

export default FAQs;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const majors = [
  { name: 'Computer Science', salary: '$66,000 - $88,000' },
  { name: 'Elementary Education', salary: '$40,000 - $50,000' },
  { name: 'Special Education', salary: '$38,000 - $48,000' },
  { name: 'Art Teacher Education', salary: '$38,000 - $45,000' },
  { name: 'Civil Engineering', salary: '$60,000 - $70,000' },
  { name: 'Mechanical Engineering', salary: '$62,000 - $80,000' },
  { name: 'Electrical Engineering', salary: '$65,000 - $85,000' },
  { name: 'Japanese, German, French, Spanish', salary: '$35,000 - $45,000' },
  { name: 'Nursing', salary: '$60,000 - $72,000' },
  { name: 'Respiratory Therapy', salary: '$50,000 - $62,000' },
  { name: 'Public Health', salary: '$45,000 - $55,000' },
  { name: 'Finance', salary: '$58,000 - $66,000' },
  { name: 'Accounting', salary: '$55,000 - $65,000' },
  { name: 'Marketing', salary: '$50,000 - $62,000' },
  { name: 'International Business', salary: '$54,000 - $64,000' },
  { name: 'Political Science', salary: '$45,000 - $55,000' },
  { name: 'Sociology', salary: '$40,000 - $50,000' },
  { name: 'Anthropology', salary: '$38,000 - $48,000' },
  { name: 'English', salary: '$35,000 - $45,000' },
  { name: 'History', salary: '$38,000 - $48,000' },
  { name: 'Philosophy', salary: '$40,000 - $50,000' },
  { name: 'Biology', salary: '$40,000 - $55,000' },
  { name: 'Chemistry', salary: '$45,000 - $60,000' },
  { name: 'Physics', salary: '$55,000 - $70,000' },
  { name: 'Mathematics', salary: '$50,000 - $60,000' },
  { name: 'Psychology', salary: '$35,000 - $45,000' },
];

const questions = [
  { id: 1, text: 'I never delay starting my homework assignments until the last minute.', type: 'time' },
  { id: 2, text: 'I can effectively balance studying, part- time work, and payments.', type: 'time' },
  { id: 3, text: 'I have a meal plan/ cooking schedule to avoid relying on expensive campus dining options.', type: 'time' },
  { id: 4, text: 'I save time each week for grocery shopping to avoid relying on costly food purchases.', type: 'time' }, 
  { id: 5, text: 'I frequently compare transportation options to find cost/ time saving routes and schedules.', type: 'time' },
  { id: 6, text: 'I assess my extracurricular commitments to ensure they do not interfere with academic and financial responsibilities.', type: 'time' },
  { id: 7, text: 'I effectively prioritize tasks and manage my time to meet deadlines.', type: 'time' },
  { id: 8, text: 'I reliably track payment deadlines for tuition, fees, and health insurance.', type: 'time' },
  { id: 9, text: 'I carefully allocate financial aid/ scholarship funds to cover tuition and fees.', type: 'budget' },
  { id: 10, text: 'I effectively budget housing expenses to stay within my financial limits.', type: 'budget' },
  { id: 11, text: 'I separately budget for meal plans and groceries to make an informed decision on how much to spend on each.', type: 'budget' }, 
  { id: 12, text: 'I research ways to save on health insurance premiums with an example being UNC Charlotte\'s student health insurance options.', type: 'budget' },
  { id: 13, text: 'I have funds set aside for emergency transportation expenses such as gas, repairs, and bus passes.', type: 'budget' },
  { id: 14, text: 'I track my spending on campus expenses such as dining to avoid overspending and to adjust budget when needed.', type: 'budget' },
  { id: 15, text: 'I include the cost of textbooks and school supplies in my semester budget alongside other school fees.', type: 'budget' },
  { id: 16, text: 'I account for health- related expenses such as co- pays, prescriptions, and emergency visits.', type: 'budget' },
  { id: 17, text: 'During the week, I see something that I want to buy and instead decide to save', type: 'invest' },
  { id: 18, text: 'I understand investing in stocks or mutual funds.', type: 'invest' },
  { id: 19, text: 'I currently have investments.', type: 'invest' },
  { id: 20, text: 'I set clear financial goals and work to achieve them.', type: 'invest' },
  { id: 21, text: 'I am familiar with the concept of compound interest.', type: 'invest' },
  { id: 22, text: 'I have an emergency fund to cover unexpected expenses.', type: 'invest' },
  { id: 23, text: 'I am comfortable taking risks in investing when appropriate.', type: 'invest' },
  { id: 24, text: 'I budget for investing as part of my financial plan.', type: 'invest' },
];
  

const options = [
  { label: 'Strongly Agree', value: 5 },
  { label: 'Agree', value: 4 },
  { label: 'Neutral', value: 3 },
  { label: 'Disagree', value: 2 },
  { label: 'Strongly Disagree', value: 1 },
];

const Quiz = () => {
  const [selectedMajor, setSelectedMajor] = useState('');
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleAnswerChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleSubmit = () => {
    const scores = { time: 0, budget: 0, invest: 0 };

    questions.forEach(({ id, type }) => {
      if (answers[id]) {
        scores[type] += answers[id];
      }
    });

    const major = majors.find((m) => m.name === selectedMajor);
    localStorage.setItem('scores', JSON.stringify(scores));
    localStorage.setItem('major', JSON.stringify(major));
    navigate('/results');
  };

  return (
    <div className="container mt-5">
      <h2>Quiz</h2>
      
      {/* Major Selection Dropdown */}
      <div className="mb-4">
        <label htmlFor="majorSelect" className="form-label">Select Your Major</label>
        <select
          id="majorSelect"
          className="form-select"
          value={selectedMajor}
          onChange={(e) => setSelectedMajor(e.target.value)}
        >
          <option value="">-- Choose a Major --</option>
          {majors.map((major) => (
            <option key={major.name} value={major.name}>
              {major.name}
            </option>
          ))}
        </select>
      </div>

      {/* Quiz Questions */}
      {questions.map((question) => (
        <div key={question.id} className="mb-3">
          <h5>{question.text}</h5>
          {options.map((option) => (
            <div key={option.value} className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name={`question-${question.id}`}
                value={option.value}
                onChange={() => handleAnswerChange(question.id, option.value)}
              />
              <label className="form-check-label">
                {option.label}
              </label>
            </div>
          ))}
        </div>
      ))}

      <button
        className="btn btn-primary"
        onClick={handleSubmit}
        disabled={!selectedMajor}
      >
        Submit
      </button>
    </div>
  );
};

export default Quiz;

import React, { useEffect, useState } from 'react';

const salaryRanges = [
  {
    range: [30000, 40000],
    incomeLevel: "Low Income",
    advice: {
      text: "Being in the low-income category does not mean failure—it often reflects the early stages of a career, the pursuit of a passion, or the beginning of a meaningful journey. Many professions in this range, such as education or the arts, play an essential role in society and provide the foundation for future growth. Financial success is about managing resources wisely, not just the size of your paycheck. By focusing on budgeting, building savings, and exploring opportunities for advancement, you can create a stable and fulfilling life. Remember, everyone starts somewhere, and your potential is limitless.",
      rent: "$750 - $1,000",
      mortgage: "$100,000 - $140,000",
      car: "$250 - $500 per month",
      disposableIncome: "$400 - $800 per month",
    },
  },
  {
    range: [40000, 60000],
    incomeLevel: "Moderate Income",
    advice: {
      text: "Being in the moderate-income category is a testament to balance and growth. At this level, you have the ability to cover essential needs while beginning to explore opportunities for financial freedom, like saving for a home or investing in your future. Many people in this range are climbing the career ladder, transitioning into leadership roles, or building expertise in their field. Remember, financial health isn’t solely determined by income but by how you manage your resources. Stay focused, set goals, and celebrate your accomplishments—you're on the right path.",
      rent: "$1,000 - $1,500",
      mortgage: "$160,000 - $220,000",
      car: "$400 - $750 per month",
      disposableIncome: "$800 - $1,400 per month",
    },
  },
  {
    range: [60000, 80000],
    incomeLevel: "High Income",
    advice: {
      text: "A high income reflects dedication, skill, and experience in your chosen field. At this level, you have the flexibility to enjoy a comfortable lifestyle while planning for long-term financial goals. It’s an opportunity to invest in your future, whether by saving for retirement, starting a business, or giving back to your community. However, remember that financial well-being also involves spending wisely and maintaining balance. Continue striving for your goals while taking time to appreciate how far you’ve come. Your hard work is paying off, and the possibilities ahead are exciting.",
      rent: "$1,500 - $2,000",
      mortgage: "$240,000 - $280,000",
      car: "$500 - $1,000 per month",
      disposableIncome: "$1,500 - $2,200 per month",
    },
  },
  {
    range: [80000, 100000],
    incomeLevel: "Very High Income",
    advice: {
      text: "Reaching the very high-income category is a significant achievement and often reflects years of effort, specialization, and growth. This level of income provides the freedom to not only live comfortably but also invest in passions, causes, and future opportunities. With great financial power comes the responsibility of managing it wisely—ensuring that your wealth aligns with your values and long-term goals. Remember, success is not just measured by income but by how you use it to create a meaningful and balanced life. Congratulations on your accomplishments, and keep building the life you envision.",
      rent: "$2,000 - $2,500+",
      mortgage: "$300,000 - $360,000+",
      car: "$700 - $1,250+ per month",
      disposableIncome: "$2,500 - $3,500+ per month",
    },
  },
];

const getSalaryRange = (salary) => {
  const numericSalary = parseInt(salary.replace(/[^0-9-]+/g, "").split("-")[0]);
  return salaryRanges.find(({ range }) => numericSalary >= range[0] && numericSalary <= range[1]);
};

const scoreMessages = {
  time: [
    { range: [0, 8], text: "Improving your time management skills is a high priority. You might be facing challenges with balancing schoolwork, financial planning, and other responsibilities. Start small—try scheduling just a few important tasks each week, such as reviewing scholarship options or tracking your payment deadlines. Gradually building these habits will help you feel more organized and capable." },
    { range: [9, 16], text: "Your time management habits could use some improvement. It seems you may struggle with consistently balancing your schedule, which can lead to missed opportunities or stress. Try setting clear weekly goals for academics and financial planning and prioritize creating a structured routine. This could help you feel more in control and ensure you’re meeting deadlines effectively." },
    { range: [17, 24], text: "You have a fair approach to time management, though there’s room for improvement. While you manage some aspects of your time well, other areas may need more focus. Consider setting aside specific time blocks for financial planning and evaluating deadlines. Small adjustments to your routine could make a big difference in managing both academics and finances smoothly." },
    { range: [25, 32], text: "You’re doing well with time management and showing a strong ability to prioritize essential tasks. You are making effective use of your time for both academics and financial planning, but there may be a few areas where you could further refine your schedule. Perhaps set reminders or evaluate any areas where you feel rushed. Overall, you’re on the right track!" },
    { range: [32, 40], text: "Your time management skills are outstanding! You consistently dedicate time to important tasks, including managing your academic and financial responsibilities. You’re effectively balancing study time, extracurricular activities, and financial planning, ensuring you stay on top of deadlines. Keep up this excellent work, and continue to build on these strong habits!" },
  ],
  budget: [
    { range: [0, 8], text: "Improving your budgeting skills is a high priority. You might be finding it challenging to manage your expenses effectively, which can create added stress. Start by tracking all of your expenses for a week to see where your money is going, and use that as a foundation to create a simple, achievable budget. Setting up a budget can give you more confidence in managing your finances." },
    { range: [9, 16], text: "Your budgeting habits need improvement. It looks like you may struggle to balance all your expenses, which can lead to financial strain. Try breaking down your budget into smaller, manageable categories, and set clear spending limits for each. Focusing on your most essential costs first (like rent and meals) could help you start building a more sustainable budget." },
    { range: [17, 24], text: "Your budgeting skills are fair, but there’s room for improvement. You’re covering your main expenses, though you might occasionally feel tight on funds. Consider tracking your spending more closely or setting aside specific amounts for each category, like groceries or transportation. With a bit more planning, you could achieve greater financial control and reduce financial stress." },
    { range: [25, 32], text: "You’re doing a good job with budgeting and have a solid understanding of your financial needs. While you’re effectively covering your main expenses, there might be a few areas where you can optimize even further. Regularly reviewing and fine-tuning your budget, especially around variable costs, could help you strengthen your financial security." },
    { range: [32, 40], text: "Your budgeting skills are exceptional! You have a clear system in place for managing expenses, from tuition to groceries, and you’re consistently making well-informed financial decisions. You’re not only staying within your budget but also planning for future costs, which sets you up for financial stability. Keep up the fantastic work, and continue monitoring your progress!" },
  ],
  invest: [
    { range: [0, 10], text: "Start by learning the basics of investing. Focus on saving consistently, building an emergency fund, and understanding concepts like compound interest. Consider opening a simple savings account or exploring low-risk investment options like index funds." },
    { range: [11, 20], text: "You’ve started thinking about investing, but there’s room for improvement. Work on creating a budget that includes saving for investments. Learn more about stock market basics and consider starting with a diversified ETF or robo-advisor to gain confidence." },
    { range: [21, 30], text: "You have a solid understanding of investing and may already have some investments. Focus on refining your portfolio, setting long-term goals, and learning about advanced concepts like risk management. Explore apps or brokers with low fees to grow your investments." },
    { range: [31, 40], text: "You’re actively investing and have a good grasp of financial planning. Continue diversifying your portfolio, exploring new asset classes like real estate or crypto (if applicable), and optimizing for tax efficiency. Consider consulting a financial advisor for personalized advice." },
  ],
};

const getScoreMessage = (score, type) => {
  const messages = scoreMessages[type];
  for (const { range, text } of messages) {
    if (score >= range[0] && score <= range[1]) {
      return text;
    }
  }
  return "Score out of range.";
};

const Results = () => {
  const [scores, setScores] = useState({ time: 0, budget: 0, invest: 0 });
  const [major, setMajor] = useState({ name: '', salary: '' });

  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem('scores'));
    const storedMajor = JSON.parse(localStorage.getItem('major'));

    if (storedScores) setScores(storedScores);
    if (storedMajor) setMajor(storedMajor);
  }, []);

  const salaryInfo = getSalaryRange(major.salary);

  return (
    <div className="container mt-5">
      <div className="d-flex align-items-center">
        {/* Image */}
        <small>
          Image source: <a href="https://www.drakesoftware.com" target="_blank" rel="noopener noreferrer">Drake Software</a>
        </small>
        <img
          src="https://www.drakesoftware.com/media/3313/help-taxpayers-settle-irs-debts.png?anchor=center&mode=crop&width=1024&height=576&rnd=133737316900000000"
          alt="Results"
          style={{ width: '100%', maxWidth: '500px', marginRight: '20px' }} // Adjust the maxWidth as needed
        />
        
    
        {/* Text Section */}
        <div>
          <h2>Results</h2>
          <p><strong>Selected Major:</strong> {major.name}</p>
          <p><strong>Expected Salary Range:</strong> {major.salary}</p>

          {salaryInfo && (
            <div className="mt-4">
              <h3>{salaryInfo.incomeLevel}</h3>
              {salaryInfo.advice.text}<br /><br />
              <ul>
                <li><strong>Affordable Rent:</strong> {salaryInfo.advice.rent}</li>
                <li><strong>Affordable Mortgage:</strong> {salaryInfo.advice.mortgage}</li>
                <li><strong>Affordable Car Payments:</strong> {salaryInfo.advice.car}</li>
                <li><strong>Estimated Disposable Income:</strong> {salaryInfo.advice.disposableIncome}</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="mt-4">
        <h3>Time Management</h3>
        <p>{getScoreMessage(scores.time, 'time')}</p>
      </div>

      <div className="mt-4">
        <h3>Budgeting</h3>
        <p>{getScoreMessage(scores.budget, 'budget')}</p>
      </div>

      <div className="mt-4">
        <h3>Investing</h3>
        <p>{getScoreMessage(scores.invest, 'invest')}</p>
      </div>
    </div>
  );
};

export default Results;

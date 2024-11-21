import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
return (
    <div className="container mt-5">
        <h2>About Us</h2>
        
        <section className="mt-4">
            <div className="row align-items-center">
            <div className="col-md-6">
                <h3>Our mission</h3>
                <p>
                    Our mission is to create an accessible, interactive platform that empowers UNC Charlotte students to navigate their financial and time management challenges effectively, both during their academic journey and beyond. We aim to deliver personalized, relevant, and actionable advice through a custom-built quiz that addresses the diverse financial situations students face. Whether it's budgeting during college or planning for life after graduation, our platform is designed to provide insights tailored to individual needs and circumstances.
                </p>
            </div>
            <div className="col-md-6">
                <img 
                src="https://www.drakesoftware.com/media/3194/mission-statement-for-tax-prep.jpg?anchor=center&mode=crop&width=750&height=422&rnd=133379716440000000" 
                alt="Mission illustration" 
                className="img-fluid rounded"
                />
                <small>
                Image source: <a href="https://www.drakesoftware.com" target="_blank" rel="noopener noreferrer">Drake Software</a>
                </small>
            </div>
            </div>
        </section>

        <section className="mt-5">
            <div className="row align-items-center">
            <div className="col-md-6 order-md-2">
                <h3>Why take the quiz?</h3>
                <p>
                    By identifying where you stand in key areas, you’ll be able to make more informed decisions and develop strategies for improvement.
                </p>
            </div>
            <div className="col-md-6 order-md-1">
                <img 
                src="https://via.placeholder.com/500x300" 
                alt="Illustration of benefits" 
                className="img-fluid rounded"
                />
            </div>
            </div>
        </section>

        <section className="mt-5 mb-4">
            <h3>Get started today</h3>
            <p>
            Ready to take the first step towards financial wellness and better self-management? Head over to the <a href="/">Quiz</a> page and start now.
            </p>
        </section>
        <Container className="mt-4">
        <hr />
        <h1>Disclaimer and Sources</h1>
        <Row>
            <Col>
            <Card>
                <Card.Body>
                <Card.Text>
                    The content provided on this website is intended for educational purposes only and aims to assist students in roughly understanding their current financial, and by proxy, time management situations. While we strive to offer helpful advice and guidance, the information shared is not professional advice and should not be used as a substitute for expert consultation or official recommendations. For personalized or professional support, we encourage users to consult a qualified expert in the relevant field.
                </Card.Text>
                </Card.Body>
            </Card>

            <Card className="mt-4">
                <Card.Body>
                <Card.Title>Sources for income levels by major</Card.Title>
                <ul>
                    <li>
                    Bureau of Labor Statistics. Occupational Outlook Handbook.&nbsp; 
                    <a href="https://www.bls.gov/ooh/" target="_blank" rel="noopener noreferrer">
                        Retrieved from https://www.bls.gov/ooh/
                    </a>
                    </li>
                    <li>
                    National Association of Colleges and Employers. Salary Survey.&nbsp;
                    <a href="https://www.naceweb.org/" target="_blank" rel="noopener noreferrer">
                        Retrieved from https://www.naceweb.org/
                    </a>
                    </li>
                    <li>
                    PayScale. College Salary Report by Major.&nbsp; 
                    <a href="https://www.payscale.com/" target="_blank" rel="noopener noreferrer">
                        Retrieved from https://www.payscale.com/
                    </a>
                    </li>
                </ul>
                </Card.Body>
            </Card>

            <Card className="mt-4">
                <Card.Body>
                <Card.Title>Sources for mortgage and rent rates</Card.Title>
                <ul>
                    <li>
                    Zillow Research. U.S. Rental Market Trends.&nbsp; 
                    <a href="https://www.zillow.com/research/" target="_blank" rel="noopener noreferrer">
                        Retrieved from https://www.zillow.com/research/
                    </a>
                    </li>
                    <li>
                    Freddie Mac. Primary Mortgage Market Survey.&nbsp; 
                    <a href="https://www.freddiemac.com/" target="_blank" rel="noopener noreferrer">
                        Retrieved from https://www.freddiemac.com/
                    </a>
                    </li>
                    <li>
                    U.S. Census Bureau. Housing Vacancies and Homeownership.&nbsp; 
                    <a href="https://www.census.gov/housing/" target="_blank" rel="noopener noreferrer">
                        Retrieved from https://www.census.gov/housing/
                    </a>
                    </li>
                </ul>
                </Card.Body>
            </Card>

            <Card className="mt-4">
                <Card.Body>
                <Card.Title>Sources for time management and budgeting</Card.Title>
                <ul>
                    <li>
                    American Psychological Association. Stress in America Survey.&nbsp; 
                    <a href="https://www.apa.org/news/press/releases/stress/" target="_blank" rel="noopener noreferrer">
                        Retrieved from https://www.apa.org/news/press/releases/stress/
                    </a>
                    </li>
                    <li>
                    Mint Blog. Budgeting Tips for College Students.&nbsp; 
                    <a href="https://blog.mint.com/" target="_blank" rel="noopener noreferrer">
                        Retrieved from https://blog.mint.com/
                    </a>
                    </li>
                    <li>
                    Covey, S. R. The 7 Habits of Highly Effective People. (Book reference).
                    </li>
                </ul>
                </Card.Body>
            </Card>

            <Card className="mt-4">
                <Card.Body>
                <Card.Title>Sources for post-graduation lifestyle choices</Card.Title>
                <ul>
                    <li>
                    Federal Reserve Bank. Economic Well-Being of U.S. Households Report.&nbsp; 
                    <a href="https://www.federalreserve.gov/" target="_blank" rel="noopener noreferrer">
                        Retrieved from https://www.federalreserve.gov/
                    </a>
                    </li>
                    <li>
                    U.S. Department of Education. College Scorecard.&nbsp; 
                    <a href="https://collegescorecard.ed.gov/" target="_blank" rel="noopener noreferrer">
                        Retrieved from https://collegescorecard.ed.gov/
                    </a>
                    </li>
                    <li>
                    Personal Finance Guide. How to Plan for Major Life Expenses.&nbsp; 
                    <a href="https://www.personalfinanceguide.com/" target="_blank" rel="noopener noreferrer">
                        Retrieved from https://www.personalfinanceguide.com/
                    </a>
                    </li>
                </ul>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>
    </div>
    
);
};

export default About;

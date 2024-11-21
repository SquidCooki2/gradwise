import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const Home = () => {
return (
    <Container className="text-center my-5">
    {/* Hero Section */}
    <section className="hero bg-dark text-light p-5 rounded mb-5">
        <h1>Welcome to GradWise for UNCC students</h1>
        <p className="lead mt-3">
        Discover your strengths in time management, budgeting for wants and needs, and more.
        </p>
        <Button as={Link} to="/quiz" variant="primary" size="lg" className="mt-3">
        Take the Quiz Now
        </Button>
    </section>

    {/* Featured Sections */}
    <section>
        <Row className="justify-content-center">
        <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
            <Card.Body>
                <Card.Title>About us</Card.Title>
                <Card.Text>
                Learn more about our mission to empower individuals in making informed decisions about personal growth and budgeting.
                </Card.Text>
                <Button as={Link} to="/about" variant="outline-primary">
                Learn More
                </Button>
            </Card.Body>
            </Card>
        </Col>

        <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
            <Card.Body>
                <Card.Title>Your quiz results</Card.Title>
                <Card.Text>
                Finished the quiz? Head over to the results page to discover insights about your habits and potential areas for growth.
                </Card.Text>
                <Button as={Link} to="/results" variant="outline-primary">
                View Results
                </Button>
            </Card.Body>
            </Card>
        </Col>
        </Row>
    </section>

    {/* Benefits Section */}
    <section className="mt-5">
        <h2 className="mb-4">Why take the quiz?</h2>
        <Row className="gy-4">
        <Col md={4}>
            <Card className="border-0">
            <Card.Img src="https://cdn-res.keymedia.com/cdn-cgi/image/f=auto/https://cdn-res.keymedia.com/cms/images/us/069/0270_638355688556018175.jpg" alt="Self Awareness" />
            <small>
            Image source: <a href="https://www.thesafetymag.com/ca/topics/safety-and-ppe/beyond-compliance-unleashing-potential-through-self-awareness/466597" target="_blank" rel="noopener noreferrer">Drake Software</a>
            </small>
            <Card.Body>
                <Card.Title>Self-Awareness</Card.Title>
                <Card.Text>
                Understand your current habits and strengths to make better choices.
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
        <Col md={4}>
            <Card className="border-0">
            <Card.Img src="https://www.usatoday.com/gcdn/presto/2023/07/20/USAT/a03e93be-d7e1-456e-b7e7-809577d8ac0f-roth-ira-contribution-rules.jpg?crop=700,467,x0,y0&width=660&height=441&format=pjpg&auto=webp" alt="Personal Growth" />
            <small>
            Image source: <a href="https://www.usatoday.com/story/money/personalfinance/2024/07/11/roth-ira-conversions-gen-x-retirement-options/74346959007/" target="_blank" rel="noopener noreferrer">USA Today</a>
            </small>
            <Card.Body>
                <Card.Title>Personal Growth</Card.Title>
                <Card.Text>
                Set meaningful goals in budgeting and time management for long-term success.
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
        <Col md={4}>
            <Card className="border-0">
            <Card.Img src="https://cooperatornews.com/_data/ny/articles/11733_image1.jpg?w=793" alt="Financial Awareness" />
            <small>
            Image source: <a href="https://cooperatornews.com/article/financial-literacy-for-board-members" target="_blank" rel="noopener noreferrer">Cooperator News</a>
            </small>
            <Card.Body>
                <Card.Title>Financial Awareness</Card.Title>
                <Card.Text>
                Align your financial goals with your chosen career path and lifestyle.
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
        </Row>
    </section>

    {/* Call to Action Section */}
    <section className="cta-section bg-primary text-light mt-5 p-4 rounded">
        <h3>Ready to Get Started?</h3>
        <p>Take the quiz to learn more about yourself and take control of your future.</p>
        <Button as={Link} to="/quiz" variant="light" size="lg">
        Start Quiz
        </Button>
    </section>
    </Container>
);
};

export default Home;

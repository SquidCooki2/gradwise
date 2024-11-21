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
                <Card.Title>About Us</Card.Title>
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
                <Card.Title>Your Quiz Results</Card.Title>
                <Card.Text>
                Finished the quiz? Head over to the results page to discover insights about your habits and potential areas for growth.
                </Card.Text>
                <Button as={Link} to="/results" variant="outline-primary">
                View Results
                </Button>
            </Card.Body>
            </Card>
        </Col>
        
        <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
            <Card.Body>
                <Card.Title>More information</Card.Title>
                <Card.Text>
                Looking for more information and resources? See our sources, research, and more.
                </Card.Text>
                <Button as={Link} to="/information" variant="outline-primary">
                More information
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
            <Card.Img src="https://via.placeholder.com/300x200" alt="Self Awareness" />
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
            <Card.Img src="https://via.placeholder.com/300x200" alt="Personal Growth" />
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
            <Card.Img src="https://via.placeholder.com/300x200" alt="Financial Awareness" />
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

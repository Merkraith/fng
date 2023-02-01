import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import CardGroup from 'react-bootstrap/CardGroup';

function WithHeaderExample() {
  return (
    <Container fluid="md">
      <Card>
        <Card.Header className="text-center">Find Next Gig</Card.Header>
        <Card.Body>
          <Card.Text>Enter a band or performer</Card.Text>

          <Stack direction="horizontal" gap={3}>
            <Form.Control className="me-auto" placeholder="find a gig..." />
            <Button variant="secondary">Submit</Button>
            <div className="vr" />
            <Button variant="outline-danger">Reset</Button>
          </Stack>
        </Card.Body>
      </Card>

      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>Band Title</Card.Title>
            <Card.Text>Time:</Card.Text>
            <Card.Text>Venue:</Card.Text>
            <Card.Text>Address:</Card.Text>
            <Card.Text>City/State:</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text>
              This is where the map will display and show the location of the next gig!
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}

export default WithHeaderExample;

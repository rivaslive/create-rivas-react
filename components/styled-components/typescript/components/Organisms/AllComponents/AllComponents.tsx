import Text from 'components/Atoms/Text';
import Form from 'components/Atoms/Form';
import Title from 'components/Atoms/Title';
import Input from 'components/Atoms/Input';
import Button from 'components/Atoms/Button';
import Loading from 'components/Atoms/Loading';
import Checkbox from 'components/Atoms/Checkbox';
import { Row, Col } from 'components/Atoms/Grid';
import Container from 'components/Atoms/Container';
import GoogleButton from 'components/Atoms/GoogleButton';

import { ComponentStyle, WrapperStyle } from './style';

const AllComponents = (props: BaseComponent) => {
  return (
    <WrapperStyle {...props}>
      <ComponentStyle data-content="Titles">
        <Title>Title</Title>
        <Title fontSize="2rem">Title</Title>
        <Title fontSize="1rem" margin="0">
          Title
        </Title>
      </ComponentStyle>

      <ComponentStyle data-content="Texts">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          aspernatur, at atque beatae commodi deleniti eius inventore, magnam
          necessitatibus obcaecati odit officia porro possimus quia rerum saepe
          sint sit soluta.
        </Text>
        <Text color="primary">Lorem ipsum dolor sit amet.</Text>
      </ComponentStyle>

      <ComponentStyle data-content="Buttons">
        <Button>Default</Button>
        <Button bgColor="success" color="white">
          Custom colors
        </Button>
        <Button bgColor="error" loading>
          Loading
        </Button>
        <Button bgColor="transparent" borderColor="text" color="text">
          Outline
        </Button>
        <Button
          disabled
          bgColor="transparent"
          borderColor="primary"
          color="primary"
        >
          Disabled
        </Button>
      </ComponentStyle>

      <ComponentStyle data-content="Checkbox">
        <Checkbox>Default</Checkbox>
      </ComponentStyle>

      <ComponentStyle data-content="Inputs">
        <Input placeholder="Text here" />
        <br />
        <br />
        <Input
          bgColor="transparent"
          borderColor="error"
          labelColor="primary"
          placeholder="Text here"
        />
      </ComponentStyle>

      <ComponentStyle data-content="Form">
        <Form onFinish={console.log}>
          <Row gutter={[20, 0]}>
            <Col xs={24} md={12}>
              <Form.Item isRequired name="email" rules={[{ type: 'email' }]}>
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item isRequired name="password">
                <Input placeholder="Password" type="password" />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item>
                <Button type="submit">Send</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </ComponentStyle>

      <ComponentStyle data-content="Social">
        <div style={{ maxWidth: 350 }}>
          <GoogleButton />
        </div>
      </ComponentStyle>

      <ComponentStyle data-content="Row">
        <Row>
          <Col xs={24} md={12}>
            Col 1
          </Col>
          <Col xs={24} md={12}>
            Col 2
          </Col>
        </Row>
      </ComponentStyle>

      <ComponentStyle data-content="Container">
        <Container>Container</Container>
      </ComponentStyle>

      <ComponentStyle data-content="Loading">
        <Loading />
      </ComponentStyle>
    </WrapperStyle>
  );
};

export default AllComponents;

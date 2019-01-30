import { Container } from 'reactstrap';

export default ({ children }) => {
  return (
    <div className="base-page">
      <Container>{children}</Container>
    </div>
  );
};

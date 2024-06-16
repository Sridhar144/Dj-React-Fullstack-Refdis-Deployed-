import React from 'react';
import {styled} from 'styled-components'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background: linear-gradient(135deg, #ff4081 30%, #c51162 90%);
  color: #fff;
  font-family: 'Roboto', sans-serif;
`;

const Title = styled.h1`
  font-size: 10rem;
  margin: 0;
  animation: fadeInDown 1s ease;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin: 0;
  animation: fadeInUp 1.5s ease;
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin: 20px 0;
  animation: fadeIn 2s ease;
`;

const Button = styled.a`
  display: inline-block;
  padding: 15px 30px;
  font-size: 1rem;
  color: #ff4081;
  background-color: #fff;
  border: none;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  animation: fadeInUp 2.5s ease;

  &:hover {
    background-color: #ff4081;
    color: #fff;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const NotFoundPage = () => {
  return (
    <Container>
      <Title>404</Title>
      <Subtitle>Page Not Found</Subtitle>
      <Description>The page you are looking for might have been removed or is temporarily unavailable.</Description>
      <Button href="/">Go to Homepage</Button>
    </Container>
  );
};

export default NotFoundPage;

// function NotFound(){
//     return <div>
//         <h1>404 Not Found!</h1>
//     </div>
// }
// export default NotFound
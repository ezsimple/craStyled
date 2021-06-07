import { Button, Link } from '../components/styled/shared';
// import './test.css';

const Index = () => {
  return (
    <div>
      <p>첫페이지 입니다.</p>
      <Link to="/profile">
        <Button fg="white" bg="blue">
          프로파일
        </Button>
      </Link>

      <Link to="/video">
        <Button fg="black" bg="lemon" bc="black">
          비디오
        </Button>
      </Link>

      <div>
        <ul>
          <li>하나</li>
          <li>두나</li>
        </ul>
      </div>
    </div>
  );
};

export default Index;

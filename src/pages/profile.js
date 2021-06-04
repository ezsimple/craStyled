import { Link, Button } from '../components/styled/shared';

export default function Profile() {
  return (
    <div>
      <p>Hello, my name is MIN0. I use next.js</p>
      <Link to="/">
        <Button fg="black" bg="lemon">
          홈페이지로 갑시다
        </Button>
      </Link>
    </div>
  );
}

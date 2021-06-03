import { Link, Button } from '../components/styled/shared';

export default function Profile() {
  return (
    <div>
      <p>Hello, my name is MIN0. I use next.js</p>
      <Link to="/">
        <Button fg={'red'}>상세 3번페이지</Button>
      </Link>
    </div>
  );
}

import './App.css';
import ProfileCard from './components/ProfileCard';
import profileImg from './assets/images/zi-a.png';

function App() {
  return (
    <div className="main-container">
      <h1 className="title">곽은주의 리액트 ✨</h1>

      <ProfileCard
        image={profileImg}
        name="곽은주"
        description="멍멍이를 사랑하는 개발자입니다."
      />

      <div className="link-area">

        <a
          className="link-button"
          href="https://coffee2-xi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ☕ coffee - 기초
        </a>
      </div>
    </div>
  );
}

export default App;

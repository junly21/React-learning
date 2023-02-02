import { useParams } from "react-router-dom";

const data = {
  jaejoon: {
    name: "이재준",
    description: "개발 공부중",
  },
  soyeon: {
    name: "김소연",
    description: "롯데 재직중",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.names];

  return (
    <div>
      <hi>사용자 프로필</hi>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;

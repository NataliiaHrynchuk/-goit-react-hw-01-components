import { Profile } from "components/Profile";
import user from "components/user.json";


export const App = () => {
  return (
    <div>
      <Profile user={user}/>
    </div>
  );
};

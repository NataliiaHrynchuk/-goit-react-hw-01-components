import user from "components/Profile/user.json";
import data from 'components/Statistics/data.json';
import friends from "components/FriendList/friends.json";

import { Profile } from "components/Profile/Profile";
import {Statistics} from 'components/Statistics/Statistics';
import { FriendList } from "components/FriendList/FriendList";
export const App = () => {
  return (
    <div>
      <Profile user={user}/>
      <Statistics title='Upload stats'
      stats={data}/>
      <FriendList items={friends}/>
    </div>
  );
};

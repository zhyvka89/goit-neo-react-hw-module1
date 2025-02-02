import FriendListItem from '../FriendListItem/FriendListItem';
import {
  friends_list,
  friends_list_item,
} from '../FriendList/FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={friends_list}>
      {friends.map(el => {
        return (
          <li className={friends_list_item} key={el.id}>
            <FriendListItem
              avatar={el.avatar}
              name={el.name}
              isOnline={el.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default FriendList;

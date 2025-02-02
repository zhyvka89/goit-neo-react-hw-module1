import {
  item_content,
  friend_name,
  friend_status,
  green,
  red,
} from '../FriendListItem/FriendListItem.module.css';
import clsx from 'clsx';

function FriendListItem({ avatar, name, isOnline }) {
  const onlineStatus = clsx(friend_status, isOnline ? green : red);

  return (
    <div className={item_content}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={friend_name}>{name}</p>
      <p className={onlineStatus}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}

export default FriendListItem;

import styles from "./Profile.module.css";

function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={styles.card}>
      <div className={styles.card_content}>
        <img className={styles.avatar} src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats_list}>
        <li className={styles.stats_list_item}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={styles.stats_list_item}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={styles.stats_list_item}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;

import style from './UsersList.module.css';
import Card from '../UI/Card';

const UsersList = props => {
  return (
    <Card className={style.users}>
      <ul>
        {props.users.map(user => {
          return (
            <li key={user.id}>
              {user.name} ({user.age} Years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;

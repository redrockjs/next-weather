import s from './Profile.module.scss';
import Image from 'next/image';

function Profile() {
  return (
    <div className={s.Profile}>
      <div className={s.Profile__user}>
        <p>
          Hello, <br />
          <span>Alex Smith</span>
        </p>
      </div>
      <div className={s.Profile__photo}>
        <Image src="/images/avatar/avatar.png" width={60} height={60} alt="Alex Smith" />
      </div>
    </div>
  );
}

export default Profile;

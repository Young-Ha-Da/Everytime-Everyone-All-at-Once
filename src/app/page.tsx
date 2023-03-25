'use client';

import styles from './page.module.css';
import { useState } from 'react';
import { ButtonList } from '@/components';

export default function Home() {
  const [user, setUser] = useState({ id: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user.id === '이때어때@test.com' && user.password === 'k12h1k0$5;lpa@Afn') {
      alert('Correct!');
      setIsLoggedIn(true);
    } else {
      alert('Wrong!');
    }
  };

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" value={user.id} onChange={handleChange} />
        <input type="text" name="password" value={user.password} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      {isLoggedIn && <ButtonList error={false} />}
    </main>
  );
}

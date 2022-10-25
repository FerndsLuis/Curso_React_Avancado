import React from 'react';
import { useAuth } from '../context/auth';

export function ComponentB() {
  const { user } = useAuth();

  return (
    <div className={user.theme}>
      <h3>ComponentB: {user.name}</h3>
    </div>
  );
}

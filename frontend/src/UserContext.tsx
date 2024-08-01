// src/UserContext.tsx

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { auth } from './firebaseConfig';
import { onAuthStateChanged, User } from 'firebase/auth';

interface UserContextProps {
  user: User | null;
}

export const UserContext = createContext<UserContextProps>({ user: null });

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

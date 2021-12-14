import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { firebase, auth } from "../services/firebase";

type User = {
  id: string;
  name: string;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const unsubiscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { uid, displayName } = user;

        if (!displayName) {
          toast.error('Missing information from Account');
          return;
        }

        setUser({
          id: uid,
          name: displayName,
        });
      }
    })

    setPending(false);
    return () => {
      unsubiscribe();
    }
  }, []);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, uid } = result.user;

      if (!displayName) {
        throw new Error('Missing information from Google Account');
      }

      setUser({
        id: uid,
        name: displayName,
      });
    }
  }

  async function signOut() {
    return auth.signOut();
  }

  const value = {
    user,
    signInWithGoogle,
    signOut,
  }

  if (pending) {
    return (
      <>
        Loading...
      </>
    );
  }

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
}
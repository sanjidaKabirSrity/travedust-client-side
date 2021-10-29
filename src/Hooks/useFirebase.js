import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    sendPasswordResetEmail,
  } from "firebase/auth";
  import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
  import swal from "sweetalert";
  
initializeAuthentication();
  
  const useFirebase = () => {
    // states
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
  
    // auth and provider
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
  
    // google sign in
    const signInUsingGoogle = () => {
      setIsLoading(true);
      return signInWithPopup(auth, googleProvider);
      // .then((result) => {
      //   console.log(result.user);
      //   swal({
      //     title: "Successfully Sign In!!",
      //     icon: "success",
      //   });
      // })
      // .catch((error) => {
      //   swal({
      //     text: error.message,
      //     icon: "error",
      //   });
      // });
    };
    const signInUsingGithub = () => {
      setIsLoading(true);
      return signInWithPopup(auth, githubProvider);
      // .then((result) => {
      //   console.log(result.user);
      //   swal({
      //     title: "Successfully Sign In!!",
      //     icon: "success",
      //   });
      // })
      // .catch((error) => {
      //   swal({
      //     text: error.message,
      //     icon: "error",
      //   });
      // });
    };
    const logOut = () => {
      signOut(auth)
        .then(() => {
          setUser();
        })
        .catch((error) => {
          swal({
            text: error.message,
            icon: "error",
          });
        })
        .finally(() => setIsLoading(false));
    };
  
    //   create new user by email
    const createNewUserByEmail = (name, email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setUser(result.user);
          updateProfile(auth.currentUser, {
            displayName: name,
          }).then(() => {});
          swal({
            title: "Account Successfully created!!",
            text: "Please Login",
            icon: "success",
          });
        })
        .catch((error) => {
          swal({
            text: error.message,
            icon: "error",
          });
        });
    };
  
    //   login using email and password
  
    const loginWithEmail = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
      // .then((result) => {
      //   setUser(result.user);
      //   swal({
      //     title: "LogIn Successfull!!",
      //     icon: "success",
      //   });
      // })
      // .catch((error) => {
      //   swal({
      //     text: error.message,
      //     icon: "error",
      //   });
      // });
    };
  
    // password reset
    const passwordReset = (email) => {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          swal({
            text: "Reset email send, check your Inbox.",
            icon: "info",
          });
        })
        .catch((error) => {
          swal({
            text: error.message,
            icon: "error",
          });
        });
    };
  
    //   observed user
    useEffect(() => {
      const unsubscirbe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser();
        }
        setIsLoading(false);
      });
      return unsubscirbe;
    }, [auth]);
  
    return {
      signInUsingGoogle,
      signInUsingGithub,
      logOut,
      user,
      createNewUserByEmail,
      loginWithEmail,
      passwordReset,
      setIsLoading,
      isLoading,
    };
  };
  
  export default useFirebase;
  
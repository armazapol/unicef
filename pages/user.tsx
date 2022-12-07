import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "./api/features/auth/authSlice";
import { logOut } from "./api/features/auth/authSlice";
import { useRouter } from "next/router";

const User = () => {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const router = useRouter();

  const logoutSession = () => {
    router.push("/login");
    dispatch(logOut(null));
  };

  return (
    <div>
      {user ? (
        <div>
          <p> userName: {user.firstName}</p>
          <p>userLastName: {user.lastName} </p>
          <p>email: {user.email} </p>
          Hola Usuario, estas logeado..
          <p>
            <button
              className="bg-blue-500 text-white p-3 rounded-md"
              onClick={logoutSession}
            >
              logout
            </button>
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default User;

import { useUser } from "../../hooks/useUser.hook";
export const Logout = () => {
  const { user, logout } = useUser();

  if (user.role.type === "authenticated") {
    return (
      <li className="nav-list__item cursor-pointer" onClick={logout}>
        Logout
      </li>
    );
  }
  return <></>;
};

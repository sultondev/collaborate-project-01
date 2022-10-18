import { useMemo } from "react";
import { useUser } from "../../hooks/useUser.hook";
import layouts from "../../routes/Layout/Routes.layout";
import { UserStatus } from "../../typing/enums/UserStatus.enum";

export const LayoutProps = () => {
  const { user } = useUser();

  const layoutProps = useMemo(() => {
    return layouts[user.role.type.toUpperCase() as UserStatus];
  }, [user.role.type]);

  return layoutProps;
};

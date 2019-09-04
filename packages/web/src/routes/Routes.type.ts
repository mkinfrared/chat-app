import { RouteComponentProps } from "react-router-dom";

import { getUserIDSelector } from "store/reducers/user/selectors";

export interface RoutesProps extends RouteComponentProps {
  userID: ReturnType<typeof getUserIDSelector>;
}

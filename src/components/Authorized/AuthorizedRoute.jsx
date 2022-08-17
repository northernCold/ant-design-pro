import { Redirect, Route } from 'umi';
import React from 'react';
import Authorized from './Authorized';
import { IAuthorityType } from './CheckPermissions';

interface AuthorizedRouteProps {
  currentAuthority: string;
  component: React.ComponentClass<any, any>;
  render: (props: any) => React.ReactNode;
  RedirectPath: string,
  authority: IAuthorityType;
}
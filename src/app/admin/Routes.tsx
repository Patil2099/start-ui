import React from 'react';

import { Switch, useRouteMatch } from 'react-router-dom';

import { PageUserManagement } from '@/app/admin/PageUserManagement';
import { Route } from '@/app/router';
import { Error404 } from '@/errors';

export const AdminRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route
        exact
        path={`${path}/user-management`}
        render={() => <PageUserManagement />}
      />
      <Route path="*" render={() => <Error404 />} />
    </Switch>
  );
};

import React from 'react';

import ClientModule from '@gqlapp/module-client-react';
import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';

import { Route, NavLink } from 'react-router-dom';
import { MenuItem } from '@gqlapp/look-client-react';
import Editor from './containers/Editor';
import resources from './locales';

const NavLinkWithI18n = translate('editor')(({ t }: { t: TranslateFunction }) => (
  <NavLink to="/editor" className="nav-link" activeClassName="active">
    {t('editor:navLink')}
  </NavLink>
));

export default new ClientModule({
  route: [<Route exact path="/editor" component={Editor} />],
  navItem: [
    <MenuItem key="/editor">
      <NavLinkWithI18n />
    </MenuItem>
  ],
  localization: [{ ns: 'editor', resources }]
});

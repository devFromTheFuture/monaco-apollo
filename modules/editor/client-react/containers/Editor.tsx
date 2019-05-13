import React from 'react';

import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import EditorView from '../components/EditorView';

interface EditorProps {
  t: TranslateFunction;
}

class Editor extends React.Component<EditorProps> {
  public render() {
    return <EditorView {...this.props} />;
  }
}

export default translate('editor')(Editor);

import React from 'react';
import type { Context } from '@jupyterlab/docregistry';
import { ABCWidgetFactory, DocumentWidget } from '@jupyterlab/docregistry';
import { ReactWidget } from '@jupyterlab/apputils';
import { h5webIcon } from './icons';
import H5webApp from './H5webApp';

export class H5webWidget extends ReactWidget {
  private readonly filePath: string;
  private readonly token: string;

  public constructor(filePath: string, token: string) {
    super();
    this.addClass('jp-ReactWidget');
    this.filePath = filePath;
    this.token = token;
    this.title.icon = h5webIcon;
  }

  public render(): JSX.Element {
    return <H5webApp filePath={this.filePath} token={this.token} />;
  }
}

class H5webWidgetFactory extends ABCWidgetFactory<DocumentWidget> {
  protected createNewWidget(context: Context): DocumentWidget {
    const { path } = context;
    const content = new H5webWidget(path, "environ");
    return new DocumentWidget({ context, content });
  }
}

export default H5webWidgetFactory;

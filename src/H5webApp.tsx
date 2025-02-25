import React, { useEffect, useState } from 'react';
import { App, getFeedbackMailto, H5GroveProvider } from '@h5web/app';
import { ServerConnection } from '@jupyterlab/services';

const FEEDBACK_EMAIL = 'h5web@esrf.fr';

function TwoRenderApp() {
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  if (isFirstRender) {
    return null;
  }

  return (
    <App
      getFeedbackURL={(context) => getFeedbackMailto(context, FEEDBACK_EMAIL)}
      disableDarkMode
    />
  );
}

function H5webApp(props: { filePath: string, token: string }) {
  const { filePath } = props;
  const { token } = props;
  const { baseUrl } = ServerConnection.makeSettings();

  return (
    <div className="h5web-root">
      <H5GroveProvider
        url={`${baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl}/h5web`}
        filepath={filePath}
        token={token}
        axiosConfig={{ params: { file: filePath } }}
      >
        <TwoRenderApp />
      </H5GroveProvider>
    </div>
  );
}

export default H5webApp;

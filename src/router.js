import BrowserRouter from 'react-router-dom/BrowserRouter';
import StaticRouter from 'react-router/StaticRouter';

import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';

export const history = typeof document !== 'undefined' ? createBrowserHistory() : createMemoryHistory();
export default typeof document !== 'undefined' ? BrowserRouter : StaticRouter;

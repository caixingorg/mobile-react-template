import React, { useEffect } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import routes from "./routes";
import Navigation from "./components/Navigation";
import OfflineStatus from "./components/OfflineStatus";
import { ErrorBoundary } from "./utils/errorHandler";
import styles from "./App.module.less";
import { Workbox } from "workbox-window";
import { csp } from "./utils/security";
const AppRoutes: React.FC = () => {
  const element = useRoutes(routes);
  return element;
};

const App: React.FC = () => {
  useEffect(() => {
    // 应用内容安全策略
    Object.entries(csp).forEach(([key, value]) => {
      document.head.appendChild(
        Object.assign(document.createElement("meta"), {
          httpEquiv: "Content-Security-Policy",
          content: `${key} ${value.join(" ")}`,
        })
      );
    });
  }, []);
  //
//   useEffect(() => {
//     if ("serviceWorker" in navigator) {
//       const wb = new Workbox("/sw.js");
//       wb.register();
//     }
//   }, []);
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }, []);
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Router>
          <div className={styles.app}>
            <div className={styles.content}>
              <AppRoutes />
            </div>
            <Navigation />
          </div>
        </Router>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;

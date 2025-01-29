import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'
import App from './App.jsx'
import { AuthProvider } from './components/AuthContext.jsx';

if (import.meta.env.MODE === "production") {
  const disableReactDevTools = () => {
    const noop = () => undefined;
    const DEV_TOOLS = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (typeof DEV_TOOLS === "object") {
      for (let key in DEV_TOOLS) {
        DEV_TOOLS[key] = typeof DEV_TOOLS[key] === "function" ? noop : null;
      }
    }
  };

  // Ensure it runs after the page has loaded
  window.addEventListener("load", disableReactDevTools);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
);

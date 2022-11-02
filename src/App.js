import "./App.css";
import React from "react";
import { AllRoutes } from "./exports/Exports";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./exports/Exports";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AllRoutes />
    </ErrorBoundary>
  );
}

export default App;

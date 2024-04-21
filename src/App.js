import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Repolist from "./pages/Repolist";
import NotFound from "./components/NotFound";
import RepoDetails from "./pages/RepoDetail";

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Repolist />} />
        <Route path="/repo/:repoName" element={<RepoDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import ClientDetails from "./components/ClientDetails";
import ObservationForm from "./components/Observationform";
import ClientProfile from "./components/Profile";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ClientDetails />} />
        <Route path="/clientProfile" element={<ClientProfile />} />
        <Route path="/clientObservation" element={<ObservationForm />} />
      </Routes>
    </div>
  )
}
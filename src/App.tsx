import { Outlet, Link } from "react-router-dom";
import { Items } from './Routing/Menu'
export default function App() {
  return (
    <div>
      <h1>Application</h1>
      {Items.map(item => (
      <nav>
        <Link to={item.endpoint}>{item.label}</Link> |{" "}
      </nav>
      ))}
      <Outlet />
    </div>
  );
}
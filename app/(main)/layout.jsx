import RightWidget from "../components/common/RightWidget";
import MainApp from "../components/layouts/MainApp";
import Sidebar from "../components/layouts/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MainApp pageComponent={children} />
      <RightWidget />
    </div>
  );
};

export default MainLayout;

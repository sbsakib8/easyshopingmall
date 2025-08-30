import DashboardNebver from "@/src/dashboard/navber/nabverComponent";
import LayoutWrapDashboard from "./LayoutWrapDashboard";

export const metadata = {
  title: "Dashboard - EasyShoppingMall",
  description: "Your one-stop online shop for everything you need.",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <DashboardNebver/>
       <LayoutWrapDashboard>{children}</LayoutWrapDashboard>
       
      </body>
    </html>
  )
}
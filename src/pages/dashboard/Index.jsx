import React from "react";

import DashboardHeader from "../../components/dashboard/dashboard-header/Index";
import DashboardBalance from "../../components/dashboard/dashboard-balance/Index";
import DashboardOverview from "../../components/dashboard/dashboard-overview/Index";
import DashboardCustomers from "../../components/dashboard/dashboard-customers/Index";
import DashboardSellings from "../../components/dashboard/dashboard-sellings/Index";

export default function Index() {
  return (
    <section>
      <DashboardHeader />
      <DashboardBalance />
      <div className="mb-10 flex justify-between">
        <DashboardOverview />
        <DashboardCustomers />
      </div>
      <DashboardSellings />
    </section>
  );
}

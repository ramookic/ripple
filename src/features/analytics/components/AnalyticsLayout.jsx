import AdminPageLayout from "../../../components/layout/AdminPageLayout";
import Heading from "../../../components/ui/Heading";
import AnalyticsDatePicker from "./AnalyticsDatePicker";
import AnalyticsOverview from "./AnalyticsOverview";
import { useUser } from "../../authentication/hooks/useUser";
import { useState } from "react";
import { useGetAnalytics } from "../hooks/useGetAnalytics";
import SkeletonAdminContainer from "../../../components/skeleton/SkeletonAdminContainer";
import AnalyticsTopLinks from "./AnalyticsTopLinks";
import { useGetLinks } from "../../links/hooks/useGetLinks";
import AnalyticsTopDevices from "./AnalyticsTopDevices";
import AnalyticsSocialIcons from "./AnalyticsSocialIcons";
import AnalyticsTopLocations from "./AnalyticsTopLocations";

function AnalyticsLayout() {
  const [timeSpan, setTimespan] = useState("last7days");
  const { user } = useUser();
  const { data, isPending, refetch } = useGetAnalytics(user.id, timeSpan);
  const { links, isPending: isPendingLinks } = useGetLinks(user.id);

  function handleChange(e) {
    setTimespan(e.target.value);
    refetch();
  }

  return (
    <AdminPageLayout>
      <AnalyticsOverview />
      <AnalyticsDatePicker timeSpan={timeSpan} handleChange={handleChange} />
      {isPending || isPendingLinks ? (
        <>
          <SkeletonAdminContainer />
          <SkeletonAdminContainer />
          <SkeletonAdminContainer />
          <SkeletonAdminContainer />
        </>
      ) : (
        <>
          <Heading>Top Performing Links</Heading>
          <AnalyticsTopLinks links={links} linksAnalytics={data.links} />
          <Heading>Top Locations</Heading>
          <AnalyticsTopLocations
            viewsAnalytics={data.visits}
            clicksAnalytics={data.links}
          />
          <Heading>Top Devices</Heading>
          <AnalyticsTopDevices
            viewsAnalytics={data.visits}
            clicksAnalytics={data.links}
          />
          <Heading>Social Icons</Heading>
          <AnalyticsSocialIcons socialIconsAnalytics={data.socialIcons} />
        </>
      )}
    </AdminPageLayout>
  );
}

export default AnalyticsLayout;

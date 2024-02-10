import UpcomingTripPage from "@/components/pages/trips/UpcomingTripPage";
import client from "@/tina/__generated__/client";

export default async function TripUpcoming(props: {params: {trip: [string]} }) {
  const { trip } = props.params;

  const documentPath = `${trip[0]}.md`;

  const result = await client.queries.tripupcoming({ relativePath: documentPath})
  return <UpcomingTripPage 
            data={result.data} 
            query={result.query}
            variables={result.variables}
          />;
}

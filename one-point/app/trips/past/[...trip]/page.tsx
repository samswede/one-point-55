import PastTripPage from "@/components/pages/trips/PastTripPage";
import client from "@/tina/__generated__/client";

export default async function TripPast(props: {params: {trip: [string]} }) {
  const { trip } = props.params;

  //console.log("trip: ", trip);
  //console.log("trip[0]: ", trip[0])

  const documentPath = `${trip[0]}.md`;

  //console.log("documentPath: ", documentPath);

  const result = await client.queries.trippast({ relativePath: documentPath})
  return <PastTripPage 
            data={result.data} 
            query={result.query}
            variables={result.variables}
          />;
}

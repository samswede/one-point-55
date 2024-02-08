import HomePage from "@/components/pages/home/homePage";
import client from "@/tina/__generated__/client";

export default async function Home() {
  const res = await client.queries.page({ relativePath: "testPage.json"})
  return <HomePage 
            data={res.data} 
            query={res.query}
            variables={res.variables}
          />;
}

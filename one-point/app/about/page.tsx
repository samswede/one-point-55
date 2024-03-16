import AboutPage from "@/components/pages/about/aboutPage";
import client from "@/tina/__generated__/client";

export default async function Page() {

  const res = await client.queries.about({ relativePath: 'About.md' })
  return <AboutPage 
            data={res.data} 
            query={res.query}
            variables={res.variables}
          />;
}
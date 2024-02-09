import ImpressumPage from "@/components/pages/impressum/ImpressumPage";
import client from "@/tina/__generated__/client";

export default async function Page() {

  const res = await client.queries.impressum({ relativePath: 'Impressum.md' })
  return <ImpressumPage 
            data={res.data} 
            query={res.query}
            variables={res.variables}
          />;
}
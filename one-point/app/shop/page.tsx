
import client from "@/tina/__generated__/client";

import ShopPage from "@/components/pages/shop/shopPage";

export default async function Shop() {
  const result = await client.queries.shop({ relativePath: "Shop.md"})
  return <ShopPage 
  data={result.data} 
  query={result.query}
  variables={result.variables}
/>;
}



/*
<HomePage 
            data={result.data} 
            query={result.query}
            variables={result.variables}
          />;
*/
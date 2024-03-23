import ShoppingBasket from "@/components/pages/shop/ShoppingBasket";
import client from "@/tina/__generated__/client";

export default async function Page() {
  //const result = await client.queries.shop({ relativePath: "Shop.md"})
  return <ShoppingBasket />
}



/*
<HomePage 
            data={result.data} 
            query={result.query}
            variables={result.variables}
          />;
*/
import { Component, For } from "solid-js";
import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card";
import { Star } from "lucide-solid";
import { A } from "@solidjs/router";
const ProductsPage: Component<{}> = (props) => {
  return <main class="grid grid-cols-2 md:grid-cols-4 p-4 gap-5">
    <For each={[1,2,3,4,5]}>
      {() => (
        <A href="/products/test">
        <Card>
          <CardHeader class="p-0 rounded-md">
            <img class="rounded-t-md" src="https://images.unsplash.com/photo-1708443683334-1e41c52f33ac?q=80&w=560&h=780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </CardHeader>
          <CardContent class="p-4 flex flex-col gap-2.5">
            <h4>Camo Blend Jacket</h4>
            <span class="lead">Men's Jackets</span>
            <span class="large">$40</span>
            <div class="flex flex-row items-center">
              <For each={[1, 2, 3, 4, 5]}>
                {(_) => (
                  <Star size={16} />
                )}
              </For>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        </A>
      )}
    </For>
  </main>;
};

export default ProductsPage;

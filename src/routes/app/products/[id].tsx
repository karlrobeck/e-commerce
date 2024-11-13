import { ShoppingBag, Star } from "lucide-solid";
import { For } from "solid-js";
import { Component } from "solid-js";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { Button } from "~/components/ui/button";

const SpecificProduct: Component<{}> = (props) => {
  return <article class="space-y-2.5">
    <div class="flex flex-row justify-center">
      <AspectRatio ratio={16 / 9}>
        <img class="rounded-md w-full h-full object-cover" src="https://images.unsplash.com/photo-1606846848485-ea9d78f09ebe?q=80&w=560&h=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </AspectRatio>
    </div>
    <div class="space-y-5">
      <span class="lead">Men's Slippers</span>
      <h3>Mahabis Classic</h3>
      <span class="large">$40</span>
      <div class="flex flex-row items-center">
        <For each={[1, 2, 3, 4,]}>
          {() => (
            <Star size={16} />
          )}
        </For>
      </div>
      <div>
        <span>Color</span>
        <div class="flex flex-row gap-2.5">
          <Button variant={'outline'}>Black</Button>
          <Button variant={'outline'}>White</Button>
          <Button variant={'outline'}>Gray</Button>
        </div>
      </div>
      <div>
        <span>Size</span>
        <div class="grid grid-cols-4 gap-2.5">
          <For each={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}>
            {() => (
              <Button size={'sm'} variant={'outline'}>Small</Button>
            )}
          </For>
        </div>
      </div>
      <div>
        <Button class="w-full gap-2.5">
          <ShoppingBag size={16} />
          Add to cart
        </Button>
      </div>
    </div>
  </article>;
};

export default SpecificProduct;

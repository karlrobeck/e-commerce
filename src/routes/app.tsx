import { RouteSectionProps } from "@solidjs/router";
import { List, ShoppingBasket, ShoppingCart, Star } from "lucide-solid";
import { Component } from "solid-js";
import { Button } from "~/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "~/components/ui/drawer";
import { Tooltip, TooltipContent,TooltipTrigger } from "~/components/ui/tooltip";

const MainApp = (props: RouteSectionProps) => {
    return <main>
        <header class="flex flex-row items-center bg-primary p-4 justify-between">
            <div class="flex flex-row items-center gap-2.5">
                <ShoppingCart />
                <span class="large">
                    Shopping Mall
                </span>
            </div>
            <Tooltip>
                <TooltipTrigger>
                    <ShoppingBasket />
                </TooltipTrigger>
                <TooltipContent>
                    Cart
                </TooltipContent>
            </Tooltip>
        </header>
        <div class="p-4">
            {props.children}
        </div>
    </main>;
};

export default MainApp;
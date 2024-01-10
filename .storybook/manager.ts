import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
    theme: create({ 
        base: "dark", 
        brandTitle: "Life",     
        brandUrl: "https://github.com/Popoyoko/popoyoko-ui",
        brandImage: "/logo.svg",
        brandTarget: '_self',
    }),
});
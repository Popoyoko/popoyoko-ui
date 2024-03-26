import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';
import './storybook-custom.css';

addons.setConfig({
    theme: create({ 
        base: "dark", 
        brandTitle: "Popoyoko",     
        brandUrl: "https://github.com/Popoyoko/popoyoko-ui",
        brandImage: "/logo.svg",
        brandTarget: '_self',

        colorPrimary: '#191CB1',
        colorSecondary: '#0023FC',   
        
        appBg: '#080312',
        appPreviewBg: '#080312',

        

        textColor: '#9E89DA',
        textInverseColor: '#ffffff',

        barBg: '#080312',
        barTextColor: '#191CB1',
        barSelectedColor: '#0023FC',
    }),
});
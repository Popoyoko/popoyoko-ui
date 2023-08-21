
# popoyoko-ui-vite

## This reportory is using bun instead of npm
[Installation de bun](Installation)

This is a library project linked to a storybook that includes the components of the Popoyoko design system.

### `bun run dev`

Runs the vite application in development mode.

The page will be reloaded if you make any changes.
You will also see all lint errors in the console.

### `bun run build`

Builds the application for production in the build folder.

"tsc && vite build"
"tsc" compiles the TypeScript code into JavaScript.
"vite build" builds the application for production using the Vite tool.

Your library is ready to be exported to other applications!

### `bun run preview`

Launch a local development server that allows to preview the application under development.

### `bun run storybook`

Launch the Storybook environment, a development tool for designing and testing user interface components in isolation.

port 6006 is used

### `bun run build-storybook` 

Allows you to create a build of the user interface of the application or website, using Storybook as a compilation tool.

### `bun run watch`

Launch a compilation process in "watch" mode that monitors the application's source files and automatically recompiles them as soon as there are changes.

"watch": "vite build --watch --mode development"
command launches the "vite build" command with two additional options: "--watch" and "--mode development".

The "--watch" option tells Vite to monitor the application's source files and to recompile automatically as soon as there are changes. The "--mode development" option tells Vite to compile the application in development mode


## Use in a react project

**To use Popoyoko UI Vite in your React project, follow these steps:**

 Install the package using your package manager of choice (bun, npm or yarn):

 ### `bun install popoyoko-ui-vite`

Now you can import the desired components from the library

For example :
```bash 
    import { Information } from "vite-popoyoko";
```
 You can easily view all components and their props directly in the storybook.

# Learn More

You can learn more in the [Vite documentation](https://vitejs.dev/guide/ )



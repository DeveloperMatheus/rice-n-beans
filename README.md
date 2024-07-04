# Welcome Rice and Beans!

## Rice and Beans is a list of components (inspired by Shadcn) using React and Typescript and a few libraries, that are meant to be simple, used with HTML5 (if it is possible), and with a certain degree of flexibility.

## Instalation

First, you need to install the following libs:

- `tailwindcss`: Make a normal installation from this one, your React framework might have a CLI to do this. See: https://tailwindcss.com/docs/installation/framework-guides
- `tailwind-merge`: This is an utility function used to merge the classNames and not have any conflicts. See: https://github.com/dcastil/tailwind-merge
- `class-variance-authority`: This is a lib that allows us to have more control of our tailwind classNames (and write more ergonomic code using typescript). See: https://cva.style/docs

After that, just copy and paste from the docs, and you're good to go!

### The reason:

I feel that we can do components that can have a more "life expectancy" by using what we have, the HTML5.

So that means, to make a component inside of this list, i had taken a few rules into account:

> I cannot install a lib for one unique component: The few libs/deps that are installed, are for all components, or i don't install it.

> If an idea of a component is listed on the Mozilla for Devs for example, and it is possible to make an idea of customization (even if it is parcial), and, it has a nice support for modern browsers, it is mandatory that i have to pick from the native HTML5 rather than building from scratch.

> The components should to be accesible, whether from the HTML5 or built from scratch.

> The components also should have at least one prop for the className (because they're built using Tailwind), preferably, using the forwardRefs function.

> Last but not least, the components should be built using the composition pattern (if we need more than one element). I'm allowed to use some client side processing such as useState/useRef/ContextAPI (But the rule 2 needs to be checked before doing this).

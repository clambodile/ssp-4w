Data Structures

What makes any system useful? A useful system organizes a set of components in a way that converts inputs into valuable outputs.

To design a system, you must model a given problem space well enough to useful things within it. 

For example, let's say you are designing a system to prepare and serve food for profit. There are many types of such systems, but let's say we are talking about a restaurant. 

Naturally you have many factors to consider, such as sourcing ingredients, food safety, hiring procedures, recipes, interior design, space selection and rental, menu design, marketing, kitchen design, preparation processes, quality control, meeting regulatory and legal requirements, managing shifts, bookkeeping, payroll, and on and on and on, hundreds of factors.

Each of those factors is itself almost endlessly complex in its full, rich reality.

Take a single dining table in your restaurant.

That table has thousands of characteristics, depending literally on how you look at it. The grain of its wood, its unique set of tiny nicks and scratches, the angle at which it very, very slightly leans if you measure it with a surface level, the degree of friction between the bottom of its legs and the flooring, the exact chemical makeup of each material in its constructions, how much weight it will support before collapsing, and so on.

However, very few of those thousands of attributes will really matter to you for "system design" of your restaurant though. What you probably care about are things like: color, dimensions, style, price. Those are the attributes that are important to consider, because that table is really only evaluated and meaningful as a component in a larger system. The table component must fit in with other components, such as the chair component, the carpeting component, the decorating-budget component, the size-of-room component, the target-party-size component, etc.

As a restaurant designer, you are creating and manipulating abstract mental models of all those components. You are generating an abstraction of the table even if you are examining it in real life. It *is* a real dining table sitting in front of you in the Williams Sonoma showroom, but it's really becoming a system component in your mind. It's becoming what we might call... a DiningTable. As programmers we could think of the restaurant designer's thought process as:  "hmm... we could have 15 of these DiningTables, with variations like FourPersonDiningTable and TwoPersonDiningTable and EightPersonDiningTable, arranged in such-and-such ways in the MainDiningRoom and the SecondaryDiningRoom..."

(Of course, very few non-programmers would ever "meta-think" about their thinking in quite that way. It's very "progammer-y". But it's one way of understanding the thought process that leads to a well-designed system.)

For a restaurant designer, you can probably stop at that level of abstraction. You don't need to break things down further into sub-components to build your food-serving system. You can just place an order for the tables you want and move on.

However it only works that conveniently because in the physical world, you get a crap-ton of ready-made structure to work with.  Physical objects are what they are. Williams-Sonoma actually exists and is ready to serve your furniture-buying needs.

As programmers designing a computer system, there is no equivalent of chairs and tables and Williams Sonoma and smart, nuanced people who could be workers or managers or whatnot. You start with almost nothing.

Almost by definition, there is nothing concrete in a computer system.  It's all abstractions to begin with. A "variable" is an abstraction. A "function" is an abstraction.  An "array" is an abstraction.  From a small collection of such basic abstractions, we laboriously build up small, just-enough-to-be-useful models of the endlessly-rich real world. Those small models become components in our system. Then we make rules by which the components interact. In this way we can build systems that eventually produce output that's relevant to humans.

Because these components are all abstract, they aren't constrained by physical limitations in the same way that a physical system is. 

This is the essence of our power as programmers. We model reality in a way amendable to automated processing, and because it's automated and relatively unconstrained by physical limits, it can scale tremendously. A few programmers can build a system that serves hundreds of millions of people.

Since we are working with abstractions at every level of these software systems (until it gets to the actual human users) it behooves us to thoroughly understand the simple abstractions which are at the base of everything we build.

We need to understand data structures. 
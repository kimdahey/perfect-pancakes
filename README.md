## how to access

Perfect Pancakes is accessible via the link https://kimdahey.github.io/perfect-pancakes.
All pancake descriptions came from this lovely Spoon University article, https://spoonuniversity.com/place/50-deliciously-diverse-pancakes-from-around-the-world.

## information

Perfect Pancakes is the ideal way to keep track of your multicultural flapjack content. Pancakes come in a wide array of shapes and sizes and flavors that reflects the diversity of the countries they come from. This page is a fun way to sort and salivate over a(n admittedly limited) selection of pancakes, and to promote the overwhelming popularity of this humble breakfast food.

## interface relates to the design principles learned in class

I included as many design principles in the creation of this site as possible. I allowed the user significant control and freedom in viewing pancake information by giving them several different ways to filter and sort the pancakes on the site. To aid in error recovery, all of these filter and sort options are easily reversible because of the way that they can be modified -- for filters, you select the option you want on the (clearly labeled) dropdown menu, and the single sort option is a toggle button to enable/disable alphabetization at the user's discretion.

Visual design-wise, I chose a color scheme that closely mimicked that of the many, many pancakes the user will see on this page. I also chose to give each pancake item a golden-brown border, to further the illusion of pancake-inspired color palettes.

## how data is passed down through your components

In order to ensure that each of my necessary components (Header, FilteredList, List, Pancake) knew the data to handle, I would send the pancakes json information into the instantiation of each component (e.g. <FilteredList items={pancakes} />). From there, I would be able to access the pancake information via this.props, and thus be able to pass down the information again into a more specialized json if need be. I also made use of this.state, so that I would be able to store data that was important to keep track of within each component.

## how user interactions can trigger changes in the state of components

At the top of the page, there are two dropdown menus that let people filter the pancake entries via the continent of origin and the taste (savory / sweet). There is also a toggle button, which can enable and disable alphabetical sorting. Upon selecting a filter or sort option, the Perfect Pancakes page instantly updates the list of pancakes to fit those requirements.

## the overall goal and value of the application to a user

As someone who is a fan of breakfast foods, I was interested in the global extent of the common pancake, as well as the difference between traditional foods of different countries. Even if one is not invested in pancake diversity, it is a pleasant way to pass the time and see many delicious pancake pictures, with stunning descriptions that will make the user want to eat food. This site is recommended browsing for when a user needs to stimulate their appetite by looking at and reading about very cool pancakes from around the world.
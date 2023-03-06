import { Meta, Story } from '@storybook/react/types-6-0';
import { Recipes } from '.';
import { capitalizeFirstLetter } from 'services/utils';
import { RequestStatus } from 'contexts/RecipesProvider/types';

export default {
  title: 'Recipes',
  component: Recipes,
  args: {
    requestStatus: RequestStatus.RECIPES_SUCCESS,
    recipes: [
      {
        label: 'Lentil Curry Stew',
        image: 'https://source.unsplash.com/random/',
        ingredientLines: [
          '1 garlic clove',
          '1/2 onion',
          '1/2 cup ground beef (or quorn mince)',
          '1 carrot, minced',
          '1 cup red lentil',
          '1/2 cup edamame',
          'Chicken broth (or vegetable broth)',
          '1 tablespoon apple cider vinegar',
          '1 pinch curry powder',
          'Dashes salt and pepper to taste',
          'Splashes coconut milk',
          '1 handful small banana',
          'Handfuls dried coconut (unsweetened)',
        ],
        totalTime: 116,
        cuisineType: capitalizeFirstLetter('indian'),
      },
    ],
    searchedIngredients: ['chicken', 'banana', 'onion'],
  },
} as Meta;

export const Template: Story = (args) => <Recipes {...args} />;

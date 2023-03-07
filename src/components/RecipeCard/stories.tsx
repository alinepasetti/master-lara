import { Meta, Story } from '@storybook/react/types-6-0';
import { RecipeCard, RecipeCardProps } from '.';
import { capitalizeFirstLetter } from 'services/utils';

export default {
  title: 'RecipeCard',
  component: RecipeCard,
  args: {
    data: {
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
      searchedIngredients: ['chicken', 'banana', 'onion'],
      id: '5cb28f4bea3d415932a69057d94d2bfc',
    },
  },
  argTypes: {
    label: { type: 'string' },
    image: { type: 'string' },
  },
} as Meta;

export const Template: Story<RecipeCardProps> = (args) => (
  <RecipeCard {...args} />
);

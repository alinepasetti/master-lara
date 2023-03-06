import { RecipeResponse } from './types';

export const data: RecipeResponse = {
  q: 'chicken, banana, onion',
  from: 0,
  to: 10,
  more: true,
  count: 159,
  hits: [
    {
      recipe: {
        uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_ad981673c2e76c13f2f52790aac9ce2e',
        label: 'Lentil Curry Stew',
        image:
          'https://edamam-product-images.s3.amazonaws.com/web-img/118/118223befb94d9b55c18d83759d5a3a3.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLWVhc3QtMSJHMEUCICcMTInUFd5WHn8eM6hbx7x8qTeT3Dz7f9Wwt%2B3nRlhwAiEA211Q%2Bw87SJ%2BXxNElzfhpslDGblBaK6UnKHftu6GzA1cquAUIGxAAGgwxODcwMTcxNTA5ODYiDMnU%2BLwPsJo6XaLvuSqVBVI8xhmmKizZt1cmVALGcAVcd4C7ZLVE%2BuMiKHn2PZXB%2BMnaDncH57X%2Fa8suR1wqNIiSmfaWb74re%2FPuVvOe%2B4cqBmfbVbEQ1%2Baf5ff34tc00s5A2Q%2FMucKqlnMgMWa60as%2B3AP0ObmmW2oSEUqE6PpRiVDDIuJKaVAq0d5bffmoltWO9dOWGrCS%2F5X%2Bq%2FbU%2BO%2F1xW3IndPYPPGbvfZ%2BhbH2KGPKiOjgo%2FMpwtAcwMHlnJDRrntjThx2VI6E1au1%2FRhlj%2B7s6lLS%2FJjykgQV4HkZhzGs2MRC%2BhouIGPe1LSEYAM6ORT65QXN6QJRwC38j7keJwF61CxCFeMFcyAJtolGW2%2BTWvE%2FOKMgOtodgTmvyCNpEHndQG9RHlG1Kz0R7a%2F7c7qFiRciUAGM7ipnh1LmTIVvak1d51ZqxOFgpLm7e0iMlUNxOy9C0l0BGwRV%2FAnaLQyqJUWZ2OzsbTyiGQMFS9cIif%2Fa69P7oQ5Ryh3m0YgYk%2Bo3j36k4ceLd2Ua6UTkKvvXt1PpOqzXZ6l6OOBbNYMubwdjxpSRYAX1bH8u7SgnTMaw0fqi%2F4T5VhwH8b9fPq71x1BXnE4c6dkWAED02wVcuz%2FleU0W321bJ3w6W59tiOrV5c0%2BY7hhXNiT99%2BpuxmMW2WRZrDULd0R3RLwL3bBVdKPxfvjiCT29LqBVk6WMaUEYpFjZnMUJ1ExwkgrAJtEV64Fzth%2F7NDLL%2BJw1nTcJtwSC0Df3qdFr2Is8RMPVygyjO2wFVrlw%2Fgf3brjLoh3bnI1rsWwUi60RxJhimF2DoQSrh94hJlMqxyLYUfC%2FdqEfq7DDf2nJ%2B3%2BeHe%2FC8jt%2F6mBG9EBFtFR2PFRxU0%2FVeJMHCKcfBgyYolZub%2FXF08wlMSYoAY6sQGMVHqTUwsPeoBVd6cthlfE4do7zM55L9AkKL%2Fq%2FdSrCJyx9M4ZfXg33P9sRmGqZ9ihhhlx2bFsfraOzIXeT%2B%2BfPktGf%2Bcmuh77Tm2XLscE1wyE3CtI193LKzn2aF%2BajmuTlEt%2BF59oPPlBglUW7VII6rbb3UgCwy%2FlHNauCAtJPz%2BIogZNf8%2Ffw5K0HtwPWL%2FM9ItbX6oRLWBANcPHGpv4%2BR9fL1jhEFroRRwtEl5FoKQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230306T174612Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMKVFZ7UA%2F20230306%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9dcc69345f80410dfe5872a334057332e00a4f606c404426473ac1665038371b',
        source: 'Food52',
        url: 'https://food52.com/recipes/8458-lentil-curry-stew',
        shareAs:
          'http://www.edamam.com/recipe/lentil-curry-stew-ad981673c2e76c13f2f52790aac9ce2e/chicken%2C+banana%2C+onion',
        yield: 2,
        dietLabels: [],
        healthLabels: [
          'Peanut-Free',
          'Tree-Nut-Free',
          'Alcohol-Free',
          'Sulfite-Free',
        ],
        cautions: ['Tree-Nuts', 'Sulfites'],
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
        ingredients: [
          {
            text: '1 garlic clove',
            weight: 3,
            foodCategory: 'vegetables',
            foodId: 'food_avtcmx6bgjv1jvay6s6stan8dnyp',
            image:
              'https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg',
          },
        ],
        calories: 1211.0510000005602,
        totalWeight: 644.1000000002024,
        totalTime: 116,
        cuisineType: ['indian'],
        mealType: ['lunch/dinner'],
        dishType: ['main course'],
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 1211.0510000005602,
            unit: 'kcal',
          },
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 60.552550000028006,
            unit: '%',
          },
        },
        digest: [
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 77.70838750002494,
            hasRDI: true,
            daily: 155.41677500004988,
            unit: 'g',
          },
        ],
      },
    },
    {
      recipe: {
        uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_5cb28f4bea3d415932a69057d94d2bfc',
        label: 'Lamb Banana Curry',
        image:
          'https://edamam-product-images.s3.amazonaws.com/web-img/a14/a146d99d3d3106bf4ac8b8e07386ada0.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLWVhc3QtMSJHMEUCICcMTInUFd5WHn8eM6hbx7x8qTeT3Dz7f9Wwt%2B3nRlhwAiEA211Q%2Bw87SJ%2BXxNElzfhpslDGblBaK6UnKHftu6GzA1cquAUIGxAAGgwxODcwMTcxNTA5ODYiDMnU%2BLwPsJo6XaLvuSqVBVI8xhmmKizZt1cmVALGcAVcd4C7ZLVE%2BuMiKHn2PZXB%2BMnaDncH57X%2Fa8suR1wqNIiSmfaWb74re%2FPuVvOe%2B4cqBmfbVbEQ1%2Baf5ff34tc00s5A2Q%2FMucKqlnMgMWa60as%2B3AP0ObmmW2oSEUqE6PpRiVDDIuJKaVAq0d5bffmoltWO9dOWGrCS%2F5X%2Bq%2FbU%2BO%2F1xW3IndPYPPGbvfZ%2BhbH2KGPKiOjgo%2FMpwtAcwMHlnJDRrntjThx2VI6E1au1%2FRhlj%2B7s6lLS%2FJjykgQV4HkZhzGs2MRC%2BhouIGPe1LSEYAM6ORT65QXN6QJRwC38j7keJwF61CxCFeMFcyAJtolGW2%2BTWvE%2FOKMgOtodgTmvyCNpEHndQG9RHlG1Kz0R7a%2F7c7qFiRciUAGM7ipnh1LmTIVvak1d51ZqxOFgpLm7e0iMlUNxOy9C0l0BGwRV%2FAnaLQyqJUWZ2OzsbTyiGQMFS9cIif%2Fa69P7oQ5Ryh3m0YgYk%2Bo3j36k4ceLd2Ua6UTkKvvXt1PpOqzXZ6l6OOBbNYMubwdjxpSRYAX1bH8u7SgnTMaw0fqi%2F4T5VhwH8b9fPq71x1BXnE4c6dkWAED02wVcuz%2FleU0W321bJ3w6W59tiOrV5c0%2BY7hhXNiT99%2BpuxmMW2WRZrDULd0R3RLwL3bBVdKPxfvjiCT29LqBVk6WMaUEYpFjZnMUJ1ExwkgrAJtEV64Fzth%2F7NDLL%2BJw1nTcJtwSC0Df3qdFr2Is8RMPVygyjO2wFVrlw%2Fgf3brjLoh3bnI1rsWwUi60RxJhimF2DoQSrh94hJlMqxyLYUfC%2FdqEfq7DDf2nJ%2B3%2BeHe%2FC8jt%2F6mBG9EBFtFR2PFRxU0%2FVeJMHCKcfBgyYolZub%2FXF08wlMSYoAY6sQGMVHqTUwsPeoBVd6cthlfE4do7zM55L9AkKL%2Fq%2FdSrCJyx9M4ZfXg33P9sRmGqZ9ihhhlx2bFsfraOzIXeT%2B%2BfPktGf%2Bcmuh77Tm2XLscE1wyE3CtI193LKzn2aF%2BajmuTlEt%2BF59oPPlBglUW7VII6rbb3UgCwy%2FlHNauCAtJPz%2BIogZNf8%2Ffw5K0HtwPWL%2FM9ItbX6oRLWBANcPHGpv4%2BR9fL1jhEFroRRwtEl5FoKQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230306T174612Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMKVFZ7UA%2F20230306%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4dd2ba205ca1f133ad90021c695a3a9e8b54a168049d4268e695b3bcd689e744',
        source: 'Tasting Table',
        url: 'https://www.tastingtable.com/entry_detail/chefs_recipes/6416/A_sweet_savory_twist_on_Southwestern_game.htm',
        shareAs:
          'http://www.edamam.com/recipe/lamb-banana-curry-5cb28f4bea3d415932a69057d94d2bfc/chicken%2C+banana%2C+onion',
        yield: 4,
        dietLabels: [],
        healthLabels: ['Mediterranean', 'Peanut-Free', 'Tree-Nut-Free'],
        cautions: ['Sulfites'],
        ingredientLines: [
          '¼ cup sweet yellow curry powder',
          '2 tablespoons extra-virgin olive oil',
          '1 cup finely chopped yellow onion (about 1 medium onion)',
          '2 tablespoons finely chopped fresh ginger (about 1½-inch piece of ginger)',
          '4 cloves finely chopped garlic',
          '2½ pounds lamb shoulder, cut into 1-inch cubes',
          '2 bananas, peeled and cut into ½-inch slices',
          '1 tablespoon ground cumin',
          '1 tablespoon ground coriander',
          '1 cup dry red wine',
          '6 cups chicken stock',
          'Kosher salt and freshly ground black pepper',
          '2 cups cooked jasmine rice, for serving',
        ],
        ingredients: [
          {
            text: '¼ cup sweet yellow curry powder',
            weight: 25.200000000426055,
            foodCategory: 'Condiments and sauces',
            foodId: 'food_ao4koeoajh7yjxaq2knzrbv55y8o',
            image:
              'https://www.edamam.com/food-img/9ce/9ce02a2887385fd2adaec8dd8adcf9c5.jpg',
          },
        ],
        calories: 4813.765782366473,
        totalWeight: 3668.3597084461067,
        totalTime: 150,
        cuisineType: ['indian'],
        mealType: ['lunch/dinner'],
        dishType: ['main course'],
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 4813.765782366473,
            unit: 'kcal',
          },
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 240.68828911832364,
            unit: '%',
          },
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 298.17901238702325,
            hasRDI: true,
            daily: 458.73694213388194,
            unit: 'g',
          },
        ],
      },
    },
    {
      recipe: {
        uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_a1404e1f0b1cf669727dea4538130860',
        label: 'Yucatán Lime And Chicken Soup',
        image:
          'https://edamam-product-images.s3.amazonaws.com/web-img/d84/d8419e926431befa0d36f812af815a3e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLWVhc3QtMSJHMEUCICcMTInUFd5WHn8eM6hbx7x8qTeT3Dz7f9Wwt%2B3nRlhwAiEA211Q%2Bw87SJ%2BXxNElzfhpslDGblBaK6UnKHftu6GzA1cquAUIGxAAGgwxODcwMTcxNTA5ODYiDMnU%2BLwPsJo6XaLvuSqVBVI8xhmmKizZt1cmVALGcAVcd4C7ZLVE%2BuMiKHn2PZXB%2BMnaDncH57X%2Fa8suR1wqNIiSmfaWb74re%2FPuVvOe%2B4cqBmfbVbEQ1%2Baf5ff34tc00s5A2Q%2FMucKqlnMgMWa60as%2B3AP0ObmmW2oSEUqE6PpRiVDDIuJKaVAq0d5bffmoltWO9dOWGrCS%2F5X%2Bq%2FbU%2BO%2F1xW3IndPYPPGbvfZ%2BhbH2KGPKiOjgo%2FMpwtAcwMHlnJDRrntjThx2VI6E1au1%2FRhlj%2B7s6lLS%2FJjykgQV4HkZhzGs2MRC%2BhouIGPe1LSEYAM6ORT65QXN6QJRwC38j7keJwF61CxCFeMFcyAJtolGW2%2BTWvE%2FOKMgOtodgTmvyCNpEHndQG9RHlG1Kz0R7a%2F7c7qFiRciUAGM7ipnh1LmTIVvak1d51ZqxOFgpLm7e0iMlUNxOy9C0l0BGwRV%2FAnaLQyqJUWZ2OzsbTyiGQMFS9cIif%2Fa69P7oQ5Ryh3m0YgYk%2Bo3j36k4ceLd2Ua6UTkKvvXt1PpOqzXZ6l6OOBbNYMubwdjxpSRYAX1bH8u7SgnTMaw0fqi%2F4T5VhwH8b9fPq71x1BXnE4c6dkWAED02wVcuz%2FleU0W321bJ3w6W59tiOrV5c0%2BY7hhXNiT99%2BpuxmMW2WRZrDULd0R3RLwL3bBVdKPxfvjiCT29LqBVk6WMaUEYpFjZnMUJ1ExwkgrAJtEV64Fzth%2F7NDLL%2BJw1nTcJtwSC0Df3qdFr2Is8RMPVygyjO2wFVrlw%2Fgf3brjLoh3bnI1rsWwUi60RxJhimF2DoQSrh94hJlMqxyLYUfC%2FdqEfq7DDf2nJ%2B3%2BeHe%2FC8jt%2F6mBG9EBFtFR2PFRxU0%2FVeJMHCKcfBgyYolZub%2FXF08wlMSYoAY6sQGMVHqTUwsPeoBVd6cthlfE4do7zM55L9AkKL%2Fq%2FdSrCJyx9M4ZfXg33P9sRmGqZ9ihhhlx2bFsfraOzIXeT%2B%2BfPktGf%2Bcmuh77Tm2XLscE1wyE3CtI193LKzn2aF%2BajmuTlEt%2BF59oPPlBglUW7VII6rbb3UgCwy%2FlHNauCAtJPz%2BIogZNf8%2Ffw5K0HtwPWL%2FM9ItbX6oRLWBANcPHGpv4%2BR9fL1jhEFroRRwtEl5FoKQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230306T174612Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMKVFZ7UA%2F20230306%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=43eef38a8c8965bd886b1e8738c0a65d45861cfe00036b4ec40995fa3e4b21b3',
        source: 'Food & Wine',
        url: 'http://www.foodandwine.com/recipes/yucatan-lime-and-chicken-soup',
        shareAs:
          'http://www.edamam.com/recipe/yucat%C3%A1n-lime-and-chicken-soup-a1404e1f0b1cf669727dea4538130860/chicken%2C+banana%2C+onion',
        yield: 18,
        dietLabels: ['Low-Carb'],
        healthLabels: [
          'Sugar-Conscious',
          'Mediterranean',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Alcohol-Free',
          'Sulfite-Free',
        ],
        cautions: ['Eggs', 'Milk', 'Sulfites'],
        ingredientLines: [
          '4 medium tomatoes',
          '1 large white onion, unpeeled, plus 1/2 cup minced onion, for garnish',
          '21 garlic cloves, peeled (2 heads)',
          '3 whole chicken breasts on the bone (about 1 1/4 pounds each)',
          '3 quarts chicken stock, low-sodium broth or water',
          '2 limes, zest finely grated and limes halved, plus wedges for serving',
          '20 allspice berries',
          '1 tablespoon dried oregano, preferably Mexican, plus more for sprinkling',
          'Salt and freshly ground pepper',
          '1 cup plus 2 tablespoons vegetable oil',
          '6 large scallions, minced',
          'Twelve 6-inch corn tortillas, cut into thin strips',
          '2 banana chiles or jalapeños, seeded and minced',
        ],
        ingredients: [
          {
            text: '4 medium tomatoes',
            weight: 492,
            foodCategory: 'vegetables',
            foodId: 'food_a6k79rrahp8fe2b26zussa3wtkqh',
            image:
              'https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg',
          },
        ],
        calories: 5322.789500562203,
        totalWeight: 6046.004906458406,
        totalTime: 0,
        cuisineType: ['mexican'],
        mealType: ['lunch/dinner'],
        dishType: ['soup'],
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 5322.789500562203,
            unit: 'kcal',
          },
          FAT: {
            label: 'Fat',
            quantity: 308.70141121901634,
            unit: 'g',
          },
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 266.13947502811016,
            unit: '%',
          },
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 308.70141121901634,
            hasRDI: true,
            daily: 474.9252480292559,
            unit: 'g',
          },
        ],
      },
    },
  ],
};

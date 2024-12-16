/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timeLeft) {
  if (timeLeft === 0) {
    return "Lasagna is done.";
  } else if (timeLeft > 0) {
    return "Not done, please wait.";
  } else {
    return "You forgot to set the timer.";
  }
}
export function preparationTime(layers, averageTime = 2) {
  return layers.length * averageTime;
}


export function quantities(layers) {
  let amountOfNoodles = 0;
  let amountOfSauce = 0;
  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === "noodles") {
      amountOfNoodles += 1;
    } if (layers[i] === "sauce") {
      amountOfSauce += 1;
    } else {
      amountOfSauce += 0;
    }
  }
  return {
    noodles: amountOfNoodles * 50,
    sauce: amountOfSauce * 0.2
  };
}

export function addSecretIngredient(friendList, Mylist) {
  const secretIngredient = friendList[friendList.length - 1]
  Mylist.push(secretIngredient);
}

export function scaleRecipe(recipe, scale) {
  const newRecipe = structuredClone(recipe);
  for (let key in newRecipe) {
    newRecipe[key] = newRecipe[key] / 2 * scale;
  }
  return newRecipe;
}




document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const recipeId = urlParams.get("recipeId");
  const recipes = [
    {
      id: 1,
      name: "Ovesná kaše",
      category: 1,
      servings: 2,
      img: "img/ovesnaKase.jpg",
      ingredient: [
        { namein: "Pohanka", amount: 170, unit: "g" },
        { namein: "Vajíčka", amount: 2, unit: "ks" },
        { namein: "jogurt", amount: 120, unit: "g" },
      ],
      description:
        "Zdravá a energetická snídaně, plná vlákniny z ovesných vloček, doplněná o ovocnou sladkost banánu a křupavost ořechů. Med přidává příjemnou sladkost a dokresluje chuť.",
      direction:
        "V hrnci smíchejte ovesné vločky a mléko, vařte do změknutí. Přidejte nakrájený banán a ořechy. Podávejte s medem.",
    },
    {
      id: 2,
      name: "Kuřecí Caesar salát",
      category: 2,
      servings: 4,
      img: "img/salatCaesar.jpeg",
      ingredient: [
        { namein: "Kuřecí prsa", amount: 400, unit: "g" },
        { namein: "Hlávkový salát", amount: 1, unit: "ks" },
        { namein: "Parmezán", amount: 50, unit: "g" },
        { namein: "Krutony", amount: 50, unit: "g" },
        { namein: "Caesar dresink", amount: " ", unit: "dle chuti" },
      ],
      description:
        "Lehký a sytý oběd s výraznou chutí díky kuřecímu masu, parmezánu a šťavnatému salátu. Krutony dodávají jídlu křupavost a chuťový kontrast.",
      direction:
        "Orestujte kuřecí prsa, nakrájejte na plátky. Salát nalomte, přidejte kuřecí, parmezán a krutony. Podávejte s Caesar dresinkem.",
    },
    {
      id: 3,
      name: "Tunakový sendvič s avokádem",
      category: 4,
      servings: 2,
      img: "img/tunakAvokado.jpg",
      ingredient: [
        { namein: "Tuňák", amount: 1, unit: "konzerva (160g)" },
        { namein: "Avokádo", amount: 1, unit: "ks" },
        { namein: "Celozrnný chléb", amount: 4, unit: "plátky" },
        { namein: "Červená cibule", amount: 1 / 4, unit: "ks" },
        { namein: "Sůl", amount: " ", unit: "podle chuti" },
        { namein: "Pepř", amount: " ", unit: "podle chuti" },
      ],
      description:
        "Zdravá svačina s vysokým obsahem omega-3 mastných kyselin z tuňáka a dobrými tuky z avokáda. Celozrnný chléb přidává vlákninu a dlouhotrvající sytost.",
      direction:
        "Smíchejte tuňáka s avokádem a cibulí, osolte a opepřete. Rozložte směs na plátky chleba.",
    },
    {
      id: 4,
      name: "Rajčatová polévka s bazalkou",
      category: 2,
      servings: 4,
      img: "img/rajcatovaPolevka.jpg",
      ingredient: [
        { namein: "Rajčata", amount: 600, unit: "g" },
        { namein: "Cibule", amount: 1, unit: "ks" },
        { namein: "Česnek", amount: 2, unit: "stroužky" },
        { namein: "Zeleninový vývar", amount: 500, unit: "ml" },
        { namein: "Bazalka", amount: "čerstvá, ", unit: "na ozdobu" },
      ],
      description:
        "Lehká a osvěžující polévka s výraznou chutí rajčat a aromatickou bazalkou. Ideální pro lehkou večeři nebo jako předkrm.",
      direction:
        "Orestujte cibuli a česnek, přidejte na kostky nakrájená rajčata. Přilijte vývar a vařte do měkka. Přidejte nasekanou bazalku před podáváním.",
    },
    {
      id: 5,
      name: "Pohankové lívance s lesním ovocem",
      category: 1,
      servings: 3,
      img: "img/livance.png",
      ingredient: [
        { namein: "Pohanka", amount: 200, unit: "g" },
        { namein: "Vajíčka", amount: 2, unit: "ks" },
        { namein: "Jogurt", amount: 150, unit: "ml" },
        { namein: "Prášek do pečiva", amount: 1, unit: "lžička" },
        { namein: "Lesní ovoce", amount: " ", unit: "k podávání" },
      ],
      description:
        "Bezlepková snídaně s vysokým obsahem bílkovin z pohanky a jogurtu. Lesní ovoce dodává sladkou chuť a vitamíny.",
      direction:
        "Smíchejte pohanku, vajíčka, jogurt a prášek do pečiva. Smažte lívance na pánvi. Podávejte s čerstvým ovocem.",
    },
    {
      id: 6,
      name: "Quinoa salát s grilovaným zeleným hráškem",
      category: 2,
      servings: 3,
      img: "img/quinoaSalat.jpg",
      ingredient: [
        { namein: "Quinoa", amount: 200, unit: "g" },
        { namein: "Grilovaný zelený hrášek", amount: 200, unit: "g" },
        { namein: "Paprika", amount: 1, unit: "ks" },
        { namein: "Feta sýr", amount: 50, unit: "g" },
        { namein: "Olivový olej", amount: " ", unit: "dle potřeby" },
        { namein: "Citronová šťáva", amount: " ", unit: "dle chutil" },
      ],
      description:
        "Sýtý salát plný zdravých sacharidů z quinoi, doplněný o vitamíny z grilovaného hrášku, papriky a bílkoviny z feta sýra. Dochutíme olejem a citronovou šťávou.",
      direction:
        "Uvařte quinou podle návodu. Smíchejte s grilovaným hráškem, paprikou a fetou. Dochutíme olejem a citronovou šťávou.",
    },
    {
      id: 7,
      name: "Hummus s čerstvou zeleninou",
      category: 4,
      servings: 4,
      img: "img/hummus.jpg",
      ingredient: [
        { namein: "Cizrna", amount: 1, unit: "konzerva" },
        { namein: "Tahini", amount: 2, unit: "lžíce" },
        { namein: "Česnek", amount: 1, unit: "stroužek" },
        { namein: "Olivový olej", amount: " ", unit: "dle potřeby" },
        { namein: "Citronová šťáva", amount: " ", unit: "dle chuti" },
        { namein: "Čerstvá zelenina", amount: " ", unit: "dle preferencí" },
      ],
      description:
        "Lehký a lahodný hummus s česnekem, tahini a olivovým olejem. Ideální k podávání s čerstvou zeleninou.",
      direction:
        "Smixujte cizrnu, tahini a česnek. Dochutíme olivovým olejem a citronovou šťávou. Podávejte s čerstvou zeleninou.",
    },
    {
      id: 8,
      name: "Rýžové placičky se zeleninou a sójovým dipem",
      category: 4,
      servings: 4,
      img: "img/ryzovePlacicky.jpg",
      ingredient: [
        { namein: "Rýže", amount: 200, unit: "g" },
        { namein: "Zeleninová směs", amount: 150, unit: "g" },
        { namein: "Sójová omáčka", amount: " ", unit: "dle chuti" },
        { namein: "Olej", amount: " ", unit: "dle potřeby" },
      ],
      description:
        "Jemné rýžové placičky s osvěžující zeleninovou směsí, podávané s intenzivním sójovým dipem. Lehký a chutný oběd pro každý den.",
      direction:
        "Smíchejte rýži se zeleninou, upečte placičky. Podávejte s aromatičkým sójovým dipem.",
    },
    {
      id: 9,
      name: "Jogurtový ovocný dort s medem a ořechy",
      category: 5,
      servings: 6,
      img: "img/dort.jpg",
      ingredient: [
        { namein: "Jogurt", amount: 500, unit: "g" },
        { namein: "Směs ovoce", amount: 300, unit: "g" },
        { namein: "Med", amount: 50, unit: "g" },
        { namein: "Ořechy", amount: 100, unit: "g" },
      ],
      description:
        "Lehký a osvěžující dezert skládající se z vrstev jogurtu a směsi čerstvého ovoce, ozdobený medem a ořechy. Ideální pro sladkou radost a oslavu chutí.",
      direction:
        "Vytvořte vrstvy jogurtu a ovoce. Ozdobte medem a ořechy. Dort pro sladkou radost.",
    },
  ];
  /*
  let recipeBlocks = document.querySelector(`.recipe-block`);

  const categoryId = urlParams.get("categoryId");
  let removeRecipe = [...recipes];
  let filteredRecipes;
  if (categoryId) {
    filteredRecipes = recipes.filter((r) => r.category == categoryId);
    filteredRecipes.forEach((i) =>
      removeRecipe.splice(removeRecipe.indexOf(i), 1)
    );

    for (let i = 0; i < removeRecipe.length; i++) {
      const originalIndex = recipes.indexOf(removeRecipe[i]);
      if (recipeBlocks[originalIndex]) {
        if (removeRecipe[i].category != categoryId) {
          recipeBlocks[originalIndex].style.display = "none";
        }
      } else {
        recipeBlocks[originalIndex].style.display = "flex";
      }
    }
  }*/
  let recipeBlocks = document.querySelectorAll(".recipe-block");

  const categoryId = urlParams.get("categoryId");
  let removeRecipe = [...recipes];
  let filteredRecipes;

  if (categoryId) {
    filteredRecipes = recipes.filter((r) => r.category == categoryId);
    filteredRecipes.forEach((i) =>
      removeRecipe.splice(removeRecipe.indexOf(i), 1)
    );

    recipeBlocks.forEach((block, index) => {
      const isRecipeInFilteredList = removeRecipe.some(
        (r) => r === recipes[index]
      );

      block.style.display =
        !isRecipeInFilteredList && categoryId !== undefined ? "flex" : "none";
    });
  }

  if (recipeId) {
    const recipe = recipes.find((r) => r.id == recipeId);

    if (recipe) {
      const div2 = document.querySelector(".left_side");
      const para = document.createElement("p");
      const descriptionText = document.createTextNode(recipe.description);
      const image = document.createElement("img");
      const paraName = document.createElement("h2");
      const nameText = document.createTextNode(recipe.name);
      paraName.appendChild(nameText);
      div2.appendChild(paraName);
      image.src = recipe.img;
      div2.appendChild(image);
      para.appendChild(descriptionText);
      div2.appendChild(para);

      const div3 = document.querySelector(".ingredient");

      recipe.ingredient.forEach((ingredient) => {
        const paraIngredient = document.createElement("p");
        const paraIngredientName = document.createTextNode(
          `${ingredient.namein}: ${ingredient.amount} ${ingredient.unit}`
        );
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "ingredientCheckbox";
        paraIngredient.appendChild(paraIngredientName);
        paraIngredient.appendChild(checkbox);
        div3.appendChild(paraIngredient);
      });

      const div4 = document.querySelector(".directions");

      const paraDirection = document.createElement("p");
      const paraDirectionText = document.createTextNode(recipe.direction);
      paraDirection.appendChild(paraDirectionText);
      div4.appendChild(paraDirection);
    } else {
      console.error("Recipe not found.");
    }
  }
});

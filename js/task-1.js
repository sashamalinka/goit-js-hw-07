const categoriesList = document.getElementById("categories");
const categoriesItem = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach((item) => {
    const categoriesTitle = item.querySelector("h2").textContent;
    const categoriesElementConst = item.querySelectorAll("ul li").length;
    console.log(`Categories: ${categoriesTitle}`)
    console.log(`Element: ${categoriesElementConst}`)
});

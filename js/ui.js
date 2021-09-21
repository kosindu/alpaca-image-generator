class UI {
  constructor() {
    this.mainCategory = '';
    this.subCategory = '';
  }

  showMainCategories = mainCategories => {
    mainCategories.forEach((mainCategory, index) => {
      const mainCategoryWrap = document.querySelector(
        '.main-button-collection'
      );
      mainCategoryWrap.appendChild(
        this.createButtonsWrap('main', mainCategory, index)
      );
    });
  };

  showSubCategories = (mainCategory, index) => {
    const subCategories = mainItemsArray[index];
    subCategories.forEach(subCategory => {
      const subCategoryWrap = document.querySelector('.sub-button-collection');
      subCategoryWrap.appendChild(this.createButtonsWrap('sub', subCategory));
    });
  };

  clearSubCategories = () => {
    const subCategoryWrap = document.querySelector('.sub-button-collection');
    subCategoryWrap.innerHTML = '';
  };

  createButtonsWrap = (type, innerText) => {
    const button = document.createElement('button');
    button.className = `${type}-button`;
    button.innerText = innerText;
    return button;
  };

  changeImage = (mainCategory, image) => {
    const imageLink = `./img/alpaca/${mainCategory}/${image}.png`;
    const toChangeImage = document.getElementById(mainCategory);
    toChangeImage.innerHTML = `<img src="${imageLink}" alt="" />`;
  };

  getImageNodeArray() {
    const imageWrapperItems = document.querySelectorAll('.image-wrap-item');
    const imageNodeArray = [];

    imageWrapperItems.forEach((imageWrapperItem, index) => {
      imageNodeArray.push(imageWrapperItem.id);
    });

    return imageNodeArray;
  }

  generateRandomImage() {
    mainItemsArray.forEach((mainItem, index) => {
      this.changeImage(
        this.getImageNodeArray()[index],
        mainItem[this.getRandomNumber(0, mainItem.length)]
      );
    });
  }

  getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

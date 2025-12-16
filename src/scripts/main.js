'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (wall && spider) {
    const borderStartX = wall.offsetLeft + wall.clientLeft;
    const borderStartY = wall.offsetTop + wall.clientTop;

    const borderEndX = borderStartX + wall.clientWidth;
    const borderEndY = borderStartY + wall.clientHeight;

    const midSpider = spider.clientHeight / 2;
    const currentX = e.x;
    const currentY = e.y;

    if (
      currentX >= borderStartX &&
      currentX <= borderEndX &&
      currentY >= borderStartY &&
      currentY <= borderEndY
    ) {
      let setX = currentX - borderStartX - midSpider;
      let setY = currentY - borderStartY - midSpider;

      if (currentX >= borderEndX - midSpider) {
        setX = wall.clientWidth - spider.clientWidth;
      }

      if (currentX <= borderStartX + midSpider) {
        setX = 0;
      }

      if (currentY >= borderEndY - midSpider) {
        setY = wall.clientHeight - spider.clientHeight;
      }

      if (currentY <= borderStartY + midSpider) {
        setY = 0;
      }

      spider.style.top = `${setY}px`;
      spider.style.left = `${setX}px`;
    }
  }
});

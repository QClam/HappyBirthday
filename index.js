const click = document.querySelector('.click');
const giftBox = document.querySelector('.gift-box');
const shadow = document.querySelector('.shadow');
const giftContainer = document.querySelector('.gift-container');
const text = document.querySelector('.text');

click.addEventListener('click', () => {
    if(click.className==="click") {
        click.classList.add('active')
        giftBox.classList.add("active")
        shadow.classList.add("active")
        giftContainer.classList.add("active")
        text.classList.add("active")
        text.classList.remove("active2")
    } else {
        click.classList.remove('active')
        giftBox.classList.remove("active")
        shadow.classList.remove("active")
        giftContainer.classList.remove("active")
        text.classList.remove("active")
        text.classList.add("active2")
    }
})

document.querySelector('.gift-box').addEventListener('click', function () {
    const fireworksContainer = document.getElementById('fireworks-container');
  
    for (let i = 0; i < 20; i++) {
      const firework = document.createElement('div');
      firework.classList.add('fireworks');
  
      // Random vị trí phát nổ
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 100 + 50; // Khoảng cách phát nổ
      const x = Math.cos(angle) * distance + 'px';
      const y = Math.sin(angle) * distance + 'px';
  
      // Set vị trí
      firework.style.setProperty('--x', x);
      firework.style.setProperty('--y', y);
  
      // Thêm vào container
      fireworksContainer.appendChild(firework);
  
      // Xóa sau khi hoàn thành
      setTimeout(() => {
        firework.remove();
      }, 1500);
    }
  });
  
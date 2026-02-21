// game.js – Mystic Card Night

const cardMiddle = document.getElementById('cardMiddle');
const hintText   = document.getElementById('hintText');

// 🔊 Âm thanh khi bấm lá bài úp
// ➜ Đặt file mp3 của bạn vào: public/sounds/lời chúc.mp3
const flipSound = new Audio('/sounds/lời chúc.mp3');

cardMiddle.addEventListener('click', () => {
  // Phát âm thanh
  flipSound.currentTime = 0;
  flipSound.play().catch(err => {
    console.warn('Không thể phát âm thanh:', err);
  });

  // Ẩn dòng chữ gợi ý
  if (hintText) hintText.classList.add('hidden');

  // TODO: Thêm hiệu ứng lật bài ở đây
  console.log('Lá bài giữa được bấm!');
});
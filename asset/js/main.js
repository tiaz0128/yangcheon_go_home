function fadeTitelBackground(){
  setInterval(() => {
    const fadeImgs = Array.from(document.querySelectorAll('.fade-img'))
    
    fadeImgs.some((img, idx) => {
      if (img.classList.contains('active')) {
        img.classList.remove('active');
        idx === fadeImgs.length - 1 ? fadeImgs[0].classList.add('active') : fadeImgs[idx + 1].classList.add('active')
        return true
      }
    })
  }, 3500);
}

// 오프닝 타이틀
function typpingText(){
  const text = "체계적인 수업과 전문 지도자가 함께합니다.\n프로기사 40명 이상 배출";
  const chars = text.split("");
  let typedText = ''

  const intervalID = setInterval(() => {
    if (chars.length > 0) {
      typedText += chars.shift();
      document.querySelector(".title-container .description").innerText = typedText;
    } else {
      clearInterval(intervalID);

      const boldDesc = document.querySelector(".title-container .blod-description");
      boldDesc.innerText = "20년 전통의";
      boldDesc.classList.add('show');

      // 학원명 등장.
      const title = document.querySelector(".title-container .title");
      title.innerText = "양천대일 바둑학원";
      title.classList.add('toBig');

      playArrow()
    }
  }, 80);
}


function playArrow(){
  const intervalID = setInterval(() => {
    clearInterval(intervalID);

    setTimeout(() => {
      document.querySelector(".title-arrow").style.display = "block";
    }, 1000);
  }, 60);
}

export {typpingText, fadeTitelBackground, playArrow }
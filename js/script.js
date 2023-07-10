const bringToFrontButton = document.getElementById('top-button');
        const sendToBackButton = document.getElementById('bottom-button');

        bringToFrontButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        sendToBackButton.addEventListener('click', function() {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        });

  function scrollToKeyword(event) {
    event.preventDefault(); // 取消默認行為
    
    var keyword = "相關連結網站"; // 將此處的關鍵字替換為你想要滾動到的關鍵字開頭
    
    var elements = document.querySelectorAll('h4'); // 在 <h4> 標籤中尋找關鍵字
    
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].textContent === keyword) {
        var offset = 100; // 設置滾動偏移量，根據需要調整
        var topPosition = elements[i].offsetTop - offset;
        window.scrollTo({ top: topPosition, behavior: 'smooth' }); // 使用平滑滾動效果
        break;
      }
    }
  }
const startButton = document.querySelector(".btn");
const resultDiv = document.getElementById("result");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

// recognition.lang = "vi-VN"; // Ngôn ngữ sẽ được nhận dạng
recognition.lang = "vi-VN";

startButton.addEventListener("click", () => {
  //ghi giọng nói
  recognition.start();
  resultDiv.innerHTML = "Hãy nói nội dung bạn muốn...";
});

recognition.onresult = (event) => {
  const result = event.results[0][0].transcript.toLowerCase();
  resultDiv.innerHTML = `
        <span class="spanText">Đã nói xong. Hy vọng kết quả như ý bạn</span>
        <span class="spanRun">Đang thực hiện: ${result}</span>`;
  //gọi hàm
  handleVoice(result);
};

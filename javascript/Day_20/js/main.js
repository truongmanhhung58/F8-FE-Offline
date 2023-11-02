const startButton = document.querySelector(".btn");
const result = document.getElementById("result");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "vi-VN";

startButton.addEventListener("click", () => {
  recognition.start();
  result.innerHTML = "Hãy nói nội dung bạn muốn...";
});

const data = [{
  key: ["google", "gu gồ"],
  value: "https://www.google.com"
},
{
  key: ["facebook", "phây búc"],
  value: "https://www.facebook.com/"
},
{
  key: ["youtube", "diu túp"],
  value: "https://www.youtube.com/"
},
{
  key: ["google drive", "gu gồ đờ rai vờ"],
  value: "https://drive.google.com/drive/my-drive"
},
{
  key: ["google drive", "gu gồ đờ rai vờ"],
  value: "https://drive.google.com/drive/my-drive"
},
{
  key: ["google maps", "gu gồ map"],
  value: "https://www.google.com/maps"
},
{
  key: ["đại học công nghiệp", "trường đại học công nghiệp", "haui"],
  value: "https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+C%C3%B4ng+nghi%E1%BB%87p+H%C3%A0+N%E1%BB%99i/@21.053736,105.7325319,17z/data=!3m1!4b1!4m6!3m5!1s0x31345457e292d5bf:0x20ac91c94d74439a!8m2!3d21.053731!4d105.7351068!16s%2Fm%2F0vb3l31?hl=vi-VN&entry=ttu"
},
{
  key: ["zing mp3", "mp3"],
  value: "https://zingmp3.vn/"
},
]
  
const handleVoice = (listerned) => {
  for(const item of data) {
    if(item.key.includes(listerned.toLowerCase())) {
      window.open(data.value, "_blank")
      break;
    }
  }
}

recognition.onresult = (event) => {
  const results = event.results[0][0].transcript.toLowerCase();
  results.innerHTML = `
    <span class="alert">Đã nói xong. Hy vọng kết quả như ý bạn</span>
    <span class="run">Đang thực hiện: ${results}</span>`;
  handleVoice(results);
};


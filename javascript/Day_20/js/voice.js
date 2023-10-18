
const handleVoice = (result) => {
    result = result.toLowerCase();
    if (result.includes("google" || "gu gồ")) {
      window.location.href = "https://www.google.com";
    }
    // Nói “facebook” => Mở web Facebook
    if (result.includes("facebook" || "phây búc")) {
      window.location.href = "https://www.facebook.com/";
    }
    if (result.includes("youtube" || "diu túp")) {
      window.location.href = "https://www.youtube.com/";
    }
    if (result.includes("google drive" || "gu gồ đờ rai")) {
      window.location.href = "https://drive.google.com/drive/my-drive";
    }
    if (result.includes("google maps") || result.includes("bản đồ")) {
      window.location.href = "https://www.google.com/maps";
    }
    if (
      result.includes("chỉ đường vinhomes smartcity tây mỗ") ||
      result.includes("chỉ đường tới vinhomes smartcity tây mỗ") ||
      result.includes("tới Vinhomes smartcity tây mỗ") ||
      result.includes("đường tới vinhomes smartcity tây mỗ")
    ) {
      window.location.href =
        "https://www.google.com/maps/search/vinhomes+smartcity+t%C3%A2y+m%E1%BB%97/@21.0041336,105.7405022,16z/data=!3m1!4b1?entry=ttu";
    }
    if (
      result.includes("bài hát ai chung tình được mãi") ||
      result.includes("bở bài hát ai chung tình được mãi") ||
      result.includes("nghe bài hát ai chung tình được mãi")
    ) {
      window.location.href =
        "https://zingmp3.vn/tim-kiem/tat-ca?q=ai%20chung%20t%C3%ACnh%20%C4%91%C6%B0%E1%BB%A3c%20m%C3%A3i";
    }
    if (
      result.includes("video ai chung tình được mãi") ||
      result.includes("mở video ai chung tình được mãi") ||
      result.includes("xem video ai chung tình được mãi")
    ) {
      window.location.href =
        "https://www.youtube.com/results?search_query=ai+chung+t%C3%ACnh+%C4%91%C6%B0%E1%BB%A3c+m%C3%A3i";
    } else {
      setTimeout(() => {
        resultDiv.innerHTML = `
          <span class="spanText">Đã nói xong. Hy vọng kết quả như ý bạn</span>
          <span class="spanRun">Không thực hiện được yêu cầu</span>`;
      }, 1000);
    }
  };
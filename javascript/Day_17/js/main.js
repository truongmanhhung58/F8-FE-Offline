

var input = document.querySelector(".input")
var toolBtns = document.querySelectorAll(".text-style")
var fileName = document.querySelector(".file-name")
var fileMngBtn = document.querySelector(".file-manager-toggle")
var fileMng = document.querySelector("#file-manager")

input.focus()

// File manager toggle
var handleShowFileManager = function(){
    return fileMng.classList.toggle("show")
}
fileMngBtn.onclick = handleShowFileManager

document.querySelector(".color").onchange = function () {
    document.execCommand("foreColor", false, this.value)
}

// Active
toolBtns.forEach((btn) => {
    var handleActive = function(type) {
        if (document.queryCommandState(`document.querySelector{type}`)) {
            btn.classList.add("active")
        } else {
            btn.classList.remove("active")
        }
        input.focus()
    }
    btn.onclick = () => {
        document.execCommand(btn.classList[0])
        handleActive(btn.classList[0])
    }
})

// Handle Count
var handleCount = () => {
    let wordCount = (characterCount = 0)
    var content = input.innerText

    characterCount = content
        .trim()
        .replaceAll("\n\n", " ")
        .split("").length

    content
        .trim()
        .replaceAll("\n", " ")
        .split(" ")
        .forEach((word) => {
            word && wordCount++
        })

    document.querySelector(".characters b").innerText = characterCount
    document.querySelector(".words b").innerText = wordCount
}

input.oninput = handleCount

var handleReset = () => {
    handleShowFileManager()
    input.innerText = ""
    fileName.value = "untitled"
    document.execCommand("")
    toolBtns.forEach((btn) => btn.classList.remove("active"))
    document.querySelector(".color").value = "#000000"
    document.querySelector(".characters b").innerText = 0
    document.querySelector(".words b").innerText = 0
}

document.querySelector(".new-file").onclick = handleReset

var saveAsTXTBtn = document.querySelector(".save-as-txt")

// Save to TXT
saveAsTXTBtn.onclick = () => {
    saveAsTXTBtn.download = document.querySelector(".file-name").value

    function typedArrayToURL(typedArray, mimeType) {
        return URL.createObjectURL(
            new Blob([typedArray], { type: mimeType })
        )
    }

    var url = typedArrayToURL(
        new TextEncoder().encode(input.textContent),
        "text/plain"
    )

    saveAsTXTBtn.href = url
}


// Save to PDF
document.querySelector('.save-as-pdf').onclick = () => {
    var opt = {
        filename: document.querySelector(".file-name").value
    }
    html2pdf(input, opt)
}

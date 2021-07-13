// Bài tập 1
var n = 0
var total = 0
var giaTri = document.getElementById("giaTri")

while (total < 10000) {
    n += 1
    total = total + n
}


giaTri.innerHTML = "Số Nguyên dương nhỏ nhất: " + n

// Bài tập 2
document.getElementById("tinh").addEventListener("click", tinhTong)

function tinhTong() {
    var x = document.getElementById("addX").value
    var addN = document.getElementById("addN").value
    var total = 0
    var runN = 0
    var ketQua = document.getElementById("result")

    while (runN < addN) {
        runN += 1
        var result = Math.pow(x, runN)
        total += +result
    }

    ketQua.style.display = "block"
    ketQua.innerHTML = "Kết quả là: " + total
}

// Bài tập 3
document.getElementById("giaiThua").addEventListener("click", giaiThua)

function giaiThua() {
    var number = document.getElementById("n").value
    var result = document.getElementById("ketQua")
    var cancle = 0
    var total = 1

    while (cancle < number) {
        cancle += 1
        total = total * cancle
    }

    result.style.display = "block"
    result.innerHTML = "Tổng giai thừa là: " + total
}

// Bài tập 4
document.getElementById("taoDiv").addEventListener("click", taoDiv)

function taoDiv() {
    var bigDiv = document.getElementById("divKQ")
    var divNumber = document.getElementById("div").value
    var numberDiv = 10
    var classify = add(divNumber, numberDiv)

    for (var i = 1; i <= classify; i += 1) {
        if (i % 2 === 0) {
            var soChan = document.createElement("div")
            var pTextSoChan = document.createElement("p")
            var textSoChan = "Số chẵn: "
            pTextSoChan.innerHTML = textSoChan + i
            bigDiv.appendChild(soChan)
            soChan.appendChild(pTextSoChan)
            soChan.classList.add("soChan")
        }
        else {
            var soLe = document.createElement("div")
            var pTextSoLe = document.createElement("p")
            var textSoLe = "Số lẻ: "
            pTextSoLe.innerHTML = textSoLe + i
            bigDiv.appendChild(soLe)
            soLe.appendChild(pTextSoLe)
            soLe.classList.add("soLe")
        }
    }
}
// Kiểm tra input
function add(divNumber, numberDiv) {
    if (divNumber.length == 0) {
        divNumber = numberDiv
    }
    return divNumber
}

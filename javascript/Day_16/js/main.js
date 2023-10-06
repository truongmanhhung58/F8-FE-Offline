
var listInner = document.querySelector('.list-inner')
var items = document.querySelectorAll('li')

items.forEach( function(item) {
    var elementOffsetY = 0
    
    var getElementOffsetY = function(e) {
        elementOffsetY = e.offsetY 
        e.target.style.filter = "rotate(40deg)"
        var handleDragEnd = function() {
            e.target.style.filter = ""
            handleArrange()
            e.target.removeEventListener('dragend', handleDragEnd)
        }
        e.target.addEventListener('dragend', handleDragEnd)
    }

    item.addEventListener('dragstart', getElementOffsetY)

    var handleDrag = function(e) {
        var nextElement = e.target.nextElementSibling
        var prevElement = e.target.previousElementSibling
        var elementPositionTop = e.clientY - elementOffsetY 

        if(nextElement && elementPositionTop > nextElement.offsetTop + 10) { 
            listInner.insertBefore(item, nextElement.nextElementSibling)
        }else if(elementPositionTop > elementOffsetY && prevElement && elementPositionTop <= prevElement.offsetTop - 10) {
            listInner.insertBefore(item, item.previousElementSibling)
        }
    }

    item.addEventListener('drag', handleDrag)
})

var handleArrange = function() {
    document.querySelectorAll('.module').forEach(function(item, index) {
        item.querySelector('span').innerText = index + 1
    })

    document.querySelectorAll('.lesson').forEach(function(item, index) {
        item.querySelector('span').innerText = index + 1
    })
}

handleArrange()
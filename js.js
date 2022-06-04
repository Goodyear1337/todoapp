
let createElement = (tagName, tagClass, tagContent) => {
    let tag = document.createElement(tagName)
    tag.setAttribute('class', tagClass)
    tag.innerHTML = tagContent

    return tag
}

let createElement2 = (buttonID, buttonClass ,buttonContent,buttonHandler) => {
    let button = document.createElement('button') 
    button.setAttribute('class', buttonClass)
    button.innerHTML = buttonContent
    button.setAttribute('id',buttonID)
    button.onclick = buttonHandler
    return button
}

mainButton.onclick = () => {
    let text = prompt("Введите что нибудь")
    
    let ButtonDelete = createElement2(
        buttonId = 'deleteButton' ,
        buttonClass = 'buttonDel' ,
        buttonContent = 'удалить' ,
        buttonHandler = () => Element.style.display = 'none' ,
        
    )

    let updateButton = createElement2(
        buttonId = 'updateButton' ,
        buttonClass = 'buttonUpdate' ,
        buttonContent = 'Изменить',
        buttonHandler = () => {
            let buttonText = prompt('Введите измененный текст')
            Element.children[2].innerHTML = buttonText
        },
        buttonClass = 'todoElement__updateButton'
    )
    let OkButton = createElement2(
        buttonId = 'OkButton' ,
        buttonClass = 'buttonOk' ,
        buttonContent = 'готово',
        buttonHandler = () => {
          Element.style.backgroundColor = 'rgba(0, 128, 0, 0.2' 
           OkButton.style.display = 'none'
           updateButton.style.display = 'none'
        },
        buttonClass = 'todoElement__Okbutton'
    )

    let paragraph = createElement('p','todoElement__text',text)

    let Element = createElement('div', 'todoElement', '')
    Element.append(ButtonDelete)
    mainDiv.append(Element)
    Element.append(updateButton)
    Element.append(paragraph)
    Element.append(OkButton)
}

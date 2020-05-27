
$(document).ready( function (){

    const boldButton = $('body > div > div > div > div.text-style-container > div.bold > button')
    const underlineButton = $('body > div > div > div > div.text-style-container > div.underline > button')
    const intalicButton = $('body > div > div > div > div.text-style-container > div.italic > button')
    const quotesButton = $('body > div > div > div > div.text-style-container > div.quotes > button')
    const stikeButton = $('body > div > div > div > div.text-style-container > div.strike > button')
    const heiglightButton = $('body > div > div > div > div.text-style-container > div.highlight > button')
    const fontColorButton = $('body > div > div > div > div.text-style-container > div.font-color > button')

    const leftTextAlignButton =  $('body > div > div > div > div.text-formating-container > div.left-text-align > button')
    const rightTextAlignButton = $('body > div > div > div > div.text-formating-container > div.right-text-align > button')
    const centerTextAlignButton = $('body > div > div > div > div.text-formating-container > div.center-text-align > button')
    const justifiedTextButton = $('body > div > div > div > div.text-formating-container > div.justify-text-align > button')

    const numberedListButton = $('body > div > div > div > div.lines-list-container > div.numbers-list > button')
    const bulletListButton = $('body > div > div > div > div.lines-list-container > div.lines-bullets > button')

    const addImageButton = $('body > div > div > div > div.addition-tools-container > div.add-img > button')
    const addLinkButton = $('body > div > div > div > div.addition-tools-container > div.add-link > button')
    const dowloadButton = $('body > div > div > div > div.addition-tools-container > div.download > button')

    boldButton.click ( event => {  document.execCommand('bold', false, null) } )
    underlineButton.click ( event => {  document.execCommand('underline', false, null) } )
    intalicButton.click ( event => { document.execCommand('italic', false, null) } ) 
    // quotesButton.click ( event => { document.execCommand('', false, null) } )
    stikeButton.click( event => { document.execCommand('strikeThrough'), false, null } )
    heiglightButton.click( event => {
        
        const color = prompt('Type a color: ').toString()
        document.execCommand('hiliteColor', false, color) } )

    fontColorButton.click( event => {

        const fontColor = prompt('Type the font color: ').toString()
        document.execCommand('forecolor', false, fontColor)
        
    })

    leftTextAlignButton.click( event=> { document.execCommand('justifyLeft', false) } )
    rightTextAlignButton.click( event => { document.execCommand('justifyRight', false) } )
    centerTextAlignButton.click( event => { document.execCommand('justifyCenter', false) } )
    justifiedTextButton.click( event => { document.execCommand('justifyFull', false, null) } )

    numberedListButton.click( event => { document.execCommand('insertOrderedList', false) } )
    bulletListButton.click( event => { document.execCommand('insertUnorderedList', false) } )
    addLinkButton.click( event => {

        const url = prompt('Type the URL: ').toString()
        document.execCommand('createLink', false, url)

    })
    addImageButton.click( event => {

        const url = prompt('Type an URL for image: ').toString()
        document.execCommand('insertImage', false, url)

     })

})


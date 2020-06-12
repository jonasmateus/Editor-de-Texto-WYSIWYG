
$(document).ready( function (){

    
    const boldButton = $('div.bold > button')
    const underlineButton = $('div.underline > button')
    const intalicButton = $('div.italic > button')
    const quotesButton = $('div.quotes > button')
    const stikeButton = $('div.strike > button')
    const heiglightButton = $('div.highlight > button')
    const fontColorButton = $('div.font-color > button')

    const leftTextAlignButton =  $('div.left-text-align > button')
    const rightTextAlignButton = $('div.right-text-align > button')
    const centerTextAlignButton = $('div.center-text-align > button')
    const justifiedTextButton = $('div.justify-text-align > button')

    const numberedListButton = $('div.numbers-list > button')
    const bulletListButton = $('div.lines-bullets > button')

    const addImageButton = $('div.add-img > button')
    const addLinkButton = $('div.add-link > button')
    const dowloadButton = $('div.download > button')

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

    leftTextAlignButton.click( event => { document.execCommand('justifyLeft', false) } )
    rightTextAlignButton.click( event => { document.execCommand('justifyRight', false) } )
    centerTextAlignButton.click( event => { document.execCommand('justifyCenter', false) } )
    justifiedTextButton.click( event => { document.execCommand('justifyFull', false, null) } )

    numberedListButton.click( event => { document.execCommand('insertOrderedList', false) } )
    bulletListButton.click( event => { document.execCommand('insertUnorderedList', false) } )
    addLinkButton.click( event => {

        const url = prompt('Type the URL: ').toString()
        document.execCommand('createLink', false, url).valueOf(this[0])

    })
    addImageButton.click( event => {

        const url = prompt('Type an URL for image: ').toString()
        document.execCommand('insertImage', false, url)

     })

})


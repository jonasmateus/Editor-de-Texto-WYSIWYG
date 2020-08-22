

    const typingArea = $('#editor')
    const editorContext = typingArea[0].contentDocument
    editorContext.designMode = 'on'
    
    console.log(typingArea)

    $(editorContext).ready( function (){

        const titleButton = $('body > div > div > div > div.text-titles-container > select')
        const selectionTag = titleButton[0]
        const editableArea = editorContext.body
        selectionTag.onchange = (event) => inspectUserSelection(event)
        console.log(selectionTag)
    
       
        function inspectUserSelection (event) {
            
            const elementSign = event.target.value
            let selectedPosition = editorContext.getSelection()

            console.log(selectedPosition)
            editableArea.onmouseup = () => {
                applyElementWithSign(elementSign, selectedPosition)
            }
        
        }
        
        function applyElementWithSign (sing,position) {

            let element = document.createElement(`${sing}`)
            let range = new Range()
            element.innerHTML = range.extractContents()
            range.setStart(position.anchorNode, position.anchorOffset)
            range.setEnd(position.focusNode, position.focusOffset)
            range.surroundContents(element)
            position.removeRange(range)
            console.log(range)
        }

        const boldButton = $('div.bold > button')
        const underlineButton = $('div.underline > button')
        const italicButton = $('div.italic > button')
        const styledQuotesButton = $('div.quotes > button')
        const stikeButton = $('div.strike > button')
        const heightLight = $('div.highlight > button')
        const fontColorButton = $('div.font-color > button')
    
        const leftTextAlignButton =  $('div.left-text-align > button')
        const rightTextAlignButton = $('div.right-text-align > button')
        const centerTextAlignButton = $('div.center-text-align > button')
        const justifiedTextButton = $('div.justify-text-align > button')
    
        const numberedListButton = $('div.numbers-list > button')
        const bulletListButton = $('div.lines-bullets > button')
    
        const imageButton = $('div.add-img > button')
        const linkButton = $('div.add-link > button')
        const dowloadButton = $('div.download > button')
    
        boldButton.click ( event => {  editorContext.execCommand('bold', false, null) } )
        underlineButton.click ( event => {  editorContext.execCommand('underline', false, null) } )
        italicButton.click ( event => { editorContext.execCommand('italic', false, null) } ) 
    
        styledQuotesButton.click ( event => {
           
            editorContext.execCommand('formatBlock', false, '<blockquote>')
            editorContext.execCommand('italic', false, null)
    
        } )
    
        stikeButton.click( event => { editorContext.execCommand('strikeThrough', false, null) } )
    
        heightLight.click( event => {
            
            const color = window.prompt('Type a color: ').toString()
            editorContext.execCommand('hiliteColor', false, color) } )
    
        fontColorButton.click( event => {
    
            const fontColor = window.prompt('Type the font color: ').toString()
            editorContext.execCommand('forecolor', false, fontColor)
            
        })
    
        leftTextAlignButton.click( event => { editorContext.execCommand('justifyLeft', false) } )
        rightTextAlignButton.click( event => { editorContext.execCommand('justifyRight', false) } )
        centerTextAlignButton.click( event => { editorContext.execCommand('justifyCenter', false) } )
        justifiedTextButton.click( event => { editorContext.execCommand('justifyFull', false, null) } )
    
        numberedListButton.click( event => { editorContext.execCommand('insertOrderedList', false) } )
        bulletListButton.click( event => { editorContext.execCommand('insertUnorderedList', false) } )
        linkButton.click( event => {
    
            const url = window.prompt('Type the URL: ').toString()
            editorContext.execCommand('createLink', false, url).valueOf(this[0])
    
        })
        imageButton.click( event => {
    
            const url = window.prompt('Type an URL for image: ').toString()
            editorContext.execCommand('insertImage', false, url)
    
         })
    
    })



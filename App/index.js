const typingArea = $("#editor");
const editorContext = typingArea[0].contentDocument;
editorContext.designMode = "on";
editorContext.body.style.fontFamily = "Arial, sans-serif";

$(editorContext).ready(function () {
  const typingArea = $("#editor");
  const editorContext = typingArea[0].contentDocument;
  editorContext.designMode = "on";
  editorContext.body.style.fontFamily = "Arial, sans-serif";

  enableStylingFeatures(editorContext);
  enableFormatingFeatures(editorContext);
  enableOrdeningFeatures(editorContext);
  enableExtraFeatures(editorContext);
});

function enableStylingFeatures(editorContext) {
  const titleButton = $(
    "body > div > div > div > div.text-titles-container > select"
  );
  const selectionTag = titleButton[0];
  const boldButton = $("div.bold > button");
  const underlineButton = $("div.underline > button");
  const italicButton = $("div.italic > button");
  const styledQuotesButton = $("div.quotes > button");
  const stikeButton = $("div.strike > button");
  const heightLight = $("div.highlight > button");
  const fontColorButton = $("div.font-color > button");

  selectionTag.onchange = (event) => inspectUserSelection(event, editorContext);
  boldButton.click((event) => {
    console.log(event.target.parentElement.value);
    inspectUserSelection(event, editorContext);
    //editorContext.execCommand("bold", false, null);
  });
  underlineButton.click(() => {
    editorContext.execCommand("underline", false, null);
  });
  italicButton.click(() => {
    editorContext.execCommand("italic", false, null);
  });

  styledQuotesButton.click(() => {
    editorContext.execCommand("formatBlock", false, "<blockquote>");
    editorContext.execCommand("italic", false, null);
  });

  stikeButton.click(() => {
    editorContext.execCommand("strikeThrough", false, null);
  });

  heightLight.click(() => {
    const color = window.prompt("Type a color: ").toString();
    editorContext.execCommand("hiliteColor", false, color);
  });

  fontColorButton.click(() => {
    const fontColor = window.prompt("Type the font color: ").toString();
    editorContext.execCommand("forecolor", false, fontColor);
  });
}

function inspectUserSelection(event, editorContext) {
  const tagName = event.target.value;
  const selectedPosition = editorContext.getSelection();
  applyTagOnPosition(selectedPosition, tagName);
}

function applyTagOnPosition(position, tag) {
  let element = document.createElement("B");
  console.log(tag);
  let range = new Range();

  range.setStart(position.anchorNode, position.anchorOffset);
  range.setEnd(position.focusNode, position.focusOffset);

  let textContent = range.extractContents().textContent;

  element.appendChild(document.createTextNode(textContent));
  range.insertNode(element);
}

function enableFormatingFeatures(editorContext) {
  const leftTextAlignButton = $("div.left-text-align > button");
  const rightTextAlignButton = $("div.right-text-align > button");
  const centerTextAlignButton = $("div.center-text-align > button");
  const justifiedTextButton = $("div.justify-text-align > button");

  leftTextAlignButton.click(() => {
    editorContext.execCommand("justifyLeft", false);
  });
  rightTextAlignButton.click(() => {
    editorContext.execCommand("justifyRight", false);
  });
  centerTextAlignButton.click(() => {
    editorContext.execCommand("justifyCenter", false);
  });
  justifiedTextButton.click(() => {
    editorContext.execCommand("justifyFull", false, null);
  });
}

function enableOrdeningFeatures(editorContext) {
  const numberedListButton = $("div.numbers-list > button");
  const bulletListButton = $("div.lines-bullets > button");

  numberedListButton.click(() => {
    editorContext.execCommand("insertOrderedList", false);
  });
  bulletListButton.click(() => {
    editorContext.execCommand("insertUnorderedList", false);
  });
}

function enableExtraFeatures(editorContext) {
  const imageButton = $("div.add-img > button");
  const linkButton = $("div.add-link > button");

  linkButton.click(() => {
    const url = window.prompt("Type the URL: ").toString();
    editorContext.execCommand("createLink", false, url).valueOf(this[0]);
  });

  imageButton.click(() => {
    const url = window.prompt("Type an URL for image: ").toString();
    editorContext.execCommand("insertImage", false, url);
  });
}

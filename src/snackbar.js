export function createSnackbar(message) {
  const $element = document.createElement('mdui-snackbar');
  $element.setAttribute('auto-close-delay', '1000');
  $element.setAttribute('class', 'example-close-delay');
  $element.innerHTML = message;
  document.body.appendChild($element);
  $element.open = true;
  return $element;
}

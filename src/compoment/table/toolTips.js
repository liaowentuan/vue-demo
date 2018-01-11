export default (msg, width = '300') => {
  let el = document.createElement('div')
  el.style.width = width + 'px'
  el.style.background = '#3cd821'
  el.style.color = '#fff'
  el.style.position = 'fixed'
  el.style.top = 0
  el.style.left = 0
  el.style.right = 0
  el.style.textAlign = 'center'
  el.style.margin = '200px auto 0'
  el.style.borderRadius = '4px'
  el.style.lineHeight = '28px'
  el.innerHTML = msg
  el.className = 'toolTips'
  document.body.appendChild(el)
  setTimeout(function () {
    let el = document.getElementsByClassName('toolTips')
     el.parentNode.removeChild(el);
  }, 3000)
}

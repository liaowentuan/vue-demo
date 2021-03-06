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
  el.style.zIndex = 900
  el.style.webkitBoxShadow = '2px 2px 3px #DDD'
  el.style.boxShadow = '2px 2px 3px #DDD'
  document.body.appendChild(el)
  setTimeout(function () {
    let child = document.getElementsByClassName('toolTips')
    child[0].parentNode.removeChild(child[0])
  }, 2500)
}

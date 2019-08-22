import $ from './lib/$'

const $header = $('#header')
let $headerPadding

const setupStickyHeader = window.screen.height >= 300
window.navFixed = false
let headerOffsetHeight = 0
let headerOffset = 0
let lastScrollPosition = 0

let updateNavTimer
const updateNavbar = fixHeader => {
  if (window.navFixed !== fixHeader) {
    clearTimeout(updateNavTimer)
    const headerClass = 'header--fixed'

    if (fixHeader) {
      updateNavTimer = setTimeout(() => {
        $header.style.transform = 'none'
        $header.style.opacity = 1
      }, 150)

      $header.classList.add(headerClass)
      $headerPadding.style.height = headerOffsetHeight + 'px'
    } else {
      $header.style.transform = 'translateY(-100%)'

      updateNavTimer = setTimeout(() => {
        $header.style.opacity = 0
        $header.classList.remove(headerClass)
        $headerPadding.style.height = 0

        updateNavTimer = setTimeout(() => {
          $header.removeAttribute('style')
        }, 150)
      }, 250)
    }

    window.navFixed = fixHeader
  }
}

const onResize = () => {
  updateNavbar(false)
  const { offsetTop, offsetHeight } = $header
  headerOffsetHeight = offsetHeight
  headerOffset = offsetTop + offsetHeight
}

const onScroll = () => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
  if (currentScrollPosition < 0) {
    return
  }
  const scrollingUp = lastScrollPosition > currentScrollPosition
  lastScrollPosition = currentScrollPosition

  let offset = headerOffset
  offset *= scrollingUp ? 1.2 : 0.8
  const fixHeader = offset < currentScrollPosition
  updateNavbar(fixHeader)
}

if (setupStickyHeader) {
  window.addEventListener('resize', onResize)
  window.addEventListener('scroll', onScroll)
  onResize()

  $headerPadding = document.createElement('div')
  $headerPadding.className = 'header-float-fix'
  $headerPadding.style.height = 0
  $header.parentElement.insertBefore($headerPadding, $header)
}

const components = document.querySelectorAll('.layer img')
const banner = document.querySelector('.bannerAnimate')

let start = 0
banner.addEventListener('mouseenter', e => {
  start = e.clientX
  // return start
})

banner.addEventListener('mousemove', e => {
  let move = e.clientX - start
  components[0].style.transform = `translateX(${move}px)`

  components[2].style.transform = `translateX(${move}px)`
})
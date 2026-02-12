export function scrollToSection(href: string, offset = 80) {
  const id = href.replace("#", "")
  const element = document.getElementById(id)

  if (!element) return

  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - offset

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  })
}

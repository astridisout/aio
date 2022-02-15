const whatsapp = document.querySelector('.whatsapp')
const telegram = document.querySelector('.telegram')
const twitter = document.querySelector('.twitter')

const pageUrl = location.href
const message = 'A lovely message for all my dear friends. This clever minigame only takes a minute to play & the payoff is worth it, check it out.'

const whatsappApi = `https://wa.me/?text=${pageUrl}. ${message}`;
const telegramApi = `https://t.me/share/url?url=${pageUrl}&text=${message}`
const twitterApi = `https://twitter.com/intent/tweet?text=${pageUrl}. ${message}`


whatsapp.addEventListener('click', () => {
    window.open(url = whatsappApi, target='blank')
})

telegram.addEventListener('click', () => {
    window.open(url = telegramApi, target='blank')
})

twitter.addEventListener('click', () => {
    window.open(url = twitterApi, target='blank')
})
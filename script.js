let btn1 = document.querySelectorAll('button')[0]
let btn2 = document.querySelectorAll('button')[1]
let btn3 = document.querySelectorAll('button')[2]
let result1 = document.querySelectorAll('h1')[0]
let result2 = document.querySelectorAll('h1')[1]
let result3 = document.querySelectorAll('h1')[2]

let words1 = [
	'Small children',
	'Old people',
	'Ivanka Trump',
	'The US Government',
	'Vegans',
	'Real Madrid',
	'The fourth member of Coldplay',
	'Olivia Rodrigo',
	'Ryanair',
	'WWF',
	'The incel community',
	'Stanford University',
	'5G-post repairmen',
	'Ronald McDonald',
	'Sugarman Rodriguez',
	'Nikita Dragun',
	'Walmart',
	'Malboro',
	'Your mom',
	'Acne Studios',
]

let words2 = [
	'buys cat sperm',
	'manifactures cannabis infused life jackets',
	'follows the money',
	'organizes marathons',
	'takes opioid pills',
	'fertilizes fish eggs',
	'denies COVID-19',
	'gene modifies pet hamsters',
	'forges sewing machine licenses',
	'runs a non-profit tobacco company',
	'manipulates Apple watches',
	'stole the 2016 election',
	'saves your search history',
	'hides GPS chips in smartphones',
	'sells fake plasma',
	'still uses PirateBay',
	'boycots UberEats',
	'make their bed with aluminum foil',
	'punish themselves',
]

let words3 = [
	'for money.',
	'to cause a mass extinction.',
	'to get closer to God.',
	'to expose the lizard people.',
	'to raise alien awareness.',
	'to start a civil war.',
	'for personal benefit.',
	'in the name of gastronomy.',
	'once and for all.',
	'due to misheard lyrics in the 90s.',
	"because it 'feels right'.",
	'because aliens asked them to.',
	'in order to help John Cena.',
	'to prove that the earth is flat.',
	'because of health benefits.',
	'to take over 4chan.',
	'out of jealousy.',
	'in case God is real.',
	'in the name of Paul Renner.',
	'to gain massive fame.',
	'as a contemporary art project.',
]

function getRandomNumber(min, max) {
	let step1 = max - min + 1
	let step2 = Math.random() * step1
	let result = Math.floor(step2) + min

	return result
}

btn1.addEventListener('click', () => {
	let index = getRandomNumber(0, words1.length - 1)
	result1.innerText = words1[index]
	updateTweet()
})

btn2.addEventListener('click', () => {
	let index = getRandomNumber(0, words2.length - 1)
	result2.innerText = words2[index]
	updateTweet()
})

btn3.addEventListener('click', () => {
	let index = getRandomNumber(0, words3.length - 1)
	result3.innerText = words3[index]
	updateTweet()
})

function updateTweet() {
	if (
		!result1.innerText.includes('generate') &&
		!result2.innerText.includes('generate') &&
		!result3.innerText.includes('generate')
	) {
		const tweetButton = document.querySelector('.twitter-share-button')
		tweetButton.href =
			'https://twitter.com/intent/tweet?text=' + result1.innerText + ' ' + result2.innerText + ' ' + result3.innerText
	}
}
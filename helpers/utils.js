
export const notNill = (value) => {
	return !!value
}

export const truncateAddress = (address, first = 5, last = 5) => {
	address.slice(0, first) + '...' + address.slice(-last, address.length)
}

export const truncateString = (text, max = 256) => {
	if (text.length > max) return text.substring(0, max) + ' ...'
	return text
}

export const strPadLeft = (string, pad, length) => {
	return (new Array(length + 1).join(pad) + string).slice(-length)
}

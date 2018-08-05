function isValidDate(date) {
	let splittedDate = date.split("/");
	let d = splittedDate[1],
		m = splittedDate[0] - 1,
		y = splittedDate[2];

	let composedYear = new Date(y, m, d);
	return composedYear.getDate() == d &&
			composedYear.getMonth() == m &&
			+composedYear.getYear()+"".slice(-2) == y;
}
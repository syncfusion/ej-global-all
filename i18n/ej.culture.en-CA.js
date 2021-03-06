ej.addCulture( "en-CA", {
	name: "en-CA",
	englishName: "English (Canada)",
	nativeName: "English (Canada)",
	numberFormat: {
		currency: {
			pattern: ["-$n","$n"]
		}
	},
	calendars: {
		standard: {
			"/": "-",
			patterns: {
				d: "yyyy-MM-dd",
				D: "MMMM d, yyyy",
				f: "MMMM d, yyyy h:mm tt",
				F: "MMMM d, yyyy h:mm:ss tt",
				M: "d MMMM",
				Y: "MMMM, yyyy"
			}
		}
	}
});
import utils from "loader-utils";

function loaderFn(source) {
	this.cacheable();

	const options = utils.getLoaderConfig(this, "knockoutTemplateLoader");
	const name = options.name || utils.interpolateName(this, "[name]-[ext]", {});

	return [
		"var ko = require('knockout');",
		"var stringTemplateEngine = require('knockout-template-loader/lib/string-template-engine');",
		source,
		`ko.templates['${name}'] = module.exports;`
	].join("\n");
}

module.exports = loaderFn;

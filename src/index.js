var utils = require("loader-utils");

function loaderFn(source) {
	this.cacheable();

	var options = utils.getLoaderConfig(this, "knockoutTemplateLoader");
	var name = options.name || utils.interpolateName(this, "[name]-[ext]", {});

	return [
		"var ko = require('knockout');",
		"var stringTemplateEngine = require('knockout-template-loader/src/string-template-engine');",
		source,
		`ko.templates['${name}'] = module.exports;`
	].join("\n");
}

module.exports = loaderFn;

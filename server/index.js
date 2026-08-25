import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx, jsxs } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), 6e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	ErrorBoundary: () => ErrorBoundary,
	Layout: () => Layout,
	default: () => root_default,
	links: () => links
});
var links = () => [
	{
		rel: "preconnect",
		href: "https://fonts.googleapis.com"
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
	}
];
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			children,
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsx(Outlet, {});
});
var ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary({ error }) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack;
	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
	}
	return /* @__PURE__ */ jsxs("main", {
		className: "pt-16 p-4 container mx-auto",
		children: [
			/* @__PURE__ */ jsx("h1", { children: message }),
			/* @__PURE__ */ jsx("p", { children: details }),
			stack
		]
	});
});
//#endregion
//#region app/assets/logo.png
var logo_default = "/assets/logo-DyIrLF7j.png";
//#endregion
//#region app/components/Header.tsx
function Header() {
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-blue-300 shadow-xl",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "flex h-56 justify-center",
				children: /* @__PURE__ */ jsx("img", {
					src: logo_default,
					alt: "logo"
				})
			}),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsxs("div", {
				className: "text-center",
				children: [/* @__PURE__ */ jsx("a", {
					className: "bg-white hover:bg-gray-400 text-black font-bold py-2 px-4 rounded",
					href: "mailto:hello@arkhandyman.net",
					children: "Get Free Estimate"
				}), "      "]
			}),
			/* @__PURE__ */ jsx("br", {})
		]
	});
}
//#endregion
//#region app/assets/service-plumbing.png
var service_plumbing_default = "/assets/service-plumbing-wUQmPJm1.png";
//#endregion
//#region app/assets/service-electric.png
var service_electric_default = "/assets/service-electric-BVLAvqTx.png";
//#endregion
//#region app/assets/service-hvac.png
var service_hvac_default = "/assets/service-hvac-Ce0Q63mq.png";
//#endregion
//#region app/assets/service-painting.png
var service_painting_default = "/assets/service-painting-Ddiw7gaO.png";
//#endregion
//#region app/assets/service-wood.png
var service_wood_default = "/assets/service-wood-BBtPfC_5.png";
//#endregion
//#region app/assets/service-yard.png
var service_yard_default = "/assets/service-yard-BL9BFv1S.png";
//#endregion
//#region app/components/Services.tsx
function Gallery$1() {
	return /* @__PURE__ */ jsxs("div", {
		className: "m-8 text-center",
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "text-4xl",
				children: "Services"
			}),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-2 justify-items-center sm:grid-cols-3 gap-x-7 gap-y-7",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", { children: "Plumbing" }), /* @__PURE__ */ jsx("img", {
						className: "max-h-[100px]",
						src: service_plumbing_default,
						alt: "plumbing"
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", { children: "HVAC" }), /* @__PURE__ */ jsx("img", {
						className: "max-h-[100px]",
						src: service_hvac_default,
						alt: "hvac"
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", { children: "Electric" }), /* @__PURE__ */ jsx("img", {
						className: "max-h-[100px]",
						src: service_electric_default,
						alt: "electric"
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", { children: "Carpentry" }), /* @__PURE__ */ jsx("img", {
						className: "max-h-[100px]",
						src: service_wood_default,
						alt: "carpentry"
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", { children: "Yard Work" }), /* @__PURE__ */ jsx("img", {
						className: "max-h-[100px]",
						src: service_yard_default,
						alt: "yard"
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", { children: "Painting/Drywall" }), /* @__PURE__ */ jsx("img", {
						className: "max-h-[100px]",
						src: service_painting_default,
						alt: "painting"
					})] })
				]
			}),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsx("p", { children: "Service not listed? Call now to discuss your needs!" })
		]
	});
}
//#endregion
//#region app/assets/gallery/shed.jpg
var shed_default = "/assets/shed-sbDW8CkA.jpg";
//#endregion
//#region app/assets/gallery/kitchen.jpg
var kitchen_default = "/assets/kitchen-Mg7M_5Mz.jpg";
//#endregion
//#region app/assets/gallery/table.jpg
var table_default = "/assets/table-DYqgf4dx.jpg";
//#endregion
//#region app/assets/gallery/hvac.jpg
var hvac_default = "/assets/hvac-GJ7ZNk2B.jpg";
//#endregion
//#region app/assets/gallery/ac.jpg
var ac_default = "/assets/ac-DpK-jQUr.jpg";
//#endregion
//#region app/components/Gallery.tsx
function Gallery() {
	return /* @__PURE__ */ jsxs("div", {
		className: "m-8 text-center",
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "text-4xl",
				children: "Previous Work"
			}),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 sm:grid-cols-3 gap-x-7 gap-y-7",
				children: [
					/* @__PURE__ */ jsx("img", {
						className: "rounded-lg max-h-[600px] w-full h-full object-cover",
						src: shed_default,
						alt: "shed"
					}),
					/* @__PURE__ */ jsx("img", {
						className: "rounded-lg max-h-[600px] w-full h-full object-cover",
						src: kitchen_default,
						alt: "kitchen"
					}),
					/* @__PURE__ */ jsx("img", {
						className: "rounded-lg max-h-[600px] w-full h-full object-cover",
						src: table_default,
						alt: "table"
					}),
					/* @__PURE__ */ jsx("img", {
						className: "rounded-lg max-h-[600px] w-full h-full object-cover",
						src: hvac_default,
						alt: "hvac"
					}),
					/* @__PURE__ */ jsx("img", {
						className: "rounded-lg max-h-[600px] w-full h-full object-cover",
						src: ac_default,
						alt: "ac"
					})
				]
			})
		]
	});
}
//#endregion
//#region app/components/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsx("div", {
		className: "",
		children: /* @__PURE__ */ jsxs("div", {
			className: "pl-20 pr-20 grid grid-cols-2 p-8 bg-blue-300",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex h-32",
				children: /* @__PURE__ */ jsx("img", {
					src: logo_default,
					alt: "logo"
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "text-right",
				children: [
					/* @__PURE__ */ jsx("h1", {
						className: "text-4xl",
						children: "Contact"
					}),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("p", { children: "316-660-4298" }),
					/* @__PURE__ */ jsx("a", {
						href: "mailto:hello@arkhandyman.net",
						children: "hello@arkhandyman.net"
					})
				]
			})]
		})
	});
}
//#endregion
//#region app/routes/home.tsx
var home_exports = /* @__PURE__ */ __exportAll({
	default: () => home_default,
	meta: () => meta
});
function meta() {
	return [{ title: "Ark Handyman" }, {
		name: "description",
		content: "Welcome to Ark Handyman"
	}];
}
var home_default = UNSAFE_withComponentProps(function Home() {
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx(Header, {}),
		/* @__PURE__ */ jsx(Gallery$1, {}),
		/* @__PURE__ */ jsx(Gallery, {}),
		/* @__PURE__ */ jsx(Footer, {})
	] });
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-tULx6c2k.js",
		"imports": ["/assets/jsx-runtime-9DXhWUXR.js", "/assets/errorBoundaries-BAoyOSvd.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": true,
			"module": "/assets/root-D9MkCYf1.js",
			"imports": ["/assets/jsx-runtime-9DXhWUXR.js", "/assets/errorBoundaries-BAoyOSvd.js"],
			"css": ["/assets/root-BDklLa6e.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home": {
			"id": "routes/home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-DpbwS3cH.js",
			"imports": ["/assets/jsx-runtime-9DXhWUXR.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-5fa7f5dd.js",
	"version": "5fa7f5dd",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build/client";
var basename = "/";
var future = {
	"unstable_enableNodeReadableStream": false,
	"unstable_optimizeDeps": false
};
var ssr = true;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/home": {
		id: "routes/home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };

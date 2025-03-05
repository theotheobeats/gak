import {
	createRootRoute,
	createRoute,
	createRouter,
} from "@tanstack/react-router";
import Home from "./pages/Home.js";
import DocumentationPage from "./pages/DocumentationPage.js";
import DevotionPage from "./pages/DevotionPage.js";
import { App } from "./App.js";

export const rootRoute = createRootRoute({
	component: App,
});

// Devotion route with dynamic parameter
export const homeRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: Home,
});

// Devotion route with dynamic parameter
export const documentationRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "documentation/$id",
	component: DocumentationPage,
});

// Devotion route with dynamic parameter
export const devotionRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "devotion/$id",
	component: DevotionPage,
});

// Create and export the router configuration
export const routeTree = rootRoute.addChildren([
	homeRoute,
	documentationRoute,
	devotionRoute,
]);

export const router = createRouter({ routeTree });

// Declare types for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

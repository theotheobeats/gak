import { Outlet } from "@tanstack/react-router";
import "./App.css";

export function App() {
	return (
		<div className="min-h-screen">
			<Outlet />
		</div>
	);
}

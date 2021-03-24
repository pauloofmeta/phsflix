import { BrowserRouter, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { MovieDetail } from "./pages/MovieDetail";
import { MovieList } from "./pages/MovieList";

function Routes() {
  return (
		<BrowserRouter>
			<Navbar />
			<Route path="/" exact component={MovieList} />
			<Route path="/movie/:id" component={MovieDetail} />
		</BrowserRouter>
	);
}

export default Routes;

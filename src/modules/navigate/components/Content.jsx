import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";

export const Content = () => {
	return (
		<Box minHeight='100vh'>
			<Outlet/>
		</Box>
	)
}
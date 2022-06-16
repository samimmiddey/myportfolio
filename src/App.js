import { Box, createTheme, ThemeProvider } from '@mui/material';
import { UIContextProvider } from './components/context/ui-context';
import Navigation from './components/Navigation/Navigation';
import './index.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonial/Testimonial';

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			xm: 375,
			sm: 650,
			md: 950,
			lg: 1250,
			xl: 1536,
		},
	},
	palette: {
		primary: {
			main: '#784cfb',
		},
		secondary: {
			main: '#6039d6',
		},
	},
	typography: {
		fontFamily: 'Poppins, sans-serif',
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
			 @font-face {
				font-family: 'Poppins';
				font-style: normal;
				font-weight: 400;
			 }
		  `,
		},
		MuiCard: {
			styleOverrides: {
				root: {
					border: '1px solid #eceff1',
					borderRadius: '10px'
				}
			}
		},
	},
});

const App = () => {
	return (
		<UIContextProvider>
			<ThemeProvider theme={theme}>
				<Box>
					<Navigation />
					<Home />
					<About />
					<Skills />
					<Services />
					<Portfolio />
					<Testimonial />
				</Box>
			</ThemeProvider>
		</UIContextProvider>
	);
};

export default App;
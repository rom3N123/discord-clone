import { Button, Text, Input, IconButton, Menu, Link, Popover } from './styled';
import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';

const theme = extendTheme({
	colors,
	components: {
		Input,
		Button,
		Text,
		IconButton,
		Link,
		Popover,
		Menu,
	},
});

export default theme;

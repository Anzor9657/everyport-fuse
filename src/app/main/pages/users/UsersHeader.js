import FuseAnimate from '@fuse/core/FuseAnimate';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText } from './store';

function UsersHeader(props) {
	const dispatch = useDispatch();
	const mainTheme = useSelector(selectMainTheme);
	const [search, setSearch] = useState('');

	useEffect(() => {
		dispatch(setSearchText(search));
	}, [dispatch, search]);

	return (
		<div className="flex flex-1 w-full items-center justify-between">
			<div className="flex items-center">
				<FuseAnimate animation="transition.expandIn" delay={300}>
					<Icon className="text-32">people</Icon>
				</FuseAnimate>
				<FuseAnimate animation="transition.slideLeftIn" delay={300}>
					<Typography className="hidden sm:flex mx-0 sm:mx-12" variant="h6">
						Users
					</Typography>
				</FuseAnimate>
			</div>
			<div className="flex flex-1 items-center justify-center px-12">
				<ThemeProvider theme={mainTheme}>
					<FuseAnimate animation="transition.slideDownIn" delay={300}>
						<Paper className="flex items-center w-full max-w-512 px-8 py-4 rounded-8 shadow">
							<Icon color="action">search</Icon>
							<Input
								placeholder="Search"
								className="flex flex-1 mx-8"
								disableUnderline
								fullWidth
								inputProps={{
									'aria-label': 'Search'
								}}
								value={search}
								onChange={({ target }) => setSearch(target.value)}
							/>
						</Paper>
					</FuseAnimate>
				</ThemeProvider>
			</div>
		</div>
	);
}

export default UsersHeader;

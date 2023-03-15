import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper} from '@mui/material';
import { purple } from '@mui/material/colors';
import { useState } from 'react';

export default function User() {

	const paperStyle = {padding: '50px 20px', width: 600, margin:'20px auto' };
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

  
	return (
	<Container> 
		<Paper elevation={3} style={paperStyle}>
			<h1 style={{color: 'black'}}>Log-in</h1>
			<Box
				component="form"
				sx={{
					'& > :not(style)': { m: 1, width: '40ch' },
				}}
				noValidate
				autoComplete="off"
			>
				<TextField id="outlined-basic" label="User email" variant="outlined"
				value={ email }
				onChange={(e) => setEmail(e.target.value)}
				/> 
				<TextField id="outlined-basic" label="password" variant="outlined"
				input type="password"
				value={(password)}
				onChange={(e) => setPassword(e.target.value)}
				/>
			
			</Box>
		</Paper>
	</Container>
  );
}

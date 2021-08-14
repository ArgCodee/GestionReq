import React, { useState } from 'react'
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'
import { Alert } from '@material-ui/lab';
import fondo from '../img/fondo.jpg'

const useStyles = makeStyles(theme => ({
	root: {
		backgroundImage: `url(${fondo})`, 
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '120vh'
	},
	container: {
		opacity: '0.8',
		height: '60%',
		marginTop: theme.spacing(14),
		[theme.breakpoints.down(300 + theme.spacing(2) + 2)]: {
			marginTop: 0,
			width: '100%',
			height: '100%'
		}
	},
	div: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.main
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1)
	},
	button: {
		margin: theme.spacing(2, 0, 2)
	}
}))



const LoginForm = ({Login,error}) => {
    //const [body, setBody] = useState({ nickname: '', password: '' })
    const [details, setDetails] = useState({ name: 'root',email:'', password: '' })
    const classes = useStyles()

    const camposVacio = !details.email || !details.password 

	const handleChange = e => {
		setDetails({
			...details,
			[e.target.name]: e.target.value
		})
	}

	const onSubmit = () => {
        Login(details)
	} 


    return (
        <Grid container component='main' className={classes.root}>
			<CssBaseline />
			<Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
				<div className={classes.div}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>Sign In</Typography>
					<form className={classes.form}>
						<TextField
							fullWidth
							autoFocus
							color='primary'
							margin='normal'
							variant='outlined'
							label='email'
							name='email'
							value={details.email}
							onChange={handleChange}
						/>
						<TextField
							fullWidth
							type='password'
							color='primary'
							margin='normal'
							variant='outlined'
							label='Password'
							name='password'
							value={details.password}
							onChange={handleChange}
						/>
						<Button
							fullWidth
							variant='contained'
							color='primary'
							className={classes.button}
							onClick={() => onSubmit() }
                            disabled = {camposVacio}
						>
							Sign In
						</Button>
					</form>
                    {error!='' ?<Alert variant="outlined" severity="error">{error}</Alert>:''}
                    
				</div>
			</Container>
		</Grid>
    )
}

export default LoginForm;
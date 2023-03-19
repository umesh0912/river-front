import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { SnackbarWrapper } from './snackbarwrapper';
import axios from 'axios';
import { apiUrl } from '@/shared/constants';
import OtpInput from './OtpInput';
import { downloadFile } from '@/shared/helpers';

interface IProps {
	open: boolean
	onClose: () => void
	formType: "enquiry" | "brochure"
};

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function FormDialog(props: IProps) {
	const [showOtpContent, setOtpContent] = React.useState(false);
	const [OTP, setOTP] = React.useState("");
	const [email, setEmail] = React.useState('');
	const [name, setName] = React.useState('');
	const [mobile, setMobile] = React.useState('');
	const [snackbarMessage, setSnackBarMessage] = React.useState('');
	const [showSnackBar, setSnackBar] = React.useState(false);
	const [snackType, setSnackType]= React.useState<"error" | "success" | "info" | "warning">("info");
	const [errorField, setErrorField] = React.useState('');

  const handleClose = () => {
    props.onClose()
  };

	const handleOtpSubmit = async () => {
		if(OTP.length < 6) {
			setSnackBar(true);
			setSnackBarMessage("please enter otp")
			setSnackType("error")
			return;
		}
		const response: any = await axios.post(`${apiUrl}api/verify/verifyOtp`,{
			email,
			otp: OTP
		});

		if(!response.isAxiosError) {
			setSnackBar(true);
			setSnackBarMessage(response.data.message)
			setSnackType("success")
			if(props.formType === 'brochure') {
				downloadFile(`${window.location.origin}/pdfs/Riverfront.pdf`, 'Riverfront.pdf');
			}
			props.onClose()
		}else {
			setSnackBar(true);
			setSnackBarMessage(response.data.message)
			setSnackType("error");
		}
	}

  const handleSubmit = async () => {
		if(!email || !name || !mobile) {
			let field;
			if(!email){
				field = 'email'
			}else if(!name) {
				field = 'name'
			}else {
				field = 'mobile'
			};
			setErrorField(field)
			return
		}
		const response: any = await axios.post(`${apiUrl}submitEnquiry`,{
				email,
				mobile,
				name ,
				"type": props.formType,
		});

		if(!response.isAxiosError) {
			if(response.data.stage === 'otp') {
				setOtpContent(true);
				setSnackBar(true);
				setSnackBarMessage(response.data.message)
				setSnackType("success")
			}else{
				setSnackBar(true);
				setSnackBarMessage(response.data.message)
				setSnackType("success")
				if(props.formType === 'brochure') {
					downloadFile(`${window.location.origin}/pdfs/Riverfront.pdf`, 'Riverfront.pdf');
				}
				setTimeout(() => {
					props.onClose()
				}, 2000);
			}
		}else {
			setSnackType("error")
			setSnackBar(true);
			setSnackBarMessage('Something went wrong try again later')
		}
		
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleTel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMobile(e.target.value);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

	const handleFocus = (fieldName: "email" | "mobile" | "name") => {
		if(errorField === fieldName) {
			setErrorField('')
		}
	}

	const closeSnackBar = () => {
		setSnackBarMessage('');
		setSnackBar(false);
	};

	const Title = props.formType === 'enquiry' ? 'Enquiry Form' : 'Download Brochure';

  return (
    <Dialog 
        open={props.open} 
        onClose={handleClose}
        aria-labelledby="register-modal-title"
        aria-describedby="register-modal-description"
        TransitionComponent={Transition}
    >
        <DialogTitle 
        sx={{'textAlign':'center', fontSize:'1rem',color: 'black'}}
        >{showOtpContent ? 'Enter Otp' : Title}</DialogTitle>
					<>{
						showOtpContent ? <><DialogContent>
							<OtpInput
								value={OTP}
								onChange={setOTP}
								numInputs={6}
							/>
						</DialogContent>
						<DialogActions
						sx={{
							background:'#FCA311',
							display: 'flex',
							alignItems:'center',
							justifyContent:'center'
						}}>
							<Button onClick={handleOtpSubmit} sx={{
								textTransform: 'capitalize',
								padding: '16px 8px',
								color: 'white',
							}}>Submit</Button>
						</DialogActions>
						</> : (
							<><DialogContent>
						<TextField
							autoFocus
							margin="dense"
							id="email"
							label="Email Address"
							type="email"
							fullWidth
							variant="standard"
							value={email}
							onChange={handleEmail}
							autoComplete='off'
							error={errorField === 'email'}
							helperText={errorField === 'email' ? "please enter email" : null}
							onFocus={() => handleFocus('email')} />
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="Name"
							type="text"
							fullWidth
							variant="standard"
							value={name}
							onChange={handleName}
							autoComplete='off'
							error={errorField === 'name'}
							helperText={errorField === 'name' ? "please enter name" : null}
							onFocus={() => handleFocus('name')} />
						<TextField
							autoFocus
							margin="dense"
							id="Mobile"
							label="Mobile"
							type="tel"
							fullWidth
							variant="standard"
							value={mobile}
							onChange={handleTel}
							autoComplete='off'
							error={errorField === 'mobile'}
							helperText={errorField === 'mobile' ? "please enter mobile number" : null}
							onFocus={() => handleFocus('mobile')} />
					</DialogContent><DialogActions>
							<span style={{ cursor: 'pointer' }}>
								<Button onClick={handleClose} sx={{
									textTransform: 'capitalize',
									padding: '16px 8px'
								}}>Cancel</Button>
							</span>
							<Button onClick={handleSubmit} sx={{
								textTransform: 'capitalize',
								padding: '16px 8px'
							}}>Submit</Button>
						</DialogActions></>
						)
					}
					</>
        {showSnackBar ? <SnackbarWrapper onClose={closeSnackBar} snackType={snackType} open={showSnackBar} message={snackbarMessage} /> : null}
    </Dialog>
  );
}
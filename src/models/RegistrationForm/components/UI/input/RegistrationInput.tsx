import cl from './RegistrationInput.module.scss'

import { FC } from 'react'
import { BiError } from 'react-icons/bi'
import { CiUser } from 'react-icons/ci'

interface RegistrationInputProps {
	register: any
	isErrorMassage: any
	errors: any
	description: string
	value?: string
}

export const RegistrationInput: FC<RegistrationInputProps> = ({
	register,
	isErrorMassage,
	errors,
	description,
	value
}) => {
	return (
		<>
			<div className={cl.error}>
				{isErrorMassage && (
					<div className={cl.error__label}>
						<BiError color='#8b0000' className={cl.error__icon} />
						<div>{isErrorMassage}</div>
					</div>
				)}
			</div>
			<div className={cl.wrapper}>
				<CiUser className={cl.userIcon} />

				<div className={cl.column}>
					<div className={cl.title}>
						<div className={cl.description}>{description}</div>
						<div className={cl.error__input}>{errors && 'Ошибка!'}</div>
					</div>
					<input
						list='value'
						value={value}
						type='text'
						className={cl.input}
						{...register}
					/>
					<datalist id='value'>
						<option value={'Salugas'}></option>
					</datalist>
				</div>
			</div>
		</>
	)
}

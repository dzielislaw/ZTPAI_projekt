import React from 'react';
import logo from '../img/logo.png';
import '../css/SignUp.css';
import {useForm} from "react-hook-form";
const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const onRegisterFormSubmit = async (data) => {
        try {
            const response = await fetch('http://127.0.0.1:80/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/ld+json',
                },
                body: JSON.stringify({
                    email: data.email,
                    plainPassword: data.password,
                    firstName: data.name,
                    lastName: data.surname,
                    pesel: data.pesel,
                    telephoneNumber: '00000000000',
                    nip: 'string',
                    rentals: [],
                    roles: [
                        'ROLE_CLIENT'
                    ]
                }),
            });
            if (response.ok) {
                console.log('register successful');
                console.log(response);
            } else {
                console.error('Register failed:', response.status);
            }
        } catch (e) {
            console.error('Error:', e);
        }
    };
    return (
        <div id="container_pcSignUp">
            <div id="bannerSignUp">
                <h1>BUD-apka</h1>
            </div>
            <div id="logoSignUp">
                <img src={logo} alt="Logo" />
            </div>
            <div id = "main_contentSignUp">
                <form onSubmit={handleSubmit(onRegisterFormSubmit)} method="POST">
                    <input type="text" name="name" id="name" placeholder="imię" {...register('name')}/>
                    <input type="text" name="surname" id="surname" placeholder="nazwisko" {...register('surname')}/>
                    <input type="text" name="pesel" id="pesel" placeholder="pesel" {...register('pesel')}/>
                    <input type="text" name="email" id="email" placeholder="email" {...register('email')}/>
                    <input type="password" name="password" id="password" placeholder="hasło" {...register('password')}/>
                    <input type="password" name="confirmedPassword" id="passwordConfirmation" placeholder="powtórz hasło" {...register('confirmedPassword')}/>
                    <label>
                        <input type="checkbox" id="agreementCheckboxSignUp" name="agreementCheckbox" value="Terms accepted" {...register('agreementCheckbox')}/>
                        Akceptuję warunki korzystania z serwisu
                    </label>
                    <input className="userInputSignUp" id="registerButton" type="submit" value="Załóż konto" />
                </form>
            </div>
            <div id="footerSignUp">
                <p>Contact details admin@sampleRentCompany.test.local &copy 2024</p>
            </div>
        </div>
    )
};

export default SignUp;
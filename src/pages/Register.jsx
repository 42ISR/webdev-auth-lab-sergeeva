import { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import { useUserStore } from '../store/useUserStore'
import { api, getErrorMessage } from '../api/api'

const Register = () => {
    const [error, setError] = useState('')
    const setSession = useUserStore((state) => state.setSession)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        if (e.target.password.value !== e.target.password2.value) {
            setError('Пароли не совпадают')
            return
        }

        const user = {
            username: e.target.username.value,
            password: e.target.password.value,
        }

        if (e.target.email.value) {
            user.email = e.target.email.value
        }

        try {
            const data = await api.registerUser(user)
            setSession(data)
            navigate('/')
        } catch (err) {
            setError(getErrorMessage(err))
        }
    }

    return (
        <div className="container">
            <div className="auth-container">
                <div className="auth-header">
                    <div className="auth-icon">👤</div>
                    <h1 className="auth-title">Регистрация</h1>
                    <p className="auth-subtitle">Создайте новый аккаунт</p>
                </div>

                {error && <div className="alert alert-error active">{error}</div>}

                <form id="register-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Имя пользователя</label>
                        <Input
                            type="text"
                            className="form-input"
                            name="username"
                            placeholder="Введите имя пользователя"
                            minLength="3"
                            required
                            autoComplete="username"
                        />
                        <div className="form-hint">Минимум 3 символа</div>
                        <div className="form-error">
                            Имя пользователя должно быть не менее 3 символов
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">
                            Email <span className="optional">(необязательно)</span>
                        </label>
                        <Input
                            type="email"
                            className="form-input"
                            name="email"
                            placeholder="example@email.com"
                            autoComplete="email"
                        />
                        <div className="form-error">Введите корректный email</div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Пароль</label>
                        <Input
                            type="password"
                            className="form-input"
                            name="password"
                            placeholder="Введите пароль"
                            minLength="6"
                            required
                            autoComplete="new-password"
                        />
                        <div className="password-strength">
                            <div
                                className="password-strength-bar"
                                id="password-strength-bar"></div>
                        </div>
                        <div className="form-hint">Минимум 6 символов</div>
                        <div className="form-error">
                            Пароль должен быть не менее 6 символов
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Подтверждение пароля</label>
                        <Input
                            type="password"
                            className="form-input"
                            name="password2"
                            placeholder="Повторите пароль"
                            required
                            autoComplete="new-password"
                        />
                        <div className="form-error">Пароли не совпадают</div>
                    </div>

                    <Button type="submit" className="btn-submit">
                        Зарегистрироваться
                    </Button>
                </form>

                <div className="auth-divider">или</div>

                <div className="auth-link">
                    <p>
                        <Link to={'/login'}>Войти</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register
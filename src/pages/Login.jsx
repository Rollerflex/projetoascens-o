import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styles from './Login.module.css'
import { supabase } from '../services/supabase'

import { useAuth } from '../contexts/AuthContext'

export default function Login() {

  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  const nav = useNavigate()

  const { login: doLogin } = useAuth()

  async function onSubmit(e) {

    e.preventDefault()

    setErro('')

    try {

      console.log('Login - onSubmit', { login, senha })

      const { data, error } =
  await supabase.auth.signInWithPassword({

    email: login,
    password: senha

  })

if (error) {

  setErro(error.message)

  return
}

console.log(data.user)

nav('/')

      nav(u.primeiroAcesso ? '/first-access' : '/')

    } catch (err) {

      setErro(err.message)

    }

  }

  return (
    <main className={styles.container}>

       <nav className={styles.nav}>
    <Link to="/" className={styles.back}>
      ← Voltar ao início
    </Link>
  </nav>

      <div className={styles.card}>

        <h1 className={styles.title}>
          Portal Astral
        </h1>

        <p className={styles.subtitle}>
          Acesse sua jornada interdimensional
        </p>

        <form onSubmit={onSubmit} className={styles.form}>

  <div className={styles.field}>
    <label htmlFor="lg">
      Login
    </label>

    <input
      id="lg"
      value={login}
      onChange={e => setLogin(e.target.value)}
      required
    />
  </div>

  <div className={styles.field}>
    <label htmlFor="pw">
      Senha
    </label>

    <input
      id="pw"
      type="password"
      value={senha}
      onChange={e => setSenha(e.target.value)}
      required
    />
  </div>

  {/* LINKS EXTRAS */}
  <div className={styles.actions}>

    <Link
      to="/forgot-password"
      className={styles.link}
    >
      Esqueci minha senha
    </Link>

    <Link
      to="/register"
      className={styles.linkSecondary}
    >
      Criar nova conta
    </Link>

  </div>

  {erro && (
    <div className={styles.error}>
      {erro}
    </div>
  )}

  <button
    type="submit"
    className={styles.button}
  >
    Acessar
  </button>

</form>

      </div>

    </main>
  )
}
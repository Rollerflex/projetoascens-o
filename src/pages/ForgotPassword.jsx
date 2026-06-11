import { useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../services/supabase'
import styles from './ForgotPassword.module.css'

export default function ForgotPassword() {

  async function onSubmit(e) {

  e.preventDefault()

  const { error } =
    await supabase.auth.resetPasswordForEmail(email)

  if (error) {

    setMensagem(error.message)

    return
  }

  setMensagem(
    'Um portal de recuperação foi enviado para seu e-mail astral'
  )
}

  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  return (
    <main className={styles.container}>

      <nav className={styles.nav}>
        <Link to="/login" className={styles.back}>
          ← Voltar ao login
        </Link>
      </nav>

      <div className={styles.card}>

        <h1 className={styles.title}>
          Recuperar Senha
        </h1>

        <p className={styles.subtitle}>
          Informe seu e-mail para receber instruções de recuperação.
        </p>

        <form
          onSubmit={onSubmit}
          className={styles.form}
        >

          <div className={styles.field}>

            <label htmlFor="email">
              E-mail
            </label>

            <input
              id="email"
              type="email"
              placeholder="seuemail@astral.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />

          </div>

          {mensagem && (
            <div className={styles.success}>
              {mensagem}
            </div>
          )}

          <button
            type="submit"
            className={styles.button}
          >
            Enviar recuperação
          </button>

        </form>

      </div>

    </main>
  )
}
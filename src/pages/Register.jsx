import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Register.module.css'
import { supabase } from '../services/supabase'

export default function Register() {

  const nav = useNavigate()

  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    origem: '',
    experiencia: '',
    aceite: false
  })

  const [erro, setErro] = useState('')

  const [loading, setLoading] = useState(false)

  function handleChange(e) {

    const { name, value, type, checked } = e.target

    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  async function onSubmit(e) {

    e.preventDefault()

    setErro('')

    setLoading(true)

try {
  // signup
} finally {
  setLoading(false)
}

    // valida e-mail
    const emailValido =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)

    if (!emailValido) {

      setErro('Digite um e-mail válido.')

      return
    }

    // valida aceite
    if (!form.aceite) {

      setErro('Você deve aceitar o termo de responsabilidade astral.')

      return
    }

    // cria usuário no Supabase Auth
    const { data, error } =
      await supabase.auth.signUp({

        email: form.email,

        password: form.senha,

        options: {
          data: {
            nome: form.nome
          }
        }

      })

    if (error) {

      setErro(error.message)

      return
    }

    const user = data.user

    // salva perfil na tabela profiles
    const { error: profileError } =
      await supabase
        .from('profiles')
        .insert({

          id: user.id,
          nome: form.nome,
          origem: form.origem,
          experiencia: form.experiencia,
          aceite: form.aceite

        })

    if (profileError) {

      setErro(profileError.message)

      return
    }

    nav('/login')
  }

  return (
    <main className={styles.container}>

      <nav className={styles.nav}>
        <Link to="/login" className={styles.back}>
          ← Voltar ao login
        </Link>
      </nav>

      <div className={styles.card}>

        <h1 className={styles.title}>
          Registro Astral
        </h1>

        <p className={styles.subtitle}>
          Inicie sua jornada interdimensional.
        </p>

        <form onSubmit={onSubmit} className={styles.form}>

          {/* NOME */}
          <div className={styles.field}>
            <label htmlFor="nome">Nome completo</label>
            <input
              id="nome"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </div>

          {/* EMAIL */}
          <div className={styles.field}>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* SENHA */}
          <div className={styles.field}>
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              name="senha"
              value={form.senha}
              onChange={handleChange}
              required
            />
          </div>

          {/* ORIGEM */}
          <div className={styles.field}>
            <label htmlFor="origem">
              Como ficou sabendo da empresa?
            </label>

            <select
              id="origem"
              name="origem"
              value={form.origem}
              onChange={handleChange}
              required
            >
              <option value="">Selecione</option>
              <option value="amigos">Indicação de amigos</option>
              <option value="internet">Internet</option>
              <option value="entidade">Revista Bons Fluidos</option>
              <option value="sonho">Sonho profético</option>
              <option value="entidade">Entidade astral</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          {/* EXPERIÊNCIA */}
          <div className={styles.field}>
            <label>Já realizou viagem astral anteriormente?</label>

            <div className={styles.radioGroup}>

              <label>
                <input
                  type="radio"
                  name="experiencia"
                  value="sim"
                  checked={form.experiencia === 'sim'}
                  onChange={handleChange}
                  required
                />
                Sim
              </label>

              <label>
                <input
                  type="radio"
                  name="experiencia"
                  value="nao"
                  checked={form.experiencia === 'nao'}
                  onChange={handleChange}
                />
                Não
              </label>

            </div>
          </div>

          {/* TERMO */}
          <div className={styles.checkbox}>

            <input
              type="checkbox"
              id="aceite"
              name="aceite"
              checked={form.aceite}
              onChange={handleChange}
            />

            <label htmlFor="aceite">
              Declaro estar ciente dos riscos de danos espirituais,
              distorções temporais e encontros interdimensionais.
            </label>

          </div>

          {/* ERRO */}
          {erro && (
            <div className={styles.error}>
              {erro}
            </div>
          )}

          {/* BOTÃO */}
          <button type="submit" disabled={loading} className={styles.button}>
            {loading ? 'Criando conta...' : 'Criar conta'}
          </button>

        </form>

      </div>

    </main>
  )
}